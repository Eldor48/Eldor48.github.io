def windchillFormula(temperature, speed):
    result = 35.74 + 0.6215 * (temperature) - 35.75 * (speed ** 0.16) + 0.4275 * (temperature) * (speed ** 0.16)
    return result
def CelsiusToFahrenheit(temperatureFahrenheit):
    temeperature = (temperatureFahrenheit * 9/5) + 32
    return temeperature
def FahrenheitToCelsius(temperatureFahrenheit):
    temperature = (temperatureFahrenheit - 32) * 5/9
    return temperature

value = 0

temperature = float(input("What is the temperature? "))
unit = input("Is the temperature in Celsius or Fahrenheit? (F/C)").upper()
conversion = input("Convert the result to celsius (Yes/No) ").upper()
if unit == "CELSIUS":
   temperature = CelsiusToFahrenheit(temperature)
if conversion == "NO":
    while value < 60:
          value +=5
          result = windchillFormula(temperature, value)
          print(f"At temperature {temperature}{unit}, and wind speed {value} mph, the wind chill index is {result:.2f}C")
elif conversion == "YES": 
    while value < 60:
          value +=5
          result = windchillFormula(temperature, value)
          print(f"At temperature {temperature}{unit}, and wind speed {value} mph, the wind chill index is {result:.2f}C")