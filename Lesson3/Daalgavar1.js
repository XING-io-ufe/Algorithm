function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSort(arr) {
    let i, j;
    let swapped;
    for (i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
// 
// O(n^2)

function cocktailShakerSort(arr) {
    let swapped = true;
    let start = 0;
    let end = arr.length - 1;

    while (swapped) {
        swapped = false;

        // зүүнээс баруун
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
        if (!swapped) break;

        // баруунаас зүүнx
        swapped = false;
        end--;

        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
        start++;
    }
}

let arr = [64, 25, 12, 22, 11, 57,

    34, 19, 26, 90, 56, 34, 59, 60, 87];

console.time('Bubble Sort');
bubbleSort(arr);
console.timeEnd('Bubble Sort');
console.log('Bubble Sorted Array:', arr);

console.time('Cocktail Shaker Sort');
cocktailShakerSort(arr);
console.timeEnd('Cocktail Shaker Sort');
console.log('Cocktail Shaker Sorted Array:', arr);