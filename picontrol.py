
# This is a WIP

import RPi.GPIO as GPIO
import pyrebase




db = firebase.database()

if db.child("Led1Status").get():
	#GPIO.setmode(GPIO.BCM)
 	#GPIO.setup(21, GPIO.OUT)
 	#GPIO.output(21,GPIO.HIGH) # Relay is connected to GPIO pin 21
 	print('relay on')
else:
	#GPIO.setmode(GPIO.BCM) 
 	#GPIO.setup(21, GPIO.OUT)
 	#GPIO.output(21,GPIO.LOW)
	print('relay off')