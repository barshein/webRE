from flask import Flask, request
import requests
from mongodb import addData, updateCustumerSessionsByEmail

api = Flask(__name__)

@api.route('/', methods=['POST'])
def saveData():
    print("in api server - save data")
    json = request.get_json()
    addData(json)
    sessionId = {}
    sessionId["sessionId"] = json["sessionId"]
    print("send to be server")
    res = requests.post("http://127.0.0.1:4040", json=sessionId)
    print("res in api server - " + str(res.text))
    email = json["email"]
    print("api server update user : " + str(email) + " data")
    updateCustumerSessionsByEmail(email, json["sessionId"], res.text)
    return res.text

if __name__ == "__main__":
    print("apiServer up in port: 5050")
    api.run(port=5050)
