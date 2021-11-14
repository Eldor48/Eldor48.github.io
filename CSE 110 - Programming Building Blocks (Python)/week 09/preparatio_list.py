# clients = []

# new_client = ""
# print("Welcome to the client database.")
# print("When you finish entering names, please type 'quit'.")
# while new_client.lower().strip() != "quit":
#     new_client = input("Please enter a new client name: ")
#     if new_client.lower().strip() != "quit":
#         clients.append(new_client) 
 
# for client in clients:
#     print(client)

# create a list with the numbers for the days of the week (0-6)
days = [500, 300, 150, 150, 350, 300, 150, 250, 250, 500, 300, 300, 150, 200, 150, 200, 300, 400, 50]

totalDays = 0 
 
for day in days:
    totalDays += day

print("FThe total number of days in the week is:", totalDays)