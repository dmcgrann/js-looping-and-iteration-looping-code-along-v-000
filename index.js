// Code your solutions in this file
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
    return names;
}

function tailsNeverFails() {
  let t = Math.random() >= 0.5;
}

while (tailsNeverFails() === true) {
  console.log(${t+1})
}