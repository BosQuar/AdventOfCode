
const fs = require("fs");

const array = [];
const summedArray = [];

try {
  // read contents of the file
  const data = fs.readFileSync('data.txt', 'UTF-8')

  // split the contents by new line
  const lines = data.split(/\r?\n/)

  // print all lines
  lines.forEach(line => {
    array.push(line)

  })
} catch (err) {
  console.error(err)
}

let sum = 0;
let maxValue = 0

array.forEach((string) => {
  if (string.length !== 0) {
    sum += parseInt(string, 10);
  } else {
    summedArray.push(sum);
    if (sum > maxValue){
      maxValue = sum
    }
    sum = 0;
  }
});

console.log(maxValue)

const sumTopThree = summedArray
  .sort((a, b) => a - b)
  .reverse()
  .slice(0, 3)
  .reduce((value, sum) => sum + value, 0);

console.log(sumTopThree);
