// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a, b) {
    if (a > b) {
      return a
    } else {
      return b;
    }
}
console.log(max(14, 72));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a1, b1, c1){
    if (a1 > (b1 || c1)) {
      return a1
    } else if (b1 > (a1 || c1)) {
      return b1
    } else {
      return c1;
    }
}

console.log(maxOfThree(10,187,4));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char ==="o" || char === "u") {
      return true
    }  else {
          return false;
        }
}
console.log(isVowel("o"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (A, B) {
  return (A + B);
}

console.log(sum(2,7));
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (a2, b2, c2) {
  return ((a2 + b2 + c2) / 3);
}

console.log(avg(7, 14,197));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength (parameter_one) {
  return (parameter_one.length);
}

console.log(getLength("one-hundred eighty seven"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (x, y) {
  if (x < y) {
    return true
  } else {
    return false;
  }
}

console.log(greaterThan(17, 2));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet (a4) {
  return ("HELLO THERE " + a4 + " !!!!!!");
}

console.log(greet("Samsonite"));
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (a7, b7, c7, d7) {
  return ("the " + a7 + " " + b7 + " " + c7 + " " + d7 + "!!\"");
}

console.log(madlib("vivacious", "leprechaun", "ran amok", "the hollowed stomping grounds"));
