class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
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
        return current.value;
    }

    insert(index, item) {
        if (index < 0 || index > this.size) {
            throw new Error('bad index');
        }

        const newNode = new Node(item);

        if (index === 0) {
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            newNode.prev = current;
            current.next = newNode;
            if (newNode.next !== null) {
                newNode.next.prev = newNode;
            }
        }
        this.size++;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            if (current.next !== null) {
                current.next.prev = current.prev;
            }
        }
        this.size--;
    }

    getSize() {
        return this.size;
    }
}


const dll = new DoubleLinkedList();
dll.insert(0, 'A');
dll.insert(1, 'B');
dll.insert(1, 'C');
console.log(dll.get(0));
console.log(dll.get(1));
console.log(dll.get(2));
dll.delete(1);
console.log(dll.get(0));
console.log(dll.getSize()); 