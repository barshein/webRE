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

def addData(json):
  res = data.insert_one(json)
  # or collection.insert_many([{"test": 22345}])
  print(res)

def addCustomer(json):
  res = customer.insert_one(json)
  print(res)

