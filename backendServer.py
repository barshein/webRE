import random
from flask import Flask, request
from mongodb import getDataBySessionId


be = Flask(__name__)

# both - text and photos endpoint
@be.route('/', methods=['POST'])
def analyze():
    json = request.get_json()
    sessionId = json["sessionId"]
    print("in be server - session ID is: " + sessionId)
    # description, photos = getDataBySessionId(sessionId)
    return str(random.randint(0,100))

if __name__ == "__main__":
    print("backendServer up in port: 4040")
    be.run(port=4040)
