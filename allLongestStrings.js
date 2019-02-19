/*Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */

function allLongestStrings(inputArray) {
  var largestSize = 0;
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > largestSize) largestSize = inputArray[i].length;
  }
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length == largestSize) newArray.push(inputArray[i]);
  }
  return newArray;
}
