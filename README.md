# ROV - A Disaster Robot made for fast data gathering for volunteers

ROV is our project submission in the hackathon named: Hackzilla in Manila by Freelancer.com

ROV is a disaster robot made using a hardware and software integration.

Hardware:
On the hardware side of the project, we used an arduino mega, L293D motor driver module, 2 Geared Motors, 3 IR Distance Sensors, 1 Ultrasonic Sensor. This part of the hardware controls the movement of the robot. The IR Distance Sensor and Ultrasonic Sensor alerts the arduino mega if there are any obstacles infront of the robot. The L293D motor drives the 2 geared motors, according to the input of the arduino mega.

The arduino mega is connected to a raspberry pi using a parallel cable. The arduino mega sends the information gathered to the raspberry pi using serial connection so that the raspberry pi could now what to do on that instant an IR sensor detects something. A web camera is also connected to the Raspberry Pi so that we could apply machine vision and further enhance the decision making of the pi.

Sofware:
On the software side of the project, we used NodeJS as our backend server holding all vendors and our site itself. On the front end side we used HTML, CSS, JS, Bootstrap to quickly build a site that could be opened on a local area network connection. The NodeJS also holds the key part of the site, a fast instantaneous chatapp, on which all persons connected to the network could speak to each other simultaneously.

We also used OpenCV as the machine vision library that handles facial recognition for the robot.

Team Aviato:
Francisc Camillo - OpenCV, raspberry pi algo
Shella Cantos - NodeJS Backend, Realtime Chat App
Shanilyn Santiago - Front End, (HTML, CSS, JS, Bootstrap)
Rommel Reyes - Arduino Mega algo, Arduino Hardware Physical Connection
Lleur Tan - Front End, (Photoshop, HTML, CSS)
