/*Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c". */

function commonCharacterCount(s1, s2) {
  var actualCharS1,
    charFound = false,
    commonChars = 0;
  for (var i = 0; i < s1.length; i++) {
    actualCharS1 = s1.charAt(i);
    charFound = false;
    for (var j = 0; j < s2.length && charFound === false; j++) {
      if (s2.charAt(j) === actualCharS1) {
        charFound = true;
        s2 = s2.slice(0, j) + s2.slice(j + 1, s2.length);
        commonChars++;
      }
    }
  }
  return commonChars;
}
