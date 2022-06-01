import random
from flask import Flask, request
from pymongo import settings

import io
import os
import PIL.Image as Image
import base64


be = Flask(__name__)

# both - text and photos endpoint
@be.route('/', methods=['POST'])
def analyze():
    print("in be server")
    path = os.path.dirname(os.path.realpath(__file__)) + "\\bar\\"
    json = request.get_json()
    description = json["description"]
    photos = json["photos"]
    photosFileNames = list(photos.keys())
    for fileName in photosFileNames:
        photo = photos.get(fileName)
        byte_data = str.encode(photo)
        parsedPhoto = base64.b64decode(byte_data)
        image = Image.open(io.BytesIO(parsedPhoto))
        fullpath = path + fileName  # need to open the folder first!
        image.save(fullpath)

    return str(random.randint(0,100))

if __name__ == "__main__":
    print("backendServer up in port: 4040")
    be.run(port=4040)
