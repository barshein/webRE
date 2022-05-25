import pymongo
import json

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["realEstateDB"]

collist = mydb.list_collection_names()
if "data" in collist:
  print("The collection 'data' exists.")

if "customer" in collist:
  print("The collection 'customer' exists.")

data = mydb["data"]
customer = mydb["customer"]

# x = data.delete_many({})
# print(x.deleted_count, " documents deleted.")
# x = customer.delete_many({})
# print(x.deleted_count, " customer deleted.")

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
  res = customer.insert_one(json)
  print("is custumer saved - " + str(res.acknowledged))

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

def couldLogin(email, password):
  query = {"email": email, "password": password}
  info = list(customer.find(query))
  if info.__len__() == 0:
    return 0, ""
  return 1, info[0]["name"]
