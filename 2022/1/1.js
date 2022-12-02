
const fs = require("fs");
const readline = require("readline");


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

array.forEach((string) => {
  if (string) {
    sum += parseInt(string, 10);
  } else {
    summedArray.push(sum);
    sum = 0;
  }
});

const maxValue = Math.max(...summedArray);
console.log(maxValue);

const sumTopThree = summedArray
  .sort((a, b) => a - b)
  .reverse()
  .slice(0, 3)
  .reduce((a, b) => b + a, 0);

console.log(sumTopThree);
