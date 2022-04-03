from flask import Flask, render_template
from flask import request

comm = Flask(__name__)

@comm.route('/')
def my_form():
    return render_template('web.html')
    # return render_template('ss.html')

@comm.route('/', methods=['POST'])
def login():
    username = request.form['username']
    # password = request.form['password']
    print(username)
    # print(password)
    return "hi"


if __name__ == "__main__":
    from waitress import serve
    serve(comm, host="0.0.0.0", port=8000)
