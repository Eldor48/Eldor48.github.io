"""
CSE212 
(c) BYU-Idaho
04-Prove - Problem 2

It is a violation of BYU-Idaho Honor Code to post or share this code with others or 
to post it online.  Storage into a personal and private repository (e.g. private
GitHub repository, unshared Google Drive folder) is acceptable.
"""

class Priority_Queue:
    """
    This queue follows the same FIFO process except that higher priority
    nodes will be dequeued before lower priority nodes.  Nodes of the same
    priority will follow the same FIFO process.
    """
class Node:
    """
    Each node is the queue will have both a value and a priority.
    """
    def __init__(self, value, priority):
        """
        Initialize a new node
        """
        self.value = value
        self.priority = priority
    def __str__(self):
        """
        Display a single node
        """
        return str(self.value)
        def __repr__(self):
            return "{} (Pri:{})".format(self.value, self.priority)
    def __init__(self):
        """
        Initialize an empty priority queue
        """
        self.queue = []
        def enqueue(self, value, priority):
            """
            Add a new value to the queue with an associated priority. The
            node is always added to the back of the queue irregardless of
            the priority.
             """
            new_node = Priority_Queue.Node(value, priority) # fixed it because it was passing the values in the wrong order
            self.queue.append(new_node)
        def dequeue(self):
            """
            Remove the next value from the queue based on the priority. The
            highest priority item will be removed. In the case of multiple
            values with the same high priority, the one closest to the front
            (in traditional FIFO order) will be removed. Priority values are
            interpreted as higher numbers have higher priority. For example,
            10 is a higher priority than 5.
            """
            if len(self.queue) == 0: # Verify the queue is not empty
                print("The queue is empty.")
            return None
            # Find the index of the item with the highest priority to remove
            high_pri_index = 0
            for index in range(1, len(self.queue)):
            # removed the equal sign because I only want to refer to the highest index.
                if self.queue[index].priority > self.queue[high_pri_index].priority:
                    high_pri_index = index
            # Remove and return the item with the highest priority
            value = self.queue[high_pri_index].value
            print(value) # added this print statment to display the values
            return value
            def __len__(self):
                """
                Support the len() function
                """
                return len(self.queue)
            def __str__(self):
                 """
                Suppport the str() function to provide a string representation of the
                priority queue. This is useful for debugging. If you have a
                Priority_Queue object called pq, then you run print(pq) to see the
                contents.
                """
                 result = "["
                 for node in self.queue:
                  result += str(node) # This uses the __str__ from the Node class
                  result += ", "
                  result += "]"
                  return result
# Test Cases
# Test 1
# Scenario:High Priority is the same for the 2 first entries. This shows that even if there are multiple names with same priority, it will always return the first one entered.(FIFO)
# Expected Result:Chris
print("Test 1")
names = Priority_Queue()
names.enqueue('Chris', 8)
names.enqueue('Mica', 8)
names.enqueue('Matheus', 5)
names.enqueue('Helena', 6)
names.dequeue()
print(names)
# Defect(s) Found: None
print("=================")
# Scenario:High priority is the last entry. This shows that even though the high priority was the last entrance, it will deliver the highest priority.
# Expected Result:Helena
print("Test 2")
names = Priority_Queue()
names.enqueue('Chris', 2)
names.enqueue('Mica', 2)
names.enqueue('Matheus', 8)
names.enqueue('Helena', 9)
names.dequeue()
print(names)
# Defect(s) Found: None
print("=================")
# Add more Test Cases As Needed Below
# Test 3
# Scenario:Empty List. When nothing is in the queue, it will return a message saying that the queueu is empty.
# Expected Result:The queue is empty
print("Test 3")
names = Priority_Queue()
names.dequeue()
print(names)
# Defect(s) Found: None