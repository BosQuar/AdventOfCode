const fs = require("fs");

/* 
A: Rock
B: Paper
C: Scissor

X: Rock
Y: Paper
Z: Scissors
*/

try {
  // read contents of the file
  const data = fs.readFileSync('data.txt', 'UTF-8')

  // split the contents by new line
  const lines = data.split(/\r?\n/)

  // print all lines
  lines.forEach(line => {
    /* console.log(line) */
    const splitValues = line.split(" ");
    console.log(splitValues)
    const enemyAction = splitValues[0];
    const response = splitValues[1];

  })
} catch (err) {
  console.error(err)
}