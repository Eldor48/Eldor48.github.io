
"""
Purpose: Calculate the speed of a falling object using the formula:

v(t) = sqrt(mg/c) * (1 - exp((-sqrt(mgc)/m)*t))

"""
import math

print("Welcome to the velocity calculator. Please enter the following:\n")

mass = float(input("Mass (in kg): "))
gravity = float(input("in m/s^2, 9.8 for Earth, 24 for Jupiter: "))
time = float(input("Time (in seconds): "))
density = float(input("Density of the fluid (in kg/m^3, 1.3 for air, 1000 for water): "))
cross_sectional_area = float(input("Cross sectional area (in m^2): "))
drag_constant = float(input("Drag constant (0.5 for sphere, 1.1 for cylinder): \n"))

c = (1/2) * density * cross_sectional_area * drag_constant

velocity = math.sqrt(mass * gravity / c) * (1 - math.exp(-math.sqrt(mass* gravity * c) / mass)* time)

print(f"The inner value of c is: {c:.3f} \n")

print(f"The velocity after {time:.0f} seconds is: {velocity:.3f}")

