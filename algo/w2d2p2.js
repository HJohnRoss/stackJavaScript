//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let common = []
    if (arrLeft.length >= arrRight.length) {
        for (let i = 0; i < arrLeft.length; i++) {
            if (arrLeft[i] === arrLeft[i + 1]) {
                let leftArrCount = 0
                let leftValue = arrLeft[i]
                while (arrLeft[i] === leftValue) {
                    leftArrCount++
                    i++
                }
            }
            for (let j = 0; j < arrRight.length; j++) {
                // 
                if (arrLeft[i] === arrRight[j]) {
                    if (arrRight[j] === arrRight[j + 1]) {
                        let rightArrCount = 0
                        let rightValue = arrRight[i]
                        while (arrRight[j] === rightValue) {
                            rightArrCount++
                            j++
                        }
                    }
                    // for loop for count
                    // increacing count

                    // set leftArrCount = count

                    // if comparing the counts
                    // push for how many counts there were
                    if (leftArrCount > rightArrCount) {
                        for (let c = 0; c > rightArrCount; c++) {
                            common.push(leftValue)
                        }
                    } else {
                        for (let c = 0; c > leftArrCount; c++) {
                            common.push(rightValue)
                        }
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < arrRight.length; i++) {
            if (arrRight[i] === common[common.length - 1]) {
                break
            }
            let rightArrCount = 0
            let rightValue = arrRight[i]
            if (arrRight[i] === arrRight[i + 1]) {
                let tempi = i + 1
                while (arrRight[tempi] === rightValue) {
                    rightArrCount++
                    tempi++
                }
            }
            for (let j = 0; j < arrLeft.length; j++) {
                let leftArrCount = 0
                let leftValue = arrLeft[j]
                if (arrLeft[j] === arrRight[i]) {
                    if (arrLeft[j] === arrLeft[j + 1]) {
                        let tempj = j + 1
                        while (arrLeft[tempj] === leftValue) {
                            console.log(leftArrCount)
                            leftArrCount++
                            tempj++
                        }
                    }
                    console.log(`left arr count ${leftArrCount}`)
                    console.log(`right arr count ${rightArrCount}`)
                    console.log("========================")
                    if (leftArrCount > rightArrCount) {
                        for (let c = 0; c <= rightArrCount; c++) {
                            common.push(leftValue)
                        }
                    } else {
                        for (let c = 0; c <= leftArrCount; c++) {
                            common.push(rightValue)
                        }
                    }
                }
            }
        }
    }
    return common
}

// console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));