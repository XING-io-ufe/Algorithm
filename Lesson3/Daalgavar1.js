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

function cocktailShakerSort(arr) {
    let swapped = true;
    let start = 0;
    let end = arr.length - 1;

    while (swapped) {
        swapped = false;

        // Сэгсрэх (forward pass)
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
        if (!swapped) break;

        // Сэгсрэх (backward pass)
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

let arr1 = [64, 25, 12, 22, 11];
let arr2 = [64, 25, 12, 22, 11];

console.time('Bubble Sort');
bubbleSort(arr1);
console.timeEnd('Bubble Sort');
console.log('Bubble Sorted Array:', arr1);

console.time('Cocktail Shaker Sort');
cocktailShakerSort(arr2);
console.timeEnd('Cocktail Shaker Sort');
console.log('Cocktail Shaker Sorted Array:', arr2);