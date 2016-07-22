#include <NewPing.h>
#include <AFMotor.h>

#define TRIGGER_PIN  51
#define ECHO_PIN     53
#define MAX_DISTANCE 200

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

AF_DCMotor motorleft(1);
AF_DCMotor motorright(2);

void setup() {
  Serial.begin(115200);
  Serial.println("Aviato Rover Technology!");

  motorleft.setSpeed(240);
  motorright.setSpeed(240);
}

void loop() {
  delay(50);
  Serial.print("Ping: ");
  Serial.print(sonar.ping_cm());
  Serial.println("cm");

  motorleft.run(FORWARD);
  delay (1000);
  motorright.run(FORWARD);
  delay (1000);
  
  motorleft.run(BACKWARD);
  delay(1000);
  motorright.run(BACKWARD);
  delay(1000);

  motorleft.run(RELEASE);
  delay(1000);
  motorright.run(RELEASE);
  delay(1000);
}


