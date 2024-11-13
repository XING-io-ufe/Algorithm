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
        return current.value;
    }

    insert(index, item) {
        const newNode = new Node(item);
        if (index < 0 || index > this.size) {
            throw new Error('bad index');
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

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
        }
        this.size--;
    }

    getSize() {
        return this.size;
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