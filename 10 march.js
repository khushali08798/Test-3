// Exercise 1: API Response Validation

let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if ALL responses are successful (200–299)
const allSuccessful = responses.every(code => code >= 200 && code <= 299);
console.log("All responses successful:", allSuccessful);

// 2. Find the FIRST non-success code
const firstNonSuccess = responses.find(code => code < 200 || code > 299);
console.log("First non-success code:", firstNonSuccess);

// 3. Return all unique error codes
const errorCodes = responses.filter(code => code < 200 || code > 299);
const uniqueErrors = [...new Set(errorCodes)];
console.log("Unique error codes:", uniqueErrors);

// Exercise 2 : Additional code: Response times sorting 
/*The issue in the original code was that Array.prototype.sort() without a comparator function sorts elements as strings (lexicographically), not as numbers. This caused incorrect ordering for the response times array.

For example, with [320, 85, 1200, 450, 99], string sorting would put 1200 first because '1' comes before '3', '8', etc.*/
let responseTimes = [320, 85, 1200, 450, 99];
// Fix: sort() without comparator sorts as strings, not numbers
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);

// Exercise 3 New code: Array and object copying
/*Why? The spread operator ([...suite1]) creates a shallow copy of the array. This means:

A new array is created for suite2.
But the objects inside the array are still the same references as in suite1.
When you modify suite2[0].status = "fail", you're changing the shared object, so suite1[0].status also becomes "fail".
This is a common JavaScript gotcha with reference types (objects and arrays).

How to Fix It
To create a deep copy (independent copies of the objects), use map() with the spread operator on each object:*/

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log("Original output:", suite1[0].status); // "fail" - shallow copy issue

// Fixed version: Deep copy using map and spread
let suite1Fixed = [{ name: "login", status: "pass" }];
let suite2Fixed = suite1Fixed.map(obj => ({ ...obj }));
suite2Fixed[0].status = "fail";
console.log("Fixed output:", suite1Fixed[0].status); // "pass"
