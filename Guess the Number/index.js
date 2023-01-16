let x = Math.random() * 100
x = Number.parseInt(x)
let chances = 0
let a;
while (a != x) {
  a = prompt("Enter a number :")
  chances++;
  if (a > x)
    console.log("Entered number is greater!")
  else if (a < x)
    console.log("Entered number is smaller!")
  else {
    console.log("Correct number");
    break;
  }
}
console.log(x)
console.log("You guessed in", chances, "attempts")
console.log("your score is : ", 100 - chances)
