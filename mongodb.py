import pymongo
import json
import bcrypt
import hashlib


def resetConfDB():
  conf.delete_many({})
  conf.insert_one({"nextSessionID": "0"})

def resetDBs():
  x = data.delete_many({})
  print(x.deleted_count, " documents deleted.")
  x = customer.delete_many({})
  print(x.deleted_count, " customer deleted.")
  resetConfDB()
  print("conf reset")

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["realEstateDB"]

data = mydb["data"]
customer = mydb["customer"]
conf = mydb["conf"]

collist = mydb.list_collection_names()
if "data" in collist:
  print("The collection 'data' exists.")

if "customer" in collist:
  print("The collection 'customer' exists.")

if "conf" in collist:
  print("The collection 'conf' exists.")
else:
  resetConfDB()

# resetDBs()


def isDBcontaionEmail(email):
  print("check if email : " + str(email) +" is in db")
  query = {"email": email}
  info = list(customer.find(query))
  if info.__len__() == 0:
    return False
  else:
    return True

def addData(json):
  res = data.insert_one(json)
  print("is data saved - " + str(res.acknowledged))

def addCustomer(json):
  salt = str(bcrypt.gensalt(), 'utf-8')
  json["salt"] = salt
  password = json["password"]
  password = password + salt
  json["password"] = hashlib.sha256(password.encode()).hexdigest()
  res = customer.insert_one(json)
  print("is customer saved - " + str(res.acknowledged))

def getDataBySessionId(sessionId):
  query = { "sessionId": sessionId }
  info = list(data.find(query, { "sessionId": 0 }))[0]
  description = info["description"]
  dbPhotos = info["photos"]
  # photosList = []
  # for photo in dbPhotos:
  #   photosList.append(photo)
  # return description, photosList
  return description, dbPhotos

def getCustomerSessionsByEmail(email):
  if not isDBcontaionEmail(email):
    # the user is "google user"
    addCustomer({ "email":email, "name":"", "userName":"","":"","password":"","sessionIds":{} })
  sessions = list(customer.find({"email": email}))[0]["sessionIds"]
  return sessions

def updateCustumerSessionsByEmail(email, newSessionId, SessionResult):
  query = {"email": email}
  sessionIds = getCustomerSessionsByEmail(email)
  if isinstance(sessionIds, str):
    sessionIds = json.loads(sessionIds)
  sessionIds[newSessionId] = SessionResult
  newvalues = {"$set": {"sessionIds": json.dumps(sessionIds)}}
  customer.update_one(query, newvalues)

def getSaltByEmail(email):
  salt = list(customer.find({"email": email}))[0]["salt"]
  return salt

def couldLogin(email, password):
  salt = getSaltByEmail(email)
  hashPass = password + salt
  hashPass = hashlib.sha256(hashPass.encode()).hexdigest()
  query = {"email": email, "password": hashPass}
  info = list(customer.find(query))
  if info.__len__() == 0:
    return 0, ""
  return 1, info[0]["name"]

def updateNextSessionId(nextSessionID):
  newNextSessionId = nextSessionID + 1
  newvalue = {"$set": {"nextSessionID": str(newNextSessionId)}}
  conf.update_one({}, newvalue)

def getNextSessionIDFromDB():
  nextSessionID = int(list(conf.find())[0]["nextSessionID"])
  updateNextSessionId(nextSessionID)
  return nextSessionID
