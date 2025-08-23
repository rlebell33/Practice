console.log("Word Reversal");

function reverseWords(sentence) {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

console.log(reverseWords("This is a test string of a few words.")); // "sihT si a tset gnirts fo a wef .sdrow"