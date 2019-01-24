// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

const callback = res => console.log(res);

function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, callback);

function last(arr, cb) {
  return cb(arr.slice(-1));
  // last passes the last item of the array into the callback.
}

last(items, callback);

function sumNums(x, y, cb) {
  let result = x + y;
  return cb(result);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(2, 3, callback);

function multiplyNums(x, y, cb) {
  let result = x * y;
  return cb(result);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(2, 3, callback);

function contains(item, list, cb) {
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains("Gum", items, callback);

/* STRETCH PROBLEM */

const numbers = [0, 0, 1, 1, 2, 3, 4, 5, 5];

function removeDuplicates(array, cb) {
  const cleanArr = array.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return cb(cleanArr);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(numbers, callback);
