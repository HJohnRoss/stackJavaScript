const intersect = (arrLeft, arrRight) => {
    let common = []
    if(arrLeft.length > arrRight.length){
        for(let i = 0; arrLeft.length < i; i++) {
            for(let j = 0; arrRight.length < j; j++) {
                if(i === j) {
                    common.push(i);
                }
            }
        }
    } else {
        for(let i = 0; arrRight.length < i; i++) {
            for(let j = 0; arrRight.length < j; j++) {
                if(i === j) {
                    common.push(i);
                }
            }
        }
    }
    return common
}
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]))