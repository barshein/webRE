from flask import Flask, request
import requests
from mongodb import addData
api = Flask(__name__)

@api.route('/', methods=['POST'])
def serviceFlowTemp():
    print("in api server")
    json = request.get_json()
    # description = json["description"]
    # photos = []
    # for k in json["photos"].keys():
    #     photos.append([k, base64.b64decode(json["photos"][k])])
    #
    # for photo in photos:
    #     with open("static/uploads/" + photo[0], "wb") as f:
    #         f.write(photo[1])
    addData(json)
    print("send to be server")
    res = requests.post("http://127.0.0.1:4040/analyzeText", json={'sr': 'data2'})
    print(res)
    print(res.text)
    return res.text

if __name__ == "__main__":
    print("apiServer up in port: 5050")
    api.run(port=5050)
