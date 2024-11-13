function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSort(arr) {
    let i, j, temp;
    let swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (swapped === false) {
            break;
        }
    }
}

let arr = [64, 25, 12, 22, 11];

console.time();
bubbleSort(arr);
console.timeEnd();
console.log(arr);