// const partition = (arr) => {
//     let pivet = arr[0];
//     let smaller = []
//     let greater = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= pivet) {
//             greater.push(arr[i])
//         } else {
//             smaller.push(arr[i])
//         }
//     }
//     return smaller.concat(greater);
// }


const partition = (arr) => {
    let pivet = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[pivet]) {
            let tempi = i
            while (tempi > pivet) {
                let temp = arr[tempi]
                arr[tempi] = arr[tempi - 1]
                arr[tempi - 1] = temp
                tempi--
            }
            pivet++
        }
    }
    return arr
}


console.log(partition([5, 4, 9, 2, 5, 3]))
console.log(partition([7, 4]))