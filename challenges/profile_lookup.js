/* Solution by Michael Peer 2016*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];


function lookUp(firstName, prop){
// Only change code below this line
   for (var ct=0;ct<contacts.length;ct++){
     if (contacts[ct].firstName ==firstName){
       if (contacts[ct].hasOwnProperty(prop)) {
       return contacts[ct][prop];
       }else {
         return "No such property";
       }
     }
   }
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "likes");
