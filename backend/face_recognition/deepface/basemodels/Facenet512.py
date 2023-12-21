import os
import gdown
from face_recognition.deepface.basemodels import Facenet
from face_recognition.deepface.commons import functions
from face_recognition.deepface.commons.logger import Logger

logger = Logger(module="basemodels.Facenet512")

def loadModel(
    url="https://github.com/serengil/deepface_models/releases/download/v1.0/facenet512_weights.h5",
):

    model = Facenet.InceptionResNetV2(dimension=512)

    # -------------------------

    home = functions.get_deepface_home()

    if os.path.isfile(home + "/.deepface/weights/facenet512_weights.h5") != True:
        logger.info("facenet512_weights.h5 will be downloaded...")

        output = home + "/.deepface/weights/facenet512_weights.h5"
        gdown.download(url, output, quiet=False)

    # -------------------------

    model.load_weights(home + "/.deepface/weights/facenet512_weights.h5")

    # -------------------------

    return model
