class Stack {
    constructor() {
        this.list = new LinkedList();
        this.top = -1;
    }
    getTop() {
        return this.list.get(this.top);
    }
    push(item) {
        this.top++;
        this.list.insert(this.top, item);

    }
    pop() {
        if (this.top < 0) {
            return new Error('Stack is empty');
        }
        // TODO
    }
    getSize() {
        return this.size;
    }
}