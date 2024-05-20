let str = 'The quick brown fox jumps over the lazy dog';
let lowerStr = str.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelCount = 0;
let consonantCount = 0;

for (let char of lowerStr) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
    else if (consonants.includes(char)) {
        consonantCount++;
    }
}

console.log('Number of vowels:', vowelCount);
console.log('Number of consonants:', consonantCount);
