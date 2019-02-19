/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal. */

function areSimilar(a, b) {
  var pos1,
    pos2,
    count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (count === 0) {
        pos1 = i;
      } else if (count === 1) {
        pos2 = i;
      } else {
        return false;
      }
      count++;
    }
  }
  if (count === 0) {
    return true;
  } else if (count === 1) {
    return false;
  } else {
    if (a[pos1] === b[pos2] && a[pos2] === b[pos1]) {
      return true;
    } else {
      return false;
    }
  }
}
