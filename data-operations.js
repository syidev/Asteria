var randomNumber = Math.random();
console.info("Operation 1");
console.log(randomNumber);

randomNumber = randomNumber.toFixed(2);
console.info("Operation 2");
console.log(randomNumber);

randomNumber *= 100;
console.info("Operation 3");
console.log(randomNumber);

randomNumber /= 5;
console.info("Operation 4");
console.log(randomNumber);

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var newNumber = randomNumber + currentYear;

newNumber -= 1987;
console.info("Operation 5");
console.log(newNumber.toFixed(1));

var month = 10;
month = Math.pow(month, 2)
console.info("Operation 6");
console.log(month);

var yearOfBirth = 1987;
yearOfBirth %= 3;
console.info("Operation 7");
console.log(yearOfBirth);

console.info("Operation 8");
console.log(screen.width + "x" + screen.height);

console.info("Operation 9");
console.log(window.innerWidth + "x" + window.innerHeight);


document.querySelector("#join").addEventListener("click", join);
document.querySelector("#showSize").addEventListener("click", showSize);
document.querySelector("#lettersShift").addEventListener("click", lettersShift);

function join(e) {
    e.preventDefault(); 
    var inputOne = document.querySelector("#inputOne").value;
    var inputTwo = document.querySelector("#inputTwo").value;
    console.info("Join Input One and Input Two: " + inputOne + inputTwo);
}

function showSize(e) {
    e.preventDefault(); 
    var inputOne = document.querySelector("#inputOne").value;
    var inputTwo = document.querySelector("#inputTwo").value;
    console.info("Input One length: " + inputOne.length);
    console.info("Input Two length: " + inputTwo.length);
}

function lettersShift(e) {
    e.preventDefault(); 
    var inputOne = document.querySelector("#inputOne").value;
    var inputTwo = document.querySelector("#inputTwo").value;
    console.info("Input One(UpperCase): " + inputOne.toUpperCase());
    console.info("Input Two(LowerCase): " + inputTwo.toLowerCase());
}
