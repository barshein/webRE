from flask import Flask, render_template, send_from_directory
from flask import request
import requests
from waitress import serve

comm = Flask(__name__)


# main web page with all additional data (img, css..)
@comm.route('/', methods =["GET"])
def my_form():
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
       photos = request.form.get("photosInfo")
       # if photos != NoneType:
       #     print(photos.size())
       print(description)
    print("send to api")
    res = requests.post("http://127.0.0.1:5050/serviceFlowTemp", json={'str': 'datatata'})
    print(res)
    print(str(res))
    print(res.text)
    print(str(res.text))
    return str(res.text)


if __name__ == "__main__":
    print("communicationServer up in port: 8000")
    comm.run(port=8000)
