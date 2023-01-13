//changes array in place, without needing a sliced array
//returns the index of the pivot
// const partition2 = (arr, left, right) => {
// }

//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    // console.log(arr)
    let pivot = arr[0];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pointer];
    arr[pointer] = temp;
    return pointer;
}

// console.log(partition([6,4,5,2,8,14,1,3]));

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    let pivotIndex = partition(arr);
    let middle = Math.floor(arr.length/2);
    let tempFront = [];
    let tempBack = [];

    for(let j = 0; j < middle; j++) {
        tempFront.push(arr[j]);
    }
    let front = partition(tempFront);
    
    for(let i = arr.length-1; i > middle; i--) {
        tempBack.push(arr.pop(arr[i]));
    }
    let back = partition(tempBack);

    return [...quickSort(front), arr[pivotIndex], ...quickSort(back)];
}

console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));

// const quickSort = (arr) => {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivotIndex = partition(arr);
//     let left = arr.slice(0, pivotIndex);
//     let right = arr.slice(pivotIndex + 1);

//     return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
// }

// console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));