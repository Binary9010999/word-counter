"use strict";
function countCharactersAndWords(paragraph) {
    // Remove leading and trailing whitespaces
    paragraph = paragraph.trim();
    // Initialize character and word counters
    let characterCount = 0;
    let wordCount = 0;
    // Loop through each character in the paragraph
    for (const char of paragraph) {
        // Count characters that are not whitespace
        if (char !== ' ') {
            characterCount++;
        }
    }
    // Split the paragraph into words using whitespace as the separator
    const words = paragraph.split(' ');
    // Count non-empty words
    for (const word of words) {
        if (word !== '') {
            wordCount++;
        }
    }
    return { characterCount, wordCount };
}
// Get user input (replace with user input method)
const userParagraph = "This is an example paragraph.";
// Count characters and words
const { characterCount, wordCount } = countCharactersAndWords(userParagraph);
console.log(`Number of characters (excluding spaces): ${characterCount}`);
console.log(`Number of words: ${wordCount}`);
