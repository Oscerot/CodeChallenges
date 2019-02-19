/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false. */

function isLucky(n) {
  var ns = n + "";
  var firstHalf = ns.slice(0, ns.length / 2);
  var secondHalf = ns.slice(ns.length / 2, ns.length);
  var sum1 = 0,
    sum2 = 0;
  for (var i = 0; i < firstHalf.length; i++) {
    sum1 += +firstHalf.charAt(i);
    sum2 += +secondHalf.charAt(i);
  }
  return sum1 === sum2;
}
