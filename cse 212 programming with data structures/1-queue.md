# Queues

In Python, a queue is a data structure that allows you to store and retrieve data in a first-in, first-out (FIFO) manner. This means that the data that is added to the queue first is the first to be removed. Queues are commonly used in computer programming to manage and organize data. In Python, the queue data structure can be implemented using the Queue class from the queue module. This class provides various methods for working with the queue, such as put() to add data to the queue and get() to retrieve data from the queue. 



Here is an example of how to create and use a queue in Python:

```
from queue import Queue

# Create a queue
q = Queue()

# Add data to the queue
q.put("data1")
q.put("data2")
q.put("data3")

# Retrieve data from the queue
data1 = q.get()
data2 = q.get()
data3 = q.get()

# Print the data
print(data1)  # Output: data1
print(data2)  # Output: data2
print(data3)  # Output: data3


```

In this example, we first import the Queue class from the queue module. Then, we create an instance of the Queue class and store it in the q variable. Next, we add some data to the queue using the put() method. Finally, we retrieve the data from the queue using the get() method and print it to the console.

## Structure

One example of using a queue in Python in a real-life scenario is in a task scheduling system. For example, suppose you have a system that processes tasks that are submitted by users. In this case, you could use a queue to store the tasks that are submitted by the users and retrieve them in the order that they were submitted. Here is an example of how this could be implemented in Python:

```
from queue import Queue

# Create a queue to store the tasks
tasks = Queue()

# Add tasks to the queue
tasks.put("Task 1")
tasks.put("Task 2")
tasks.put("Task 3")

# Process the tasks in the queue
while not tasks.empty():
    # Retrieve the next task from the queue
    task = tasks.get()

    # Perform the task
    print("Processing task:", task)

```

In this example, we create a queue to store the tasks that are submitted by the users. Then, we add some tasks to the queue using the put() method. Finally, we use a while loop to retrieve and process the tasks in the queue until the queue is empty. In this case, since we added the tasks to the queue in a FIFO manner, the first task that is processed is "Task 1", followed by "Task 2" and "Task 3".

### Real-life example

![Figure 1](grocery-store.jpg)
<figcaption align = "center"><b>Figure 1 - Person at a grocery store</b></figcaption>

One example of a real-life situation where a queue is used is in a grocery store. When customers enter the store, they typically form a queue at the checkout counter to pay for their items. The customers are served in the order that they arrived at the counter, with the first customer in the queue being served first. This is an example of a FIFO (first-in, first-out) queue, where the first person to arrive is the first to be served. In Python, we could implement this using the Queue class from the queue module:

```
from queue import Queue

# Create a queue to store the customers
customers = Queue()

# Add customers to the queue
customers.put("Customer 1")
customers.put("Customer 2")
customers.put("Customer 3")

# Serve the customers in the queue
while not customers.empty():
    # Retrieve the next customer from the queue
    customer = customers.get()

    # Serve the customer
    print("Serving customer:", customer)


```

In this example, we create a queue to store the customers that are waiting at the checkout counter. Then, we add some customers to the queue using the put() method. Finally, we use a while loop to retrieve and serve the customers in the queue until the queue is empty. In this case, since we added the customers to the queue in a FIFO manner, the first customer to be served is "Customer 1", followed by "Customer 2" and "Customer 3".


## Reading and writing from a queue

To read from a queue in Python, you can use the get() method of the Queue class. This method retrieves an item from the queue and removes it from the queue. Here is an example of how to use the get() method to read from a queue:


```
from queue import Queue

# Create a queue
q = Queue()

# Add data to the queue
q.put("data1")
q.put("data2")
q.put("data3")

# Retrieve data from the queue
data1 = q.get()
data2 = q.get()
data3 = q.get()

# Print the data
print(data1)  # Output: data1
print(data2)  # Output: data2
print(data3)  # Output: data3

```

In this example, we create a queue and add some data to it using the put() method. Then, we use the get() method to retrieve the data from the queue and store it in the data1, data2, and data3 variables. Finally, we print the data to the console to verify that it was retrieved correctly.

To write to a queue in Python, you can use the put() method of the Queue class. This method adds an item to the queue. Here is an example of how to use the put() method to write to a queue:

```
from queue import Queue

# Create a queue
q = Queue()

# Add data to the queue
q.put("data1")
q.put("data2")
q.put("data3")

``` 

In this example, we create a queue and use the put() method to add three items to the queue: "data1", "data2", and "data3". This data will be added to the queue in the order that it was added, so the first item to be retrieved from the queue will be "data1", followed by "data2" and "data3".

## Python Syntax
As we could see in the previous section, a queue can be implemented on Python by using a list. 
The following pieces of code can be used to implement a queue in Python:
<br> 

* >``` list.append(item) ```: It adds a new item to the back of the queue
* >``` data = list.pop(0) ```: It removes and returns the item at the front of the queue
* >``` length = len(list) ```: It returns the size of the queue
* >``` if len(list) = 0 ```: It checks if the queue is empty. If it is, it returns true
## Example: Grocery store software Using a Queue in python

In the example below, we will write a simple grocery strore manager program, which will use a class to implement a queue. Every time this class is called, a list will be created where the elements of the queue will be added. The requirements for the software are the following:

* Allow the user to add receipts to the queue to be printed. Maximum amount of files allowed is 10
* Simulate the behavior of a printer while printing and dequeue the files already printed
* Print the name of files already printed
* Create a method that returns the size of the queue in order to use that value for the logic of the code

```
# Import the Queue class from the queue module
from queue import Queue

class GroceryStoreManager:
    def __init__(self):
        # Initialize the queue with a maximum size of 10
        self.queue = Queue(maxsize=10)

    def add_receipt(self, receipt):
        # Add the receipt to the queue
        self.queue.put(receipt)

    def print_receipts(self):
        # Print the receipts in the queue
        while not self.queue.empty():
            # Simulate the printing process by sleeping for 1 second
            time.sleep(1)

            # Dequeue the receipt and print its name
            receipt = self.queue.get()
            print(receipt.name)

    def queue_size(self):
        # Return the size of the queue
        return self.queue.qsize()

```
To use this class, you would create an instance of the GroceryStoreManager class, and then call the appropriate methods to add receipts to the queue and print them. Here is an example:

```

manager = GroceryStoreManager()

# Add some receipts to the queue
manager.add_receipt(Receipt("John Doe", "123 Main St", ["milk", "bread", "eggs"]))
manager.add_receipt(Receipt("Jane Doe", "456 Main St", ["soda", "chips", "cookies"]))

# Print the receipts in the queue
manager.print_receipts()

``` 

This code would output the names of the receipts that were added to the queue, simulating the printing process by sleeping for 1 second between each receipt. You can also use the queue_size method to check the size of the queue at any time.

## Problem to solve 

Suppose you are given a list of names and you want to find the longest name in the list. However, you can only access one element of the list at a time and you can only iterate through the list in a specific order.

To solve this problem, you can use a queue to store the names that you have yet to process. Every time you access an element of the list, you can add it to the queue. You can then iterate through the queue, comparing each name to the current longest name and updating the longest name if necessary.

## Solution

You can check your work with the solution here: [Solution](namelist_handler.py)


Go back to the home page: [Home Page](1-welcome.md)list_leaves