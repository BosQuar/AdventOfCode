const fs = require("fs");

const dict = new Map();

for (i = 0; i < 26; i++) {
  const letter = (i + 10).toString(36);

  dict.set(letter, i + 1);
  dict.set(letter.toUpperCase(), i + 1 + 26);
}

const doubles = [];
const allRucksacks = [];

try {
  // read contents of the file
  const data = fs.readFileSync("data.txt", "UTF-8");

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    const array = [];
    [...line].forEach((letter) => array.push(letter));

    allRucksacks.push(line);

    const ruckskack1 = array.slice(0, array.length / 2);
    const ruckskack2 = array.slice(array.length / 2, array.length);

    for (letter of ruckskack1) {
      if (ruckskack2.includes(letter)) {
        doubles.push(letter);
        break;
      }
    }
  });
} catch (err) {
  console.error(err);
}

let sum = 0;
doubles.forEach((letter) => {
  sum += dict.get(letter);
});

console.log(sum);

/* Part 2 */
const groups = [];
const badges = [];
for (i = 0; i < allRucksacks.length / 3; i++) {
  groups.push(allRucksacks.slice(i * 3, i * 3 + 3));
}

groups.forEach((gr) => {
  for (letter of gr[0]) {
    if (gr[1].includes(letter) && gr[2].includes(letter)) {
      badges.push(letter);
      break;
    }
  }
});

let sumBadges = 0;
badges.forEach((letter) => {
  sumBadges += dict.get(letter);
});

console.log(sumBadges);
