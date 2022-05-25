from communicationServer import comm as comserver
from backendServer import be as backserver
from apiServer import api as apiserver
import threading

def runComServer():
    print(" ### communicationServer up in port: 8000")
    comserver.run(port=8000, debug=False, threaded=True)

def runBackendServer():
    print(" ### backendServer up in port: 4040")
    backserver.run(port=4040, debug=False, threaded=True)

def runAPIServer():
    print(" ### apiServer up in port: 5050")
    apiserver.run(port=5050, debug=False, threaded=True)

if __name__ == "__main__":
    t1 = threading.Thread(target=runComServer)
    t2 = threading.Thread(target=runBackendServer)
    t3 = threading.Thread(target=runAPIServer)
    t1.start()
    t2.start()
    t3.start()
    t1.join()
    t2.join()
    t3.join()