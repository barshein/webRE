from communicationServer import comm as comserver, start
from backendServer import be as backserver
from apiServer import api as apiserver
import threading

class Request:
  def __init__(self, text, photos):
    self.haveText = True
    self.havePhoto = True
    self.text = text # or path in db ?
    self.photos = photos

    if text is None:
      self.haveText = False
    if photos is None:
      self.havePhoto = False



# text + prediction
class Response:
  def __init__(self, prediction_grade, recommendations):
    self.prediction_grade = prediction_grade
    self.recommendations = recommendations


# With Multi-Threading Apps, YOU CANNOT USE DEBUG!
# Though you can sub-thread.
def runComServer():
    print("yay")
    comserver.run(port=8000, debug=False, threaded=True)

def runBackendServer():
    print("bla")
    backserver.run(port=4040, debug=False, threaded=True)

def runAPIServer():
    print("lol")
    apiserver.run(port=5050, debug=False, threaded=True)

def main():
  # Executing the Threads seperatly.
  t1 = threading.Thread(target=runComServer)
  t2 = threading.Thread(target=runBackendServer)
  t3 = threading.Thread(target=runAPIServer)
  t1.start()
  t2.start()
  t3.start()
  t1.join()
  t2.join()
  t3.join()

if __name__ == "__main__":
  main()