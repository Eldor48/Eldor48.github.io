grade = float(input('Which grade did you get in the course?'))

good_grade_vowel = "Congratulations, you got an "
good_grade = "Congratulations, you got a "
regular_grade = "Cheers, you got an C"
bad_grade = "Unfortunately, you didn't receive a good grade, you got a "
worst_grade = "You got a"

if grade >= 90 and grade <= 93:
    print("Congratulations, you got an A-")
    print()
    print("Congratulations, you passed the course!")
elif grade >= 94 and grade < 100:
    print("Congratulations, you got an A")
    print()

    print("Congratulations, you passed the course!")
elif grade == 100:
    print("Congratulations, you got an A+")
    print()

    print("Congratulations, you passed the course!")

elif grade >= 87 and grade <= 89:
    print("Congratulations, you got a B+")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 83 and grade <= 86:
    print("Congratulations, you got a B")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 80 and grade <= 82:
    print("Congratulations, you got a B-")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 77 and grade <= 79:
    print("Congratulations, you got a C+")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 73 and grade <= 76:
    print("Congratulations, you got a C")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 70 and grade <= 72:
    print("Congratulations, you got a C-")
    print()

    print("Congratulations, you passed the course!")
elif grade >= 67 and grade <= 69:
    print("You got a D+")
    print()
    print("Unfortunately you did not pass the course.")


elif grade >= 63 and grade <= 66:
    print("You got a D")
    print()

    print("Unfortunately you did not pass the course.")
elif grade >= 60 and grade <= 62:
    print("You got a D-")
    print()

    print("Unfortunately you did not pass the course.")
elif grade < 60:
    print("You got an F")
    print()

    print("Unfortunately you did not pass the course.")

else:
    print("This is not an valid grade")
