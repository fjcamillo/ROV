#include <NewPing.h>
#include <AFMotor.h>

#define trigPin 51
#define echoPin 53
#define MAX_DISTANCE 200


AF_DCMotor motorleft(1);
AF_DCMotor motorright(2);

void setup() {
  Serial.begin(115200);
  Serial.println("Aviato Rover Technology!");
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  motorleft.setSpeed(240);
  motorright.setSpeed(240);

  
}

void loop() {
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin,HIGH);
  distance = (duration/2) / 29.1;
  Serial.print("Ping: ");
  Serial.print(distance);
  Serial.println(" cm");
  
 if(distance > 20) {
  motorleft.run(BACKWARD);
  motorright.run(BACKWARD);
 }

 else {
  motorleft.run(BACKWARD);
  motorright.run(FORWARD);
  motorleft.run(BACKWARD);
  motorright.run(FORWARD);
  motorleft.run(BACKWARD);
  motorright.run(FORWARD);
 }
  delay(250);
}


