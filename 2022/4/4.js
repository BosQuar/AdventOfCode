const fs = require("fs");

const pairs = [];

try {
  // read contents of the file
  const data = fs.readFileSync("data.txt", "UTF-8");

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    const numbers = line.replace("-", ",").replace("-", ",").split(",");
    pairs.push(numbers.map((stringNumber) => parseInt(stringNumber, 10)));
  });
} catch (err) {
  console.error(err);
}

const ifContains = (minContainer, maxContainer, minContained, maxContained) => {
  if (maxContained <= maxContainer && minContained >= minContainer) {
    return true;
  }
  return false;
};

let sumInclude = 0;
pairs.forEach((pair) => {
  if (
    ifContains(pair[0], pair[1], pair[2], pair[3]) ||
    ifContains(pair[2], pair[3], pair[0], pair[1])
  ) {
    sumInclude += 1;
  }
});

console.log(sumInclude);

/* Part 2 */
const ifOverlaps = (minContainer, maxContainer, minContained, maxContained) => {
  if (minContainer > maxContained || maxContainer < minContained) {
    return false;
  }

  if (maxContained <= maxContainer || minContained >= minContainer) {
    return true;
  }
  return false;
};

let sumOverlap = 0;
pairs.forEach((pair) => {
  if (
    ifOverlaps(pair[0], pair[1], pair[2], pair[3]) ||
    ifOverlaps(pair[2], pair[3], pair[0], pair[1])
  ) {
    sumOverlap += 1;
  }
});

console.log(sumOverlap);
