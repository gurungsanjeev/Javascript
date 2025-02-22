


// 1. creating  a varible of type string and try to add a number to it

let name = "sanjeev"
let additional = name + 2;
console.log(additional); // output sanjeev2


/// 2. use type of operator to find the datatype of the string in the last question
console.log(typeof additional);
// output = string


/// 3. Create a const object in javascript can you change it to hold the number

const obj = {
    fruit : "apple",
    id : 5
}

// obj = {
//    fruit : "banana",
//    id: 6
//     }
/// 4. can you add a new key in the previoues obj

obj["friend"] = "sanjeev";   /// adding new key in the object
obj["fruit"] = "banana";   // we can also change the value inside the object

console.log(obj)


// 5. write a js program to create a word meaning dictionaryt of 5 words

const dict = {
    "Sanjay": "A name of Sanskrit origin meaning 'victorious' or 'triumphant'.",
    "Ava": "A name of Latin origin meaning 'bird' or 'life'.",
    "Leo": "A name of Latin origin meaning 'lion'.",
    "Maya": "A name of Sanskrit origin meaning 'illusion' or 'magic'.",
    "Ethan": "A name of Hebrew origin meaning 'strong' or 'firm'."
};
console.log( "The meaning of Sanjay :  " + dict. Sanjay);