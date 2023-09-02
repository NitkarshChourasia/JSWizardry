/*
####  Lorentz-Transform the Electric and Magnetic Fields  ####

In this challenge, you'll create a function that takes the following three arguments:

Each of these vectors will be given as an array of its Cartesian components (e.g., the electric field will be given as [E_x, E_y, E_z]). Each component will be given as a number.
(There's no need to worry about units while solving; assume that E and B share a unit, and also that we've set the speed of light to 1, which renders velocities unitless.)
Given valid parameters, your function will return the electric and magnetic fields as measured in a second inertial frame, whose velocity as measured in the first frame is u (the third argument). Each of these output-vectors should be an array of its Cartesian components as strings, expressed in scientific notation to three significant digits (like "6.63e-34"). Return these vectors as the elements of an array, with the electric field coming first (i.e., [[E_x, E_y, E_z], [B_x, B_y, B_z]]).
(Assume that the Cartesian axes of the second frame are parallel to the corresponding axes of the first frame.)
To calculate the electric and magnetic fields in the second frame, use the following pair of vector equations, where "×" means the cross product and "•" means the dot product:
___
E′ = cosh(φ)E + sinh(φ)(û × B) - 2sinh²(.5φ)(û • E)û

B′ = cosh(φ)B - sinh(φ)(û × E) - 2sinh²(.5φ)(û • B)û
_____

Here, the "primed" fields on the left (E′ and B′) are the fields as measured in the second frame, and the "unprimed" fields on the right (E and B) are the fields as measured in the first frame.
The quantity û is the unit vector pointing in the same direction as u. Each of its Cartesian components is equal to the corresponding component of u divided by ||u||, which is the magnitude of u (you can calculate ||u|| by taking the square root of the sum of the squares of u's Cartesian components).
Finally, the quantity φ that's fed to the hyperbolic functions is the relative rapidity of the frames, defined as φ = artanh(||u||) (i.e., the inverse hyperbolic tangent of the frames' relative speed).
The parameters will be valid unless ||u|| ≥ 1 (because the relative speed of frames must be subluminal). If ||u|| ≥ 1, return "invalid velocity".


[Examples]

___
transformFields(
  [-26.24, 555.1, 53.32],  // electric field
  [1.030, 12.01, 287.8],  // magnetic field
  [-1, 0, 0] // velocity (too fast!)
) ➞ "invalid velocity"

transformFields(
  [-26.24, 555.1, 53.32],
  [1.030, 12.01, 287.8],
  [-.9999, 0, 0]  // (okay)
) ➞ [
  ["-2.62e+1", "5.96e+4", "2.92e+3"],
  ["1.03e+0", "-2.92e+3", "5.96e+4"]
]

transformFields(
  [1.234, 0, 0],
  [0, 1.234, 0],
  [.5, .5, 0]
) ➞ [
  ["1.49e+0", "-2.56e-1", "8.73e-1"],
  ["-2.56e-1", "1.49e+0", "8.73e-1"]
]
_____



[Notes]

___
*) One way to verify that the results are accurate is by comparing E • B with E′ • B′. The dot product of the electric field and the magnetic field is a Lorentz scalar, which means that it's a quantity whose value all observers agree on, regardless of their relative motion. Another Lorentz scalar is ||E||² - ||B||².
*) Light is characterized by electric and magnetic fields that share a magnitude and are mutually perpendicular (the Lorentz scalars mentioned in the previous paragraph guarantee that if these conditions are satisfied in one frame then they're satisfied in all frames). The third example fits the bill.
*) Another interesting tidbit: in the second example, note that the x-components of the fields in the second frame don't seem to differ from those in the first frame. That's because u is parallel to the x-axis here, and electromagnetic field-components parallel to the "boost" direction transform to themselves.
___



[algebra] [arrays] [geometry] [math] [physics] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

