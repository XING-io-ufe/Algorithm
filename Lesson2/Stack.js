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

    insert(index, item) {
        const newNode = new Node(item);
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        let removedValue;
        if (index === 0) {
            removedValue = this.head.value;
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            removedValue = current.next.value;
            current.next = current.next.next;
        }
        this.size--;
        return removedValue;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    getSize() {
        return this.size;
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
        this.top = -1; // Initialize top to -1, indicating an empty stack
    }

    getTop() {
        if (this.top < 0) {
            throw new Error('Stack is empty');
        }
        return this.list.get(this.top);
    }

    push(item) {
        this.top++; // Increment top to point to the new top index
        this.list.insert(this.top, item); // Insert the new item at the top index
    }

    pop() {
        if (this.top < 0) {
            throw new Error('Stack is empty');
        }
        const poppedValue = this.list.remove(this.top); // Remove the item at the top index
        this.top--; // Decrement top to point to the new top index
        return poppedValue; // Return the removed value
    }

    getSize() {
        return this.list.getSize(); // Return the size of the linked list
    }
}


// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.getTop()); // 2
console.log(stack.pop()); // 2
console.log(stack.getSize()); // 1
console.log(stack.pop()); // 1
try {
    console.log(stack.pop()); // Error: Stack is empty
} catch (error) {
    console.error(error.message);
}
