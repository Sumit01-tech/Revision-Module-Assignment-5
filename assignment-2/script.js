let sentence = " JavaScript is an amazing language! ";

let trimmedSentence = sentence.trim();

let upperCaseSentence = trimmedSentence.toUpperCase();
let extractedWord = trimmedSentence.slice(18, 25);

let includesLanguage = trimmedSentence.includes("language");

let startsWithJava = trimmedSentence.startsWith("Java");

console.log("Trimmed Sentence:", trimmedSentence);
console.log("Upper Case Sentence:", upperCaseSentence);
console.log("Extracted Word:", extractedWord);
console.log("Includes 'language'?", includesLanguage);
console.log("Starts with 'Java'?", startsWithJava);
