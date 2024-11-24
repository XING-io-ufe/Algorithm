class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        return current.value;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    remove() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.list = new LinkedList();
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        return this.list.get(index);
    }

    enqueue(item) {
        this.list.add(item);
        this.size++;
    }

    dequeue() {
        if (this.size === 0) {
            throw new Error('hooson baina');
        }
        const item = this.list.remove();
        this.size--;
        return item;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        if (this.size === 0) {
            throw new Error('hooson baina');
        }
        return this.list.head.value;
    }

    getTail() {
        if (this.size === 0) {
            throw new Error('hooson baina');
        }
        return this.list.tail.value;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getSize()); // 3
console.log(queue.getHead()); // 1
console.log(queue.getTail()); // 3

console.log(queue.dequeue()); // 1
console.log(queue.getSize()); // 2
console.log(queue.getHead()); // 2