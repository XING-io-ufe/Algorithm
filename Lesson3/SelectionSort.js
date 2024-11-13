function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    let i, j, min_idx;

    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        swap(arr, min_idx, i);
    }
}

let arr = [34, 12, 35, 52, 21];

console.time();
selectionSort(arr, arr.length);
console.timeEnd();
console.log(arr);