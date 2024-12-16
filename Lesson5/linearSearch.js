class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let arr = [];
arr.push(new Student("1", "Bataa"));
arr.push(new Student("2", "Boldoo"));
arr.push(new Student("3", "Bayraa"));
arr.push(new Student("4", "Sainaa"));
function linearSearchById(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === searchValue) {
            return i;
        }
    }
    return -1;
}
const studentIndex = linearSearchById(arr, "3");
console.log(arr[studentIndex]);