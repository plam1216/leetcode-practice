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

let lengthOfLastWord = (s) => {
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
let firstNonRepeatingLetter = (s) => {
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
console.log()

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

let sortPeople = (names, heights) => {
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

console.log("Sort by height:", sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))
console.log()

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

let twoSum = (nums, target) => {
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
console.log("Two Sum: [3, 2, 4], 6", twoSum([3, 2, 4], 6))
console.log()

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

console.log("Max Profit [7, 1, 5, 3, 6, 4]", maxProfit([7, 1, 5, 3, 6, 4]))
console.log("Max Profit [7, 6, 5, 4, 3, 1]", maxProfit([7, 6, 5, 4, 3, 1]))
console.log()

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
    for (let i = 0; i < s.length; i++) {
        // if it is a letter between 'a' and 'z' push to array
        if (sArr[i].charCodeAt(0) >= 97 && sArr[i].charCodeAt(0) <= 122) {
            palArr.push(sArr[i])
        }

        // if it is a valid number between '0' and '9' push to array
        if (sArr[i].charCodeAt(0) >= 48 && sArr[i].charCodeAt(0) <= 57) {
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

console.log("A man, a plan, a canal: Panama", isPalindrome("A man, a plan, a canal: Panama"))
console.log("race a car", isPalindrome("race a car"))
console.log()

/////////////////////////////
// 242. Valid Anagram (EASY)
/////////////////////////////

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

let isAnagram = (s, t) => {
    // anagrams should contain the same exact letters using original letters exactly once
    // split string into individual letters, sort them alphabetically, and join the letters
    // see if the two words are the same
    return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log("isAnagram? anagram, nagaram", isAnagram("anagram", "nagaram"))
console.log()

//////////////////////////////
// 49. Group Anagrams (MEDIUM)
//////////////////////////////

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

let groupAnagrams = (strs) => {
    // object to store sorted words
    // each word will be comparaed to the sorted word to see if it is an anagram
    let anagramObj = {};

    // loop through array of words
    for (let i = 0; i < strs.length; i++) {
        // sortedWord is each word in strs array sorted alphabeticalaly
        let sortedWord = strs[i].split('').sort().join('');

        // if sortedWord exists in anagramObj, push the word to that key's array
        if (anagramObj[sortedWord]) {
            anagramObj[sortedWord].push(strs[i])
        } else {
            // if the key doesn't exist, add the word in an array and add the key:value pair to anagramObj
            anagramObj[sortedWord] = [strs[i]]
        }
    }

    return Object.values(anagramObj)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log()

////////////////////////////////
// 20. Valid Parentheses (EASY)
////////////////////////////////

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function (s) {
    // stack to keep track of brackets
    let arr = []

    // bracket pairs, if next bracket is closing, prev bracket should be opening
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    // loop through bracket string
    for (let i = 0; i < s.length; i++) {
        // if the char is a closing bracket
        if (brackets[s[i]]) {
            // check if the last bracket in stack is equal to closing bracket's value pair
            if (arr[arr.length - 1] === brackets[s[i]]) {
                // there is a match, pop (remove) the last item in arr
                arr.pop()
            } else {
                // no match, add it to the stack
                arr.push(s[i])
            }
        } else {
            // the char is not a closing bracket, add to the stack
            arr.push(s[i])
        }
    }

    // check the size of the stack
    // if it is 0 return true (all opening brackets have a closed bracket pair)
    if (arr.length === 0) {
        return true
    } else {
        return false
    }
};

console.log("()[]{}", isValid("()[]{}"))
console.log("(}", isValid("(}"))
console.log()


/////////////////////////////////////////////
// 1207. Unique Number of Occurrences (EASY)
/////////////////////////////////////////////

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

let uniqueOccurrences = (arr) => {
    // keep track of number of occurences
    let count = {}

    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // if key already exists in count
        if (count[arr[i]]) {
            // increment by +
            count[arr[i]]++
        } else {
            // else it is the first occurence so create the key:value pair
            count[arr[i]] = 1
        }
    }

    // get the values of "count"; this returns an array
    let keyVals = Object.values(count)

    // turn the array into a set; this eliminates duplicates
    let valSet = new Set(keyVals)

    // if length of the array values is equal to set size there are no duplicates
    if (keyVals.length === valSet.size) {
        return true
    } else {
        // otherwise duplicates were removed when creating the set so the sizes are different
        return false
    }
};

console.log("[1,2,2,1,1,3]", uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log()

////////////////////////////////////
// 1512. Number of Good Pairs (EASY)
////////////////////////////////////

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

let numIdenticalPairs = (nums) => {
    let pairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                pairs++
            }
        }
    }
    return pairs
};

console.log("numIdenticalPairs([1, 2, 3, 1, 1, 3]):", numIdenticalPairs([1, 2, 3, 1, 1, 3]))
console.log("numIdenticalPairs([1, 2, 3, 1, 1, 3]):", numIdenticalPairs([1, 1, 1, 1]))
console.log()


///////////////////////////////////////
// 1480. Running Sum of 1d Array (EASY)
///////////////////////////////////////

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

let runningSum = (nums) => {
    // array to hold solution
    let arr = []

    // store first value
    arr[0] = nums[0]

    // loop through array
    // arr[i] is equal to the sum of the previous arr index and current nums index
    for (let i = 1; i < nums.length; i++) {
        arr[i] = nums[i] + arr[i - 1]
    }

    return arr
};

console.log("[1,2,3,4]", runningSum([1, 2, 3, 4]))
console.log("[1,1,1,1]", runningSum([1, 1, 1, 1]))
console.log()


///////////////////////////////////////
// 804. Unique Morse Code Words (EASY)
///////////////////////////////////////

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.



// Example 1:
// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// Example 2:
// Input: words = ["a"]
// Output: 1

let uniqueMorseRepresentations = (words) => {
    // morseCode alphabet
    let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    // keep track of converted word
    let convertedWord = ""

    // store converted words
    let convertedWords = []

    // for every word in array that is passed in
    for (word of words) {
        // loop through each character of the word and convert to ASCII value - 97 to get index
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97

            // add converted letter to empty string convertedWord
            convertedWord += morseCode[index]
        }
        // add the convertedWord to the convertedWords array
        convertedWords.push(convertedWord)
        // reset convertedWord to an empty string for next iteration of loop
        convertedWord = ""
    }

    // turn convertedWords into a Set; eliminates duplicates
    let numTransformations = new Set(convertedWords)

    // return the size of the Set
    return numTransformations.size
};

console.log('["gin","zen","gig","msg"]', uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
console.log('["a"]', uniqueMorseRepresentations(["a"]))
console.log()


/////////////////////////
// 100. Same Tree (EASY)
/////////////////////////
// Definition for a binary tree node
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
// CANNOT do new TreeNode(1, 2, 3) because it will just assign the INTEGER 2 to this.left and INTEGER 3 to this.right

// create root node
let p = new TreeNode(1, new TreeNode(2), new TreeNode(3))

// repeat for second tree
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3))

let isSameTree = (p, q) => {
    // if the trees are both null, they are the same
    if (p === null && q === null) {
        return true
    }

    // if one of the trees is not null, they are not the same
    if (p === null || q === null) {
        return false
    }

    // if p.val equals q.val, run isSameTree again for the left and right nodes
    // until it has iterated through all nodes
    // if all nodes are equal it will stop at the first conditional
    // meaning it is true
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    // p.val does not equal q.val and neither are null
    return false
};

console.log("Same Tree? [1,2,3]", isSameTree(p, q))
console.log()


/////////////////////////////
// 101. Symmetric Tree (EASY)
/////////////////////////////

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

let root = new TreeNode(1, new TreeNode(2), new TreeNode(2), new TreeNode(3), new TreeNode(4), new TreeNode(4), new TreeNode(3))
// why doesn't left.left print?
// console.log(root)

let symmetryCheck = (left, right) => {
    //  if both nodes are null they are equal
    if (left === null && right === null) return true

    //  if only one node is null, they are not equal
    if (left === null || right === null) return false

    // if the node values are not equal
    if (left.val !== right.val) return false

    // recursive function, check if the next set of nodes are equal
    // keep running until nodes are either both null or not equal
    return symmetryCheck(left.left, right.right) && symmetryCheck(left.right, right.left)
}

let isSymmetric = (root) => {
    if (root === null) return true

    return symmetryCheck(root.left, root.right)
};

console.log("[1, 2, 2, 3, 4, 4, 3]", isSymmetric(root))
console.log()


/////////////////////////////////////////
// 876. Middle of the Linked List (EASY)
/////////////////////////////////////////

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// List Node [1 -> 2 -> 3 -> 4 -> 5]
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

let middleNode = (head) => {
    // temp to keep track of nodes
    let temp = head;

    // counter to find node size
    let nodeSize = 0;

    // while temp isn't null, increase counter and go to the next node
    while (temp != null) {
        nodeSize++
        temp = temp.next
    }

    // find middle of node list by dividing by two; prompt says round up if it is odd size
    let middle = Math.ceil(nodeSize / 2)
    let middleNode = head

    // loop through nodeList, decrement nodeSize by 1 until it equals 'middle' size
    // this gives the resulting middle node
    // [1, 2, 3, 4, 5] => middle = 3

    // 5 != 3... 4 != 3... 3 != 3 --- break loop
    while (nodeSize != middle) {
        // 1 -> 2... 2 -> 3
        middleNode = middleNode.next

        // 5 - 1 = 4... 4 - 1 = 3
        nodeSize--
    }

    return middleNode
};

// Alternate Solution
// // Time Complexity :  O(n)
// // Space Complexity : O(1)
// let middleNode = (head) => {
//     // Initialize two pointers p1 and p2 pointing to the head...
//     var p1 = head;
//     var p2 = head;
//     while(p2 != null && p2.next != null){
//         // In each iteration, we move p1 one node forward and we move p2 two nodes forward...
//         p1 = p1.next;
//         p2 = p2.next.next;
//     }
//     // When p2 reaches the last node, p1 will be exactly at the middle point...
//     return p1;
// };

console.log("[1, 2, 3, 4, 5]", middleNode(head))
console.log()


///////////////////////////////////////////////////////////////
// 2190. Most Frequent Number Following Key In an Array (EASY)
///////////////////////////////////////////////////////////////
// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

// Example 1:
// Input: nums = [1,100,200,1,100], key = 1
// Output: 100
// Explanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.
// No other integers follow an occurrence of key, so we return 100.

// Example 2:
// Input: nums = [2,2,2,2,3], key = 2
// Output: 2
// Explanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.
// For target = 3, there is only one occurrence at index 4 which follows an occurrence of key.
// target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.

let mostFrequent = (nums, key) => {
    let tracker = {}

    // loop through array
    for (let i = 0; i < nums.length; i++) {

        // is [i] === key?
        // if 1 === 1
        if (nums[i] === key) {

            // does the value after i exist?
            if (nums[i + 1]) {

                // if key:value '100' exists in 'tracker'
                if (tracker[nums[i + 1]]) {
                    // increment the key:value
                    tracker[nums[i + 1]]++

                } else {
                    // else if it doesn't exist in 'tracker' add the key:value pair
                    tracker[nums[i + 1]] = 1
                }
            }
        }
    }

    // get an array of the keys
    let keys = Object.keys(tracker);

    // sort by using the keys to lookup the values in the original object:
    keys.sort((a, b) => tracker[a] - tracker[b]);

    // console.log(keys);
    return keys[keys.length - 1]
};

console.log("Most Frequent Target After Key: [1, 100, 200, 1, 100]", mostFrequent([1, 100, 200, 1, 100], 1))
console.log("Most Frequent Target After Key: [2, 2, 2, 2, 3]", mostFrequent([2, 2, 2, 2, 3], 2))
console.log()

/////////////////////////////
// 136. Single Number (EASY)
/////////////////////////////

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

let singleNumber = (nums) => {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    for (num in map) {
        if (map[num] === 1) {
            return num
        }
    }
};

console.log("Single Num in Array: [4, 1, 2, 1, 2]", singleNumber([4, 1, 2, 1, 2]))
console.log()


/////////////////////////////////
// 141. Linked List Cycle (EASY)
/////////////////////////////////
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// Definition for singly - linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head1 = new ListNode(new ListNode(3))
head1.next = new ListNode(2)
head1.next.next = new ListNode(0)
head1.next.next.next = new ListNode(-4)
head1.next.next.next.next = head1.next


let hasCycle = (head) => {
    let fast = head
    let slow = head

    while (fast) {
        if (!fast.next) {
            return false
        } else {
            fast = fast.next.next
            slow = slow.next
        }

        if (fast === slow) return true
    }

    return false
};

console.log("Linked List Cycle, [3, 0, 2, -4]", hasCycle(head1))
console.log()

// 70. Climbing Stairs (EASY)
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

let climbStairs = (n) => {
    // Fibonacci Seq -> [0, 1, 1, 2, 3, 5, 8...]
    let prev = 0
    let curr = 1
    let temp

    for (let i = 0; i < n; i++) {
        temp = prev
        prev = curr
        curr += temp
    }

    return curr
}

console.log("n=2; expect 2", climbStairs(2))
console.log("n=3; expect 3", climbStairs(3))
console.log("n=5; expect 8", climbStairs(5))
console.log()


///////////////////////////////////////////
// 104. Maximum Depth of Binary Tree (EASY)
///////////////////////////////////////////
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

//  Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

let maxDepthRoot = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

let maxDepth = (root) => {
    // if root exists...
    if (root) {
        // get the max between the root.left & root.right
        //      3
        //     9 20
        //       15 7

        // when root = null, max(null, null) => max(0, 0)
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    return 0
};

console.log("[3,9,20,null,null,15,7], expect: 3", maxDepth(maxDepthRoot))
console.log()


/////////////////////////////////
// 226. Invert Binary Tree (EASY)
/////////////////////////////////
// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

let treeToInvert = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))

let invertTree = (root) => {
    if (root !== null) {
        temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
    }

    return root
};

console.log("tree", treeToInvert)
console.log("inverted tree", invertTree(treeToInvert))
console.log()


///////////////////////////////////////////////////////////
// 2114. Maximum Number of Words Found in Sentences (EASY)
///////////////////////////////////////////////////////////
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.
let mostWordsFound = (sentences) => {
    let wordCount = []

    sentences.forEach(sentence => wordCount.push(sentence.split(' ').length))

    return Math.max(...wordCount)
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

console.log("Most word in sentences:", mostWordsFound(sentences))