import random
from flask import Flask, request
be = Flask(__name__)


@be.route('/analyzeText', methods=['POST'])
def analyzeText():
    print(request.get_json())
    print("return random")
    return str(random.randint(0,100))


# only photos endpoint
@be.route('/analyzePhotos', methods=['POST'])
def analyzePhotos():
    return str(random.randint(0,100))

# both - text and photos endpoint
@be.route('/fullAnalyze', methods=['POST', 'GET'])
def fullAnalyze():
    return str(random.randint(0,100))

if __name__ == "__main__":
    print("backendServer up in port: 4040")
    be.run(port=4040)
