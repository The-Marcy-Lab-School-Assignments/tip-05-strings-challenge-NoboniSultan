/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
Translate from english to javascript
Steps to solve the problem:
1. How do we capitalize? .toUpperCase()
2. Whats the first letter of each word? .split(" ")
3. Edge case: first word
4. Return a new string ? create a new variable and store the new string in it.
5. we need to capitalize many words? use a loop

Hand walking the problem:
sentence = "hello world from javascript"
newSentence = "H";
Loop through every letter:
  Capitalize the first letter 
     add it to newSentence
*/
//Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
//a new string where the first letter of each word is capitalized.
const capitalizeWords = (sentence) => {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        if (i === 0 || sentence[i - 1] === " ") {
            newSentence += sentence[i].toUpperCase();
        } else {
            newSentence += sentence[i];
        }
    }
    return newSentence;

};


console.log(capitalizeWords("hello world from javascript"));
// → "Hello World From Javascript"

console.log(capitalizeWords("javaScript"));
// → "JavaScript"

//Ben's solution
const capitalizeWords2 = (sentence) => {
    let NewWords = '';
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            NewWords += sentence[i].toUpperCase();
        }
        else if (sentence[i] === ' ') {
            NewWords += sentence[i];
            NewWords += sentence[i + 1].toUpperCase();
            i++;
        }
        else {
            NewWords += sentence[i];
        }
        return NewWords;
    }
};