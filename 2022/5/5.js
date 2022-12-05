const fs = require("fs");

const move = [];
const stacks = [];

try {
  // read contents of the file
  const data = fs.readFileSync("data.txt", "UTF-8");

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines

  for (i = 0; i < lines.length; i++) {
    if (i < 10) {
      console.log(lines[i]);
      /* chartAt? */
    } else {
      const splitValues = lines[i].split(" ");

      move.push({
        amount: parseInt(splitValues[1], 10),
        from: parseInt(splitValues[3], 10),
        to: parseInt(splitValues[5], 10),
      });
    }
  }
} catch (err) {
  console.error(err);
}
