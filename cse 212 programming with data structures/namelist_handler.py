# List of names
names = ['John', 'Emily', 'Michael', 'Sarah', 'David', 'Enmanuel']

# Initialize queue and longest name
queue = []
longest_name = ''

# Iterate through names
for name in names:
  # Add name to queue
  queue.append(name)

# Iterate through queue
while queue:
  # Get name from front of queue
  name = queue.pop(0)

  # Update longest name if necessary
  if len(name) > len(longest_name):
    longest_name = name

# Print longest name
print(longest_name)
