const unsortedArray = (leftArr, rightArr) => {
    let leftArrCount = {};
    let rightArrCount = {};
    let union = [];
    for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] in leftArrCount) {
            leftArrCount[leftArr[i]] += 1
        } else {
            leftArrCount[leftArr[i]] = 1
        }
    }
    for (let i = 0; i < rightArr.length; i++) {
        if (rightArr[i] in rightArrCount) {
            rightArrCount[rightArr[i]] += 1
        } else {
            rightArrCount[rightArr[i]] = 1
        }
    }

    for (let i in leftArrCount) {
        for (let j in rightArrCount) {
            if (i === j && rightArrCount[j] >= leftArrCount[i]) {
                union.push(i)
            }
            else if (i === j && rightArrCount[j] < leftArrCount[i]) {
                union.push(j)
            }
        }
    }
    return union
}

// console.log(unsortedArray([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unsortedArray([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unsortedArray([2,2,7,1,2],[2,2,6,7,6]));

const unionUnsorted = (leftArr, rightArr) => {
    let leftArrCount = {};
    let rightArrCount = {};
    let union = leftArr;
    for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] in leftArrCount) {
            leftArrCount[leftArr[i]] += 1
        } else {
            leftArrCount[leftArr[i]] = 1
        }
    }
    for (let i = 0; i < rightArr.length; i++) {
        if (rightArr[i] in rightArrCount) {
            rightArrCount[rightArr[i]] += 1
        } else {
            rightArrCount[rightArr[i]] = 1
        }
    }

    for (let i in rightArr) {
        if (leftArrCount[rightArr[i]]) {
            leftArrCount[rightArr[i]]--
        } else {
            union.push(rightArr[i])
        }
    }
    return union
}

// const unionUnsorted = (arrLeft, arrRight) => {
//     const map = {}
//     const newArr = [...arrLeft]
//     for(let i = 0; i < arrLeft.length; i++){
//       !map[arrLeft[i]] ? map[arrLeft[i]] = 1 : map[arrLeft[i]]++;
//     }

// for(let j = 0; j < arrRight.length; j++){
//   map[arrRight[j]] ? map[arrRight[j]]-- : newArr.push(arrRight[j]);
// }
//     return newArr;
//   }

// console.log(unionUnsorted([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));
