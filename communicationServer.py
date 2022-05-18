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

@comm.route('/', methods =["POST"])
def sendServiceInfo():
    print("in communication server")
    json = {}
    if request.method == "POST":
        description = request.form.get("descriptionText")
        json["description"] = description
        photos = list(request.files.listvalues())[0]
        json["photos"] = {}
        for photo in photos:
            json["photos"][photo.filename] = base64.b64encode(photo.stream.read()).decode("utf8")
    print("send to api server")
    res = requests.post("http://127.0.0.1:5050", json=json)
    print("res in communication server - " + res)
    return res.text

if __name__ == "__main__":
    print("communicationServer up in port: 8000")
    comm.run(port=8000)
