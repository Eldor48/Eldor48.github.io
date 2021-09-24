print("Please enter the following information")

print()

first_name = input("First name: ")
last_name = input("Last name: ")
email_address = input("Email address: ")
phone_number = input("Phone number: ")
job_title = input("Job title: ")
id_number = input("Id number: ")


# Ask for the additional information
hair_color = input("Hair color: ")
eye_color = input("Eye color: ")
month = input("Starting Month: ")
training = input("Completed additional training? ")

print()

print("\nThe ID card is:")
print()
print("-----------------------------------------------------")

print(f"{last_name.upper()}, {first_name.capitalize()}")
print(job_title.title())
print(f"ID: {id_number}")
print()
print(email_address.lower())
print(phone_number)
print("-----------------------------------------------------")
print()
print(f"Hair: {hair_color:15} Eyes: {eye_color}")
print(f"Month: {month:14} Training: {training}")
