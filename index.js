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

// expected to return "5 & 4"
console.log("58. Length of Last Word: ", lengthOfLastWord("hello world"))
console.log("58. Length of Last Word: ", lengthOfLastWord("  fly me moon  "))


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
console.log("KYU 5. first non-repeating char:", firstNonRepeatingLetter("sTRess"))


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
    // store the names and heights in a list as value in an object
    // sort them by height
    // return the names as an array

    // list of people
    let people = []

    // loop through names array
    for (let i = 0; i < names.length; i++) {
        // temp object that will be used to push to array
        let temp = {}

        // store name and height as key:value pairs
        temp["name"] = names[i]
        temp["height"] = heights[i]

        // push to add object to array
        people.push(temp)
    }

    // console.log(people)

    // sort by DESCENDING height
    people.sort((a, b) => b.height - a.height)

    // console.log("sort", people)

    // array of names in descending height order
    let desOrder = []

    // loop through people object which has the list of objects [{}, {}, {}, ...]
    // push their names into "desOrder"
    for (let i = 0; i < people.length; i++) {
        desOrder.push(people[i].name)
    }

    return desOrder
};

console.log("2418. Sort by height:", sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))


//////////////////////
// 1. Two Sum (EASY)
//////////////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var twoSum = function (nums, target) {
    // loop through array and assign each index to a "temp" value
    // nested loop to iterate at index 1 higher than "temp"
    // check if adding "temp" and nested loop index of nums gets target sum
    // if it does return indicies
    
    // hold indexes that sum to target
    let twoSum = []

    // loop through index
    for (let i = 0; i < nums.length; i++) {

        // temporarily assign first addend
        temp = nums[i]

        // loop through array starting at index one higher than first addend to find second number
        for (let j = i + 1; j < nums.length; j++) {

            // if sum is equal to target
            if (temp + nums[j] === target) {

                // push the indexes into twoSum array and return it
                twoSum.push(i)
                twoSum.push(j)
                return twoSum
            }
        }
    }
};

// expected [1, 2]
console.log("1. Two Sum", twoSum([3,2,4], 6))