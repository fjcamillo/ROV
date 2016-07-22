def body_detect(camera, body_haar):
    import cv2

    cap = cv2.VideoCapture(camera)
    body = cv2.CascadeClassifier(body_haar)

    while True:
        _, img = cap.read()
        convert_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        detect = body.detectMultiScale(convert_gray)

        for (x, y, w, h) in detect:
            cv2.rectangle(img, (x, y), (x+w, y+h), (255,0,0),2)

        cv2.imshow('out', img)
        k = cv2.waitKey(30) & 0xff
        if k==27:
            break

    cv2.destroyAllWindows()
    cap.release()