from flask import Flask, request
import requests
import mongodb

api = Flask(__name__)

@api.route('/', methods=['POST'])
def saveData():
    print("in api server - save data")
    json = request.get_json()
    mongodb.addData(json)
    sessionId = {}
    sessionId["sessionId"] = json["sessionId"]
    print("send to be server")
    res = requests.post("http://127.0.0.1:4040", json=sessionId)
    print("res in api server - " + str(res.text))
    email = json["email"]
    print("api server update user : " + str(email) + " data")
    mongodb.updateCustumerSessionsByEmail(email, json["sessionId"], res.text)
    return res.text

@api.route('/getNextSessionID', methods=['GET'])
def getNextSessionID():
    return str(mongodb.getNextSessionIDFromDB())

@api.route('/verifyLogin', methods =["POST"])
def verfiyLogin():
    print("verifyLogin in api")
    json = request.get_json()
    email = json["email"]
    password = json["password"]
    canLogin, name = mongodb.couldLogin(email, password)
    if canLogin:
        return name
    return "0"

@api.route('/signUp', methods =["POST"])
def signUp():
    print("signUp in api")
    json = request.get_json()
    if not mongodb.isDBcontaionEmail(json["email"]):
        print("save customer")
        mongodb.addCustomer(json)
        return "1"
    return "0"

if __name__ == "__main__":
    print("apiServer up in port: 5050")
    api.run(port=5050)
