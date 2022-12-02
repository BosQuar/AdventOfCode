const fs = require("fs");

/* 
A: Rock
B: Paper
C: Scissor

X: Rock
Y: Paper
Z: Scissors

Revised
X: Lose
Y: Draw
Z: Win

Rock 1p
Paper 2p
Scissors 3p

lose: 0p
draw: 3p
win: 6p
*/

const assignment1 = []
const assignment2 = []

const translateAction = (action) => {
  if (action === 'A' || action === 'X' ) {
    return 1
  }
  if (action === 'B' || action === 'Y' ) {
    return 2
  }
  if (action === 'C' || action === 'Z' ) {
    return 3
  }
  return action
}

try {
  // read contents of the file
  const data = fs.readFileSync('data.txt', 'UTF-8')

  // split the contents by new line
  const lines = data.split(/\r?\n/)

  // print all lines
  lines.forEach(line => {

    const splitValues = line.split(" ");

    const enemyAction = translateAction(splitValues[0]);
    const response = translateAction(splitValues[1]);

    assignment1.push({enemyAction,response})
    assignment2.push({enemyAction, response: splitValues[1]})

  })
} catch (err) {
  console.error(err)
}


let sum1 = 0
assignment1.forEach(({response, enemyAction}) => {
  sum1 += response
  
  if(enemyAction === response){
    sum1 += 3
    return
  }
  if((enemyAction === 3 && response === 1) || enemyAction === (response - 1)){
    sum1 += 6
    return
  }
  
})
console.log(sum1)


let sum2 = 0
assignment2.forEach(({enemyAction,response}) => {

  if(response === 'Y'){
    sum2 += (3 + enemyAction)
    return
  }
  if(response === 'X'){
    const res = enemyAction === 1 ?  3 : (enemyAction - 1) 
    
    sum2 += (0 + res)
    return
  }
  if(response === 'Z'){
    const res = enemyAction === 3 ?  1 : (enemyAction + 1) 
    sum2 += (6 + res)
    return
  }
})

console.log(sum2)