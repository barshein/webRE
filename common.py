
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