/*Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false. */

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft > yourRight) {
    if (friendsLeft > friendsRight) {
      if (yourLeft === friendsLeft && yourRight === friendsRight) return true;
      else return false;
    } else if (friendsLeft < friendsRight) {
      if (yourLeft === friendsRight && yourRight === friendsLeft) return true;
      else return false;
    }
    return false;
  } else if (yourLeft < yourRight) {
    if (friendsLeft > friendsRight) {
      if (yourRight === friendsLeft && yourLeft === friendsRight) return true;
      else return false;
    } else if (friendsLeft < friendsRight) {
      if (yourRight === friendsRight && yourLeft === friendsLeft) return true;
      else return false;
    }
    return false;
  } else {
    if (friendsLeft === friendsRight && yourLeft === friendsLeft) return true;
    else return false;
  }
}
