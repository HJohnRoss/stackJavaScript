const mostFrequent = (nums) => {
  let highestVal;
  let arr = []
  let count = {}
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]] += 1
    } else {
      count[nums[i]] = 1
    }
  }
  for (let key in count) {
    if (count[key] >= highestVal || highestVal == null) {
      if (count[key] === highestVal) {
        arr.push(key)
      } else {
        highestVal = count[key]
        arr = [key]
      }
    }
  }
  return arr
}

console.log(mostFrequent([0, 0, 0, 2, 3]))
console.log(mostFrequent([0, 1, 2, 3, 4, 5]))
console.log(mostFrequent([5, 8, 2, 4, 0, 15, 16, 90, 5, 1, 5, 23, 42, 0, 6, 2, 8, 2, 5, 2]))