// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const greetingOptions = ["Welcome", "Good morning", "Good afternoon", "Howdy"];
const user = "Brandon";
const greeting = choice => {
  return `${greetingOptions[choice]}, ${user}`;
};
console.log(greeting(1));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    return count++;
  };
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = init => {
  let count = init;
  return {
    decrement: () => {
      return count--;
    },
    increment: () => {
      return count++;
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const newerCounter = counterFactory(0);

console.log(newerCounter.decrement());
console.log(newerCounter.decrement());
console.log(newerCounter.decrement());
console.log(newerCounter.increment());
console.log(newerCounter.increment());
console.log(newerCounter.increment());
