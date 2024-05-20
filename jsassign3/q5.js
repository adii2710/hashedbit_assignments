function correctFn(sentence, wrong, correct) {
    let regex = new RegExp('\\b' + wrong + '\\b', 'gi');
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

let sentence = "He is a greate man and a good father.";
let wrongWord = "greate";
let correctWord = "great";

let correctedSentence = correctFn(sentence, wrongWord, correctWord);
console.log(correctedSentence); // Output: "He is a great man and a good father."

