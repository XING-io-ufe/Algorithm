class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        const newNode = { value, next: null };
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
        this.top = -1; // Стект байгаа хамгийн дээд индекс
    }

    getTop() {
        if (this.top < 0) {
            return new Error('Stack is empty');
        }
        return this.list.get(this.top);
    }

    push(item) {
        this.top++; // Дээд индексийг нэмэгдүүлж байна
        this.list.insert(this.top, item); // Шинэ элемент оруулж байна
    }

    pop() {
        if (this.top < 0) {
            return new Error('Stack is empty');
        }
        const poppedValue = this.list.remove(this.top); // Дээд элемент устгаж байна
        this.top--; // Дээд индекст бууруулах
        return poppedValue; // Устгасан элементийг буцаана
    }

    getSize() {
        return this.list.getSize(); // Стект байгаа элементүүдийн тоог буцаана
    }
}

// Жишээ ашиглалт:
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.getTop()); // 2
console.log(stack.pop()); // 2
console.log(stack.getSize()); // 1
console.log(stack.pop()); // 1
console.log(stack.pop()); // Error: Stack is empty