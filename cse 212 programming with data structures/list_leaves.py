def list_leaves(tree):
    leaves = []
    def traverse(node, depth):
        if not node.get('children'):
            leaves.append((node.get('value'), depth))
        else:
            for child in node.get('children'):
                traverse(child, depth + 1)
    traverse(tree, 0)
    return leaves

# Example
tree = {
    'value': 0,
    'children': [
        {
            'value': 1,
            'children': [
                {
                    'value': 3,
                    'children': []
                },
                {
                    'value': 4,
                    'children': []
                }
            ]
        },
        {
            'value': 2,
            'children': [
                {
                    'value': 5,
                    'children': []
                },
                {
                    'value': 6,
                    'children': []
                }
            ]
        }
    ]
}

print(list_leaves(tree))  # [(3, 2), (4, 2), (5, 2), (6, 2)]