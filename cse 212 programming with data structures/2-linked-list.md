# Linked lists 

A linked list is a data structure that consists of a sequence of nodes, where each node stores some data and a reference (or "link") to the next node in the sequence. Unlike an array, which provides random access to its elements, a linked list only allows access to its elements in sequential order.

Linked lists are useful in situations where you need to store and access a large amount of data, but you don't need to access the data randomly. For example, you might use a linked list to implement a queue, where the data is added and removed in a first-in, first-out (FIFO) order.

# Structure 

In a linked list, each node contains a data element and a reference (or pointer) to the next node in the list. The first node in the list is called the head, and the last node in the list is called the tail.

Here is an example of a linked list with three nodes:

```
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

# Create a new linked list
linked_list = LinkedList()

# Append some nodes to the list
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

```
## How to Insert, Remove and Access Data From a Linked List.

In this section, we'll look at how to insert, remove and access data from a linked list.

In python, a linked list can be implemented using the ListNode class, which is defined as follows:

```
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

To insert a new node into a linked list, you can create a new ListNode instance and set its next reference to point to the current head of the list. Then, you can update the head of the list to point to the new node. Here is an example:

``` 
# create a new node
new_node = ListNode(val=5)

# set the next reference of the new node to point to the current head of the list
new_node.next = head

# update the head of the list to point to the new node
head = new_node

``` 

To remove a node from a linked list, you can simply update the next reference of the previous node in the list to point to the node that comes after the one you want to remove. Here is an example:

```

# remove the node after the node with value 5
node5 = find_node_with_value(head, 5)
node5.next = node5.next.next

```

To access the data in a linked list, you can traverse the list starting from the head, and access the val attribute of each node. Here is an example:

```
# traverse the linked list and print the value of each node
node = head
while node is not None:
    print(node.val)
    node = node.next
```

Of course, the find_node_with_value() and ListNode classes used in these examples are not part of the python standard library and would need to be defined in your own code.

## Python Syntax

Besides the methods previously mentioned for the implementation of the linked list, Python also has a built-in linked list already. The commands to use this linked list are the following:

* >``` linked_list = deque() ```: It creates a empty linked list
* >``` linked_list.appendleft(value) ```: It inserts a new head
* >``` linked_list.append(value) ```: It inserts a new tail
* >``` linked_list.insert(i, value) ```: It inserts a new value after the node "i"
* >``` data = linked_list.popleft() ```: It removes the head and stores it in a variable
* >``` data = linked_list.pop() ```: It removes the tail and stores it in a variable
* >``` del linked_list[i] ```: It removes a value in the middle of the list
* >``` length = len(list) ```: It returns the size of the linked list
* >``` if len(list) = 0 ```: It checks if the linked list is empty. If it's, it returns true

##  Photo Viewer Software Using a Linked List

This program is a photo viewer software that uses a linked list in Python. It has a LinkedList class which is used to store the photos, and a Node class which is used to create individual nodes for each photo. The PhotoViewer class is used to display the photos and navigate between them. The main function provides a menu for the user to interact with the program and select the desired option - displaying the current photo, navigating to the next or previous photo, or exiting the program.

[Program](photo_vw.py)


## Exercise:

Implement a basic linked list in Python. 

[Solution](linked-list.py)

Go back to the home page: [Home Page](1-welcome.md)list_leaves