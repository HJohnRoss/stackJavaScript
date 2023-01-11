const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while(i != j) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
            j++
        }
    }
    return arr;
}

// const testArr = [6, 4, 5, 2, 8, 14, 1, 3]
// console.log(insertionSort(testArr))

// //like bubble sort, but a little better.
// //on first loop, searches for lowest value
// //when finished, swaps lowest value for value at 0 index
// //on second loop, searches for second lowest value, then
// //swaps with value at 1 index
// //continue this pattern until whole array is sorted
// const selectionSort = (arr) =>{
//     let index = 0
//     let tempIndex = 1;
//     let lowestVal = arr[0];
//     while(index < arr.length) {
//         for(let i = tempIndex; i < arr.length; i++) {
//             if(lowestVal > arr[i]) {
//                 lowestVal = arr[i]
//             }
//             tempIndex++
//         }
//         // console.log(arr)
//         let temp = arr[index]
//         arr[index] = lowestVal
//         arr[tempIndex] = temp
//         index++
//     }
//     return arr;
// }

// console.log(selectionSort([5,4,2,6,8,14,1,3]));
// // console.log(selectionSort([0, 3, 2, 8, 5, 9, 7]));