 // WRITE A JAVASCRIPT PROGRAMM TO GENERATE A RANDOM NUMBER AND STORE IT IN A VARAIABLE . THE PROGRAMM THEN TAKES A INPUT FROM THE USER AND TELL THEM WHETHER THE GUESSED NUMBER IS CORRECT OR NOT AND GREATER OR SMALLER TO GUESSED NUMBER. 100 - (NUMBER OF GUESSES) IS THE SCORE OF THE USER. THE PROGRAM IS EXPECTED TO TERMINATE ONCE THE NUMBER IS GUSSED NUMBER SHOULD BE BETWEEN 1 AND 100
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
