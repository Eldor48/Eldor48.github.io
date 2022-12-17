# Tree 

In Python, a tree is a data structure that allows you to store and organize data hierarchically. This means that you can have a tree with a root node, which can have child nodes, which can have their own child nodes, and so on. Each node in the tree is an object that contains data and references to its child nodes (if any).

Here is an example of how you might create a tree in Python:

```
class Tree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

root = Tree(5)
root.left = Tree(3)
root.right = Tree(7)


```
This code creates a tree with a root node that has the value 5, and two child nodes: one with the value 3, and one with the value 7. The left and right attributes of the Tree object are used to store references to the child nodes. You can add more nodes to the tree by creating additional Tree objects and attaching them to the existing nodes in the tree.

To access the data in a node, you can use the value attribute of the Tree object. For example, to print the value of the root node, you can use the following code:

```
print(root.value)  # This will print the value 5

```
To access the child nodes of a node, you can use the left and right attributes of the Tree object. For example, to print the values of the left and right child nodes of the root node, you can use the following code:

```
print(root.left.value)  # This will print the value 3
print(root.right.value) # This will print the value 7

```

Trees are a powerful data structure because they allow you to organize and store data in a way that makes it easy to search, sort, and manipulate. They are often used in algorithms and data structures that require fast searching, sorting, and other operations.

## Type of trees 

There are several types of trees that can be implemented in Python, including:

    1. Binary trees: A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

    2. Binary search trees: A binary search tree is a binary tree in which the value of each node is greater than or equal to the values of its left child and less than or equal to the values of its right child.

    3. Red-black trees: A red-black tree is a self-balancing binary search tree in which each node has an additional attribute, called the "color," that can be either red or black.

    4. AVL trees: An AVL tree is a self-balancing binary search tree in which the heights of the left and right subtrees of any node differ by at most one.

    5. B-trees: A B-tree is a tree data structure that is designed to store data in a large number of blocks, allowing efficient insertion, deletion, and search operations.

    6. Trie trees: A trie (also known as a prefix tree) is a tree data structure that is used to store a dynamic set of strings, where each node represents a prefix of the strings.

These are just a few examples of the types of trees that can be implemented in Python. There are many other types of trees that can be used for various purposes, depending on the needs of the application.


### Binary tree 

![Figure 5](Binary_Tree.png)

A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. In Python, a binary tree can be implemented using a class with a left and right attribute that point to the left and right child nodes, respectively.


Here is an example of a simple binary tree class in Python:

```
class BinaryTree:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
```

This class has a single data attribute that stores the value of the node, and left and right attributes that point to the left and right child nodes, respectively.

To create a binary tree, you can create instances of the BinaryTree class and link them together by assigning them to the left and right attributes of other tree nodes. For example:

```
root = BinaryTree(1)
root.left = BinaryTree(2)
root.right = BinaryTree(3)

```

This creates a binary tree with a root node containing the value 1, a left child node containing the value 2, and a right child node containing the value 3.

There are many different operations that can be performed on binary trees, such as traversing the tree (e.g. in-order, pre-order, or post-order), searching for a specific node, inserting new nodes, and deleting nodes.



### Binary search tree

![Figure 6](Binary_Search_Tree.png)

A binary search tree (BST) is a data structure that allows efficient insertion, deletion, and search operations. It is a type of binary tree, a tree data structure in which each node has at most two children. The children are referred to as the left child and the right child.

In a binary search tree, the value of each node in the left subtree is less than the value of the root node, and the value of each node in the right subtree is greater than the value of the root node. This property allows the tree to be searched efficiently, as we can eliminate half of the tree at each step by comparing the value we are searching for with the value of the root node.

For example, to search for a particular value in a binary search tree, we start at the root node and compare the value we are searching for with the value of the root node. If the value we are searching for is less than the value of the root node, we know that the value must be in the left subtree, so we move down to the left child and repeat the process. If the value we are searching for is greater than the value of the root node, we know that the value must be in the right subtree, so we move down to the right child and repeat the process. This process continues until we find the value we are searching for, or until we reach a leaf node (a node with no children) and determine that the value is not in the tree.

Binary search trees are efficient data structures for searching and can be used in a variety of applications, such as storing and searching large datasets or implementing efficient algorithms for sorting and searching. They are also useful for implementing dictionaries and other data structures that need to support fast insertion, deletion, and search operations.

Here is an example of a simple implementation of a binary search tree in Python:

```
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
            return
        current_node = self.root
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = new_node
                    return
                current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    return
                current_node = current_node.right

    def search(self, value):
        if self.root is None:
            return False
        current_node = self.root
        while current_node is not None:
            if value == current_node.value:
                return True
            elif value < current_node.value:
                current_node = current_node.left
            else:
                current_node = current_node.right
        return False


```

To use this implementation, you can create a new BinarySearchTree object and call the insert method to add nodes to the tree. For example:

```
tree = BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
```

This will create a binary search tree with the following structure:

```
      10
     /  \
    5   15
   / \
  3   7
```
You can then use the search method to search for a particular value in the tree. For example:

```
tree.search(5)  # returns True
tree.search(11) # returns False

```
This implementation is a simple example and does not include methods for deleting nodes or balancing the tree to maintain good performance. There are many variations and more advanced implementations of binary search trees that address these issues.


### Red-black trees 
![Figure 7](Red-black_tree_example.png)

Red-black trees are a type of self-balancing binary search tree that are commonly used in computer science. They are called "red-black" trees because each node in the tree is either colored red or black. Red-black trees have the following properties:

    1.Every node is either red or black.
    2.The root is black.
    1.Every leaf (NULL) is black.
    1.If a node is red, then both its children are black.
    1.For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.