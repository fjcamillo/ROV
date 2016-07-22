def call_serial():
    import serial

    arduino = serial.Serial('tty6', 115200, timeout=.1)

    #DEBUGGING 
    while True:
        x = arduino.readline()
        print x

if __name__ == '__main__':
    call_serial()
