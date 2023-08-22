/*
####  Escape Velocity II  ####

When escaping a compound system, such as a moon orbiting a planet or a planet orbiting a sun, a rocket that leaves at escape velocity (ve1) for the first (orbiting) body, (e.g. Earth) will not travel to an infinite distance because it needs an even higher speed to escape gravity of the second body (e.g. the Sun). Near the Earth, the rocket's trajectory will appear parabolic, but it will still be gravitationally bound to the second body and will enter an elliptical orbit around that body, with an orbital speed similar to the first body.
To escape the gravity of the second body once it has escaped the first body the rocket will need to be travelling at the escape velocity for the second body (ve2) (at the orbital distance of the first body). However, when the rocket escapes the first body it will still have the same orbital speed around the second body that the first body has. So its excess velocity as it escapes the first body will need to be the difference between the orbital velocity and the escape velocity. With a circular orbit, escape velocity is √2 times the orbital speed.


[Objective]

Create a function that takes a planet as an argument and returns the escape velocity from the system Planet/Sun expressed in km/s, as well as the ratio between the calculated escape velocity from the system Planet/Sun and the escape velocity from the system Earth/Sun.


[Data]

In the following table you will find for each planet its escape velocity relative to its own gravity and the escape velocity relative to the the Sun's gravity (at the corresponding orbital distance of the planet).

Consider:
___
k = 0.2929
_____



[Examples]

___
systemEscapeVelocity("Mercury") ➞ "The escape velocity from the system Mercury/Sun is 20.3 km/s. The escape velocity from the system Mercury/Sun is 1.2 times the escape velocity from the system Earth/Sun."

systemEscapeVelocity("Earth") ➞ "The escape velocity from the system Earth/Sun is 16.6 km/s. The escape velocity from the system Earth/Sun is 1.0 times the escape velocity from the system Earth/Sun."
_____



[Notes]

___
*) Round to the nearest tenth the escape velocity from the system Planet/Sun. Do not round the the escape velocity from the system Earth/Sun to calculate the ratio between escape velocities, but round the ratio to the nearest tenth.
*) See part #1 of this series: Escape Velocity I.
___



[math] [physics] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Escape Velocity
https://en.wikipedia.org/wiki/Escape_velocity
Is the minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body, that is, to achieve an infinite distance from …
_________
_________
Planetary Fact Sheet
https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
Including ratio to Earth values.
_________

*/
//Your code should go here:

