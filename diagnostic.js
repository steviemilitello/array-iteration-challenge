// For this challenge, you should not delete any of the starter code or data.
// You should fill in the fat arrow callback function that each iteration
// method needs to meet each questions's criteria.
// use detailed console logs and node to test your work

const holidays = [
  {name: 'valentines day', month: 'february'},
  {name: 'cinco de mayo', month: 'may'},
  {name: 'halloween', month: 'october'}
]

// Question 1: Given the array above, write the callback for 'find' to return
// the holiday object that occurs in the month of 'may'.
const mayHoliday = holidays.find(() => {
})

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant']

// Question 2: Given the array above, write the callback for 'filter' to return
// a new array that only has the words from the original that had less than four
// letters.
const wordsWithLessThanFourLetters = words.filter(() => {

})

// Question 3: Given the same array of words, write the callback for 'every' to
// determine if all the words in the array contain the letter 'a'.
const doesEveryWordContainA = words.every(() => {

})

// Question 4: Given the same array of words, write the callback for 'some' to
// determine if any word in the array contains the letter 'x'.
const doesAnyWordContainX = words.some(() => {

})

const developersArray = [
  {name: 'ralph', language: 'javascript'},
  {name: 'gretchen', language: 'javascript'},
  {name: 'alice', language: 'ruby'},
  {name: 'mohammed', language: 'javascript'},
  {name: 'pat', language: 'ruby'},
  {name: 'taylor', language: 'ruby'},
  {name: 'hideo', language: 'javascript'}
]

// Question 5: Given the array of developer objects above, write the callback
// function for reduce to return an object that has two keys, 'javascript' and
// 'ruby'.

// The 'javascript' key should point to an array of the developers that have
// 'javascript' set to their 'language'.

// The 'ruby' key should point to an array of the developers that have
// 'ruby' set to their 'language'.

// the final output should look like this object
/*
{
  javascript: [
    {name: 'ralph', language: 'javascript'},
    {name: 'gretchen', language: 'javascript'},
    {name: 'mohammed', language: 'javascript'},
    {name: 'hideo', language: 'javascript'}
  ],
  ruby: [
    {name: 'alice', language: 'ruby'},
    {name: 'pat', language: 'ruby'},
    {name: 'taylor', language: 'ruby'}
  ]
}
*/
const developersObject = developersArray.reduce(() => {

}, {javascript: [], ruby: []})
