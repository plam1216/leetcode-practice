///////////////////////////
// 58. Length of Last Word
///////////////////////////

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// s = "   fly me   to   the moon  "

var lengthOfLastWord = function (s) {
    // split the string by ' ' to get each word
    // this returns an array
    let strArr = s.split(' ')

    // filter out all empty spaces ' ' so the array only contains words
    let wordsArr = strArr.filter(word => word !== '')
    // console.log(wordsArr)

    // find the length of the last word in the 'wordsArr'
    let lastWordLength = wordsArr[wordsArr.length - 1].length
    // console.log(lastWordLength)

    return lastWordLength
};

// expected to return "5"
console.log("Length of Last Word: ", lengthOfLastWord("hello world"))


/////////////////////////////////
// CODEWARS - KYU 5
// FIRST NON-REPEATING CHARACTER
/////////////////////////////////
function firstNonRepeatingLetter(s) {
    // convert string to lowercase
    let sLower = s.toLowerCase()

    // loop through string
    for (let i = 0; i < sLower.length; i++) {
        if (sLower.indexOf(sLower[i]) === sLower.lastIndexOf(sLower[i])) {
            return sLower[i]
        }
    }
    return ""
}

// expected to return "t"
console.log(firstNonRepeatingLetter("sTRess"))


///////////////////////////////////
// 2418. Length of Last Word (EASY)
///////////////////////////////////

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

var sortPeople = function (names, heights) {
    let people = []
    for (let i = 0; i < names.length; i++) {
        let temp = {}
        temp["name"] = names[i]
        temp["height"] = heights[i]
        people.push(temp)
    }
    // console.log(people)
    people.sort((a, b) => b.height - a.height)
    // console.log("sort", people)
    let desOrder = []

    for (let i = 0; i < people.length; i++) {
        desOrder.push(people[i].name)
    }

    return desOrder
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))