import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["realEstateDB"]

data = mydb["data"]
customer = mydb["customer"]

# should print "data" and "customer"
collist = mydb.list_collection_names()
if "data" in collist:
  print("The collection 'data' exists.")

if "customer" in collist:
  print("The collection 'customer' exists.")

def isDBcontaionEmail(email):
  query = {"email": email}
  details = customer.find(query)
  if details: # not null
    return True
  else:
    return False

def addData(json):
  res = data.insert_one(json)
  print(res)

def addCustomer(json):
  res = customer.insert_one(json)
  print(res)

def getCustomerSessionsByEmail(email):
  query = {"email": email}
  return customer.find(query, {"name": 0, "email": 0, "password": 0, "sessionIds": 1})

def getDataBySessionId(sessionId):
  query = { "sessionId": sessionId }
  info = data.find(query, { "sessionId": 0 })
  description = info["description"]
  dbPhotos = info["photos"]
  photosList = []
  for photo in dbPhotos:
    photosList.append(photo)

  return description, photosList

def updateCustumerSessionsByEmail(email, newSessionId, SessionResult):
  sessionIds = getCustomerSessionsByEmail(email)
  sessionIds[newSessionId] = SessionResult
  query = {"email": email}
  newvalues = {"$set": {"sessionIds": sessionIds}}
  customer.update_one(query, newvalues)


def couldLogin(email, password):
  query = {"email": email, "password": password}
  info = data.find(query, {"sessionId": 0})
  if info:
    return 0, ""
  return 1, info["name"]
