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
        this.list.insert(this.size, item);
    }
    dequeue() {
        return this.list.delete(0);
    }
    getSize() {
        return this.size;
    }
    getHead() {/* TODO */ }
    getTail() {/* TODO */ }
}