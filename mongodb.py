import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["realEstateDB"]

data = mydb["data"]

# should print "data"
print(mydb.list_collection_names())

collist = mydb.list_collection_names()
if "data" in collist:
  print("The collection 'data' exists.")


def add_data(json):
  res = data.insert_one(json)
  print(res)
