// Define the structure for the Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to perform inorder traversal
function inorderTraversal(node) {
    // Base case
    if (node == null)
        return;

    // Recur on the left subtree
    inorderTraversal(node.left);

    // Visit the current node
    console.log(node.data);

    // Recur on the right subtree
    inorderTraversal(node.right);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inorderTraversal(root);