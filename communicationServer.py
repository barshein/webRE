import base64

import requests
from flask import Flask, render_template, send_from_directory
from flask import request

comm = Flask(__name__)

# main web page with all additional data (img, css..)
@comm.route('/', methods =["GET"])
def my_form():
    return render_template('web.html')

@comm.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)

@comm.route('/signUp', methods =["POST"])
def signUp():
    print("signUp")
    if request.method == "POST":
        json = {}
        json["email"] = request.form.get("email")
        json["name"] = request.form.get("name")
        json["userName"] = request.form.get("userName")
        json["password"] = request.form.get("password")
        json["sessionIds"] = {}
        res = requests.post("http://127.0.0.1:5050/signUp", json=json)
        return res.text
    return "0"

@comm.route('/verifyLogin', methods =["POST"])
def verfiyLogin():
    print("verifyLogin in communication")
    if request.method == "POST":
        json={}
        json["email"] = request.form.get("email")
        json["password"] = request.form.get("password")
        res = requests.post("http://127.0.0.1:5050/verifyLogin", json=json)
        return res.text
    return "0"

@comm.route('/', methods =["POST"])
def sendServiceInfo():
    print("in communication server")
    json = {}
    if request.method == "POST":
        json["sessionId"] = getNewSessionId()
        json["email"] = request.form.get("email")
        description = request.form.get("descriptionText")
        json["description"] = description
        json["photos"] = {}
        photos = list(request.files.listvalues())
        if len(photos) != 0:
            photos = list(request.files.listvalues())[0]
            for photo in photos:
                json["photos"][photo.filename] = base64.b64encode(photo.stream.read()).decode("utf8")
        print("send to api server")
        res = requests.post("http://127.0.0.1:5050", json=json)
        print("res in communication server - " + str(res.text))
        return res.text
    return my_form()


@comm.route('/getAllReports', methods =["POST"])
def getReportsData():
    print("in communication server - get reports")
    if request.method == "POST":
        json = {}
        json["email"] = request.form.get("email")
        print("send to api server - get reports ")
        res = requests.post("http://127.0.0.1:5050/getAllReports", json=json)
        print("return reports in communication server ")
        return res
    return my_form()


def getNewSessionId():
    sessionId = requests.get("http://127.0.0.1:5050/getNextSessionID")
    return sessionId.text

if __name__ == "__main__":
    print("communicationServer up in port: 8000")
    comm.run(port=8000)
