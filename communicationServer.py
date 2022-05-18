from flask import Flask, render_template, send_from_directory
from flask import request
import requests
import os
import base64
from waitress import serve

comm = Flask(__name__)


# main web page with all additional data (img, css..)
@comm.route('/', methods =["GET"])
def my_form():
    print("111")
    return render_template('web.html')

@comm.route('/#Service')
def my_forDSADSm():
    return render_template('web.html')

@comm.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)
    # return render_template("/static/"+path)


@comm.route('/', methods =["POST"])
def sendServiceInfo():
    if request.method == "POST":
       description = request.form.get("descriptionText")
       photos = list(request.files.listvalues())[0]
       json = {}
       json["description"] = description
       json["photos"] = {}
       for photo in photos:
           json["photos"][photo.filename] = base64.b64encode(photo.stream.read()).decode("utf8")
           # photo.save(os.path.join("static/uploads", photo.filename))

    print("send to api")
    res = requests.post("http://127.0.0.1:5050/serviceFlowTemp", json=json)
    print(res)
    return res.text

def start():
    comm.run(port=8000, debug=False, threaded=True)

if __name__ == "__main__":
    print("communicationServer up in port: 8000")
    comm.run(port=8000)
