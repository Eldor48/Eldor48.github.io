grade = float(input('Which grade did you get in the course?'))

good_grade_vowel = "Congratulations, you got an "
good_grade = "Congratulations, you got a "
regular_grade = "Cheers, you got an C"
bad_grade = "Unfortunately, you didn't receive a good grade, you got a "
worst_grade = "You got a"

if grade >= 90 and grade <= 93: 
   print("Congratulations, you got an -A")
elif grade >= 94 and grade < 100:
    print("Congratulations, you got an A")
elif grade == 100:
    print("Congratulations, you got an A+")

elif grade >= 87 and grade <= 89:
    print("Congratulations, you got a B+")
elif grade >= 83 and grade <= 86:
      print("Congratulations, you got a B")
elif grade >= 80 and grade <= 82:
       print("Congratulations, you got a B")
elif grade < 60:
    print(f"{worst_grade} D")

else:
    print("This is not an valid grade")



