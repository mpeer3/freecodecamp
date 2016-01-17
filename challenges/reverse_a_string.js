/* Solution by Michael Peer 2015*/
/* http://www.freecodecamp.com/challenges/bonfire-reverse-a-string */
/* Convert String to Array in order to reverse it */

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
