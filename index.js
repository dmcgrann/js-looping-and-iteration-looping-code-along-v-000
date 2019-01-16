// Code your solutions in this file
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
    return names;
}

function tailsNeverFails() {
  let tails = Math.random() >= 0.5;
}

while (tailsNeverFails() === true) {
  console.log('You got ${tails+1} tails in a row!')
}