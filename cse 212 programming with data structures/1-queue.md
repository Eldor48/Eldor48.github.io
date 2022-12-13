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