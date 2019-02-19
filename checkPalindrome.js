//Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
   var leftSidePos = 0;
   var rightSidePos = inputString.length-1;

   do{
      if(inputString.charAt(leftSidePos)!=inputString.charAt(rightSidePos)){
         return false;
      }
      leftSidePos++;
      rightSidePos--;
   } while(leftSidePos<=rightSidePos);
   
   return true;
}
