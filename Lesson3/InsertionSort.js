function insertionSort(arr) {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

let arr = [64, 25, 12, 22, 11];

console.time();
insertionSort(arr);
console.timeEnd();
console.log(arr);