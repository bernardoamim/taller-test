const sample1 = "AAAAAAAAAAAAABBCCCCDD";
const sample2 = "aA";
const sample3 = "122333";

const arr1 = [1, 2, 3, 5, 6, 8, 9];
const arr2 = [-2, -1];
const arr3 = [-10, -5, 0, 5, 10];

function runLength(str) {
  let compressedStr = '';
  let count = 1;
  let current = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      current = str[i];
      continue;
    }

    if (i === str.length - 1) {
      if (str[i] === current) {
        count += 1;
      } else {
        compressedStr += `${count}${current}`;
        count = 1;
        current = str[i];
      }

      if (count > 9) {
        let rest = parseInt(count - 9, 10);
        compressedStr += `9${current}${rest}${current}`;
      } else {
        compressedStr += `${count}${current}`;
      }

      continue
    }

    if (str[i] === current) {
      count += 1;
      current = str[i];
    } else {
      if (count > 9) {
        let rest = parseInt(count - 9, 10);
        compressedStr += `9${current}${rest}${current}`;
      } else {
        compressedStr += `${count}${current}`;  
      }

      count = 1;
      current = str[i];
    }
  }

  return compressedStr;
}

function sortedSquaredArray(arr) {

  const double = arr.map(elm => Math.abs(elm) * Math.abs(elm));

  const sorted = double.sort((a, b) => a - b);


  return sorted;
}


console.log('Test 1: \n');

console.log(runLength(sample1));
console.log(runLength(sample2));
console.log(runLength(sample3));

console.log('\n');
console.log('Test 2: \n');

console.log(sortedSquaredArray(arr1));
console.log(sortedSquaredArray(arr2));
console.log(sortedSquaredArray(arr3));