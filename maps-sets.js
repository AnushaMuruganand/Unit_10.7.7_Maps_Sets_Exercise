///////////// Quick Question #1

// What does the following code return?

const set1 = new Set([1, 1, 2, 2, 3, 4]); // Set(4) {1, 2, 3, 4}

///////////// Quick Question #2

// What does the following code return?

const set2 = [...new Set("referee")].join(""); // ref

///////////// Quick Questions #3

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true); // Map(1) { [1,2,3] => true }
m.set([1, 2, 3], false); // Map(2) { [1,2,3] => true , [1,2,3] => false }

///////////// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const arrSet = new Set(arr);
    if (arr.length !== arrSet.size) {
        return true;
    }
    return false;
};

// const hasDuplicate = arr => new Set(arr).size !== arr.length

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false


///////////// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    const vowelMap = new Map();
    const strLowerCase = str.toLowerCase();
    let count = 0;
    for (let char of strLowerCase) {
        if ('aeiou'.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            }
            else {
                vowelMap.set(char, 1);
            } 
        }
    } 
    return vowelMap;
};

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }