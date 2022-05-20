import base64

import requests
from flask import Flask, render_template, send_from_directory
from flask import request
from mongodb import addCustomer, isDBcontaionEmail, updateCustumerSessionsByEmail


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
    json = {}
    if request.method == "POST":
        json["email"] = request.form.get("email")
        if not isDBcontaionEmail(json["email"]):
            json["name"] = request.form.get("name")
            json["password"] = request.form.get("password")
            json["sessionIds"] = {}
            print("save customer")
            addCustomer(json)
    return my_form()

@comm.route('/', methods =["POST"])
def sendServiceInfo():
    print("in communication server")
    json = {}
    if request.method == "POST":
        json["sessionId"] = getNewSessionId()
        description = request.form.get("descriptionText")
        json["description"] = description
        photos = list(request.files.listvalues())[0]
        json["photos"] = {}
        for photo in photos:
            json["photos"][photo.filename] = base64.b64encode(photo.stream.read()).decode("utf8")
        print("send to api server")
        res = requests.post("http://127.0.0.1:5050", json=json)
        print("res in communication server - " + res.txt)
        # updateCustumerSessionsByEmail(email, json["sessionId"], res.txt)
        return res.text
    return my_form

def getNewSessionId():
    # get from ignite memory + update the memo by +1
    return 1

if __name__ == "__main__":
    print("communicationServer up in port: 8000")
    comm.run(port=8000)
