def complete_detect(facexmls, eyesxmls, bodyxmls, camera):
    import cv2

    face_cascade = cv2.CascadeClassifier(facexmls)
    eye_cascade = cv2.CascadeClassifier(eyesxmls)
    body_cascade = cv2.CascadeClassifier(bodyxmls)

    cap = cv2.VideoCapture(camera)

    while True:

        ret, img = cap.read()
        convert_image_to_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(convert_image_to_gray, 1.3, 5)
        for (x,y,w,h) in faces:
            cv2. rectangle(img, (x, y), (x+w, y+h), (255, 0,0), 2)
            roi_gray = convert_image_to_gray[y:y+h, x:x+w]
            roi_color = img[y:y+h, x:x+w]
            eyes = eye_cascade.detectMultiScale(roi_gray)
            for (ex, ey, ew, eh) in eyes:
                cv2.rectangle(roi_color,(ex,ey),(ex+ew),(0,255,0),2)
        bodies = body_cascade.detectMultiScale(convert_image_to_gray)
        cv2.imshow('image', img)
        k = cv2.waitKey(30) & 0xFF

        if k==27:
            break

    cv2.destroyAllWindows()
    cap.release()

if __name__ == '__main__':
    complete_detect()