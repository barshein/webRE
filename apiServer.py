from flask import Flask, request
import requests
import common
api = Flask(__name__)

def saveTextInDB(data):
    print("text was save in DB")
    # DO SOMETHING
    # raise Exception("Sorry, no numbers below zero")


def savePhotosInCloud(data):
    print("photos was save in cloud")
    # DO SOMETHING
    # raise Exception("Sorry, no numbers below zero")

def buildURL(haveText, havePhoto):
    # have both
    if haveText and havePhoto:
        return "http://127.0.0.1:8080/both"
    # have only text
    if haveText and not havePhoto:
        return "http://127.0.0.1:8080/text"
    # have only photos
    if havePhoto and not haveText:
        return "http://127.0.0.1:8080/photos"


@api.route('/serviceFlowTemp', methods=['POST'])
def serviceFlowTemp():
    print(request.get_json())
    print("send to be")
    res = requests.post("http://127.0.0.1:4040/analyzeText", json={'sr': 'data2'})
    print(res)
    print(res.text)
    return res.text



# @api.route('/some', methods=['POST'])
# def serviceFlow():
    # data = request.get_json()
    #
    # # UPDATE ID NOT NULL
    # haveText = False
    # havePhoto = False
    #
    # # WRITE TO DBs
    # try:
    #     if haveText:
    #         saveTextInDB(data)
    #     if havePhoto:
    #         savePhotosInCloud(data)
    # except:
    #     print("exception")
    #     # DIFF MASSAGE - THROW TO CLIENT SIDE ERROR ?
    #     # IF BOTH MISSING - THROW DIFF MASSAGE
    #
    #
    # # IF EVERY THING IS FINE - SEND REQ TO BE- ENGINE
    #
    # # BUILD REQ CLASS
    # # req = Request(text, photos)
    # req = common.Request("text", "photos")
    #
    # url = buildURL(haveText, havePhoto)
    # return requests.post(url, json={req})


if __name__ == "__main__":
    print("apiServer up in port: 5050")
    api.run(port=5050)
