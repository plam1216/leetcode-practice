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
console.log("1. Two Sum", twoSum([3, 2, 4], 6))


////////////////////////////////////////
// 121. Best Time to Sell a Stock (EASY)
////////////////////////////////////////

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
    // keep track of profit
    let profit = 0

    // loop through array and compare prices
    for (let i = 0; i < prices.length; i++) {
        // temp variable assigned to use as buyDay
        let temp = prices[i]
        // loop through array to find best sellDay
        for (let j = i + 1; j < prices.length; j++) {
            // if sellDay value is greater than buyDay
            if (prices[j] > prices[i]) {
                // let difference equal sellDay - buyDay
                let difference = prices[j] - temp

                // if difference is greater than current profit, reassign profit
                if (difference > profit) {
                    profit = difference
                }
            }
        }
    }
    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 5, 4, 3, 1]))

////////////////////////////////
// 125. Valid Palindrome (EASY)
////////////////////////////////

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

let isPalindrome = (s) => {
    // change all letters in starting array to lowercase and split into individual characters
    let sArr = s.toLowerCase().split('')
    
    // empty array to hold valid characters
    let palArr = []

    // loop through sArr to get valid characters
    for(let i = 0; i < s.length; i++) {
        // if it is a letter between 'a' and 'z' push to array
        if(sArr[i].charCodeAt(0) >= 97 && sArr[i].charCodeAt(0) <= 122) {
            palArr.push(sArr[i])
        }

        // if it is a valid number between '0' and '9' push to array
        if(sArr[i].charCodeAt(0) >= 48 && sArr[i].charCodeAt(0) <= 57) {
            palArr.push(sArr[i])
        }
    }

    // join the valid array to get the word
    let word = palArr.join('')

    // reverse the valid array and join to get the palindrome
    let palWord = palArr.reverse().join('')

    // compare the word and palindrome to see if it is valid
    return word === palWord
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))