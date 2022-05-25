import random
from flask import Flask, request
from pymongo import settings

from mongodb import getDataBySessionId
import io
import os
import PIL.Image as Image
import base64


be = Flask(__name__)

# both - text and photos endpoint
@be.route('/', methods=['POST'])
def analyze():
    json = request.get_json()
    sessionId = json["sessionId"]
    print("in be server - session ID is: " + str(sessionId))
    description, photos = getDataBySessionId(sessionId)
    # firstPhoto = base64.b64encode(photos[0].stream.read()).encode("utf8")
    firstPhoto = photos.get('d1.jpg')
    byte_data = str.encode(firstPhoto)
    b = base64.b64decode(byte_data)
    image = Image.open(io.BytesIO(b))
    path = os.path.dirname(os.path.realpath(__file__))
    filename = "hihi.jpg"
    fullpath = path + "\\bar\\" + filename # need to open the folder first!
    image.save(fullpath)
    return str(random.randint(0,100))

if __name__ == "__main__":
    print("backendServer up in port: 4040")
    be.run(port=4040)
