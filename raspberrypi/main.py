from camera_detection import camera_detect
from body_detection import body_detect
from complete_detection import complete_detect
eyes = './vendor/haarcascade_eye.xml'
face = './vendor/haarcascade_frontalface_default.xml'
body = './vendor/haarcascade_fullbody.xml'

def main():
    # camera_detect(face, eyes, 0)
    # body_detect(0, body)
    complete_detect(face, eyes, body, 0)

if __name__ == '__main__':
    main()