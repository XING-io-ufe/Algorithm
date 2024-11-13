class ArrayList {
    constructor() {
        this.items = new Array(100);
        this.size = 0;
    }
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        return this.items[index];
    }
    insert(index, items) {

        for (let i = this.size; i > index; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[index] = items;
        this.size++;
    }
    delete(index) {
        for (let i = index; i < this.size - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.size--;
    }
    getSize() {
        return this.size;
    }
    print() {
        process.stdout.write('arr = [');
        for (let i = 0; i < this.size; i++) {
            process.stdout.write(this.items[i] + ",");
        }
        console.log("]");
    }
}

const result = new ArrayList;
// console.log(result.get(1));
result.insert(0, "bold");
result.insert(1, "sold");
result.delete(1);
console.log(result.get(0));
console.log(result.print());

