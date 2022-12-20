const fs = require("fs");

const moves = [];
const stacks = [];

try {
  // read contents of the file
  const data = fs.readFileSync("data.txt", "UTF-8");

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  for (i = 0; i < lines.length; i++) {
    if (i < 8) {
      for (j = 0; j < 9; j++) {
        if (!stacks[j]) {
          stacks[j] = "";
        }
        const boxLetter = lines[i].charAt(j * 4 + 1);

        if (boxLetter && boxLetter !== " ") {
          stacks[j] += boxLetter;
        }
      }
    } else if (i > 9) {
      const splitValues = lines[i].split(" ");

      moves.push({
        amount: parseInt(splitValues[1], 10),
        from: parseInt(splitValues[3] - 1, 10),
        to: parseInt(splitValues[5] - 1, 10),
      });
    }
  }
} catch (err) {
  console.error(err);
}

// Reverse boxes and make tranform to array to do array function in later stage
boxesProblem1 = stacks.map((stack) => stack.split("").reverse());

moves.forEach((move) => {
  for (i = 0; i < move.amount; i++) {
    const box = boxesProblem1[move.from].pop();
    boxesProblem1[move.to].push(box);
  }
});

let wordProblem1 = "";

boxesProblem1.forEach((box) => (wordProblem1 += box[box.length - 1]));
console.log(wordProblem1);

// Part 2
// Reverse boxes and make tranform to array to do array function in later stage
boxesProblem2 = stacks.map((stack) => stack.split("").reverse());

moves.forEach((move) => {
  const boxes = boxesProblem2[move.from].slice(
    boxesProblem2[move.from].length - move.amount,
    boxesProblem2[move.from].length
  );

  boxesProblem2[move.to] = boxesProblem2[move.to].concat(boxes);
  for (i = 0; i < move.amount; i++) {
    boxesProblem2[move.from].pop();
  }
});

let wordProblem2 = "";

boxesProblem2.forEach((box) => (wordProblem2 += box[box.length - 1]));
console.log(wordProblem2);
