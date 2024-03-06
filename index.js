import linkedList from "./linkedList.js";


const myList = new linkedList();

myList.append(10);
myList.append(20);
myList.append(30);

myList.prepend(5);


console.log(myList.size); // Expected: 4
console.log(myList.head().value); // Expected: 5
console.log(myList.tail().value); // Expected: 30
console.log(myList.at(2).value); // Expected: 20
console.log(myList.contains(20)); // Expected: true
console.log(myList.contains(40)); // Expected: false
console.log(myList.find(20)); // Expected: 2
console.log(myList.find(40)); // Expected: null
console.log(myList.toString()); // Expected: (5) -> (10) -> (20) -> (30) -> null
myList.pop();
console.log(myList.size); // Expected: 3
console.log(myList.toString()); // Expected: (5) -> (10) -> (20) -> null


