/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function addBorder(picture) {
  var topAndBotton = "";
  picture = picture.map(row => "*" + row + "*");
  for (var i = 0; i < picture[0].length; i++) {
    topAndBotton += "*";
  }
  picture.unshift(topAndBotton);
  picture.push(topAndBotton);
  return picture;
}
