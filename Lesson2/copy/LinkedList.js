class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value; // Return the value at the specified index
    }

    insert(index, item) {
        const newNode = new Node(item); // Create a new node
        if (index < 0 || index > this.size) {
            throw new Error('bad index');
        }
        if (index === 0) {
            newNode.next = this.head; // Insert at the head
            this.head = newNode; // Update head
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next; // Traverse to the node before the index
            }
            newNode.next = current.next; // Link the new node to the next node
            current.next = newNode; // Link the previous node to the new node
        }
        this.size++;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        if (index === 0) {
            this.head = this.head.next; // Remove the head
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next; // Traverse to the node before the index
            }
            current.next = current.next.next; // Bypass the node to delete it
        }
        this.size--;
    }

    getSize() {
        return this.size; // Return the size of the list
    }
}

const result = new LinkedList();
result.insert(0, "bold");
result.insert(1, "saihan");
result.insert(2, "torbold");
console.log(result.getSize());
console.log(result.get(0));
const hariu = new Node('swnsjj')
console.log(hariu);