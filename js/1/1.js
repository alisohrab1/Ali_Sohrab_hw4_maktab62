let ordinal = ["rd", "th", "nd", "st"];
let color = [
  "Blue",
  "Green",
  "Red",
  "Black",
  "Yellow",
  "Orange",
  "White",
  "Purple",
  "Violet",
  "Indigo",
  "Gray",
  "Pink",
];

function printcolour(ordinal, colour) {
  if (!Array.isArray(ordinal) || !Array.isArray(colour)) {
    console.log("invalid input");
  }
  for (let i = 0; i < colour.length; i++) {
    if (i === 0) {
      console.log(`${i + 1}${ordinal[3]} choice is ${colour[i]}\n`);
    } else if (i === 1) {
      console.log(`${i + 1}${ordinal[2]} choice is ${colour[i]}\n`);
    } else if (i === 2) {
      console.log(`${i + 1}${ordinal[0]} choice is ${colour[i]}\n`);
    } else {
      console.log(`${i + 1}${ordinal[1]} choice is ${colour[i]}\n`);
    }
  }
}

printcolour(ordinal, color);