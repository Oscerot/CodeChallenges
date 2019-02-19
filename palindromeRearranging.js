/*Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome. */

function palindromeRearranging(inputString) {
  var actChar,
    uneven = false,
    strAux;
  do {
    actChar = inputString.charAt(0) + "";
    strAux = inputString
      .split("")
      .filter(x => x != actChar)
      .join("");
    if ((inputString.length - strAux.length) % 2 !== 0) {
      if (uneven) {
        return false;
      } else {
        uneven = true;
      }
    }
    inputString = strAux;
  } while (inputString.length > 0);
  return true;
}
