//source: https://www.w3schools.com/js/js_datatyes.asp
/**
 * JavaScript Basics: let, const, and Primitive Data Types
 * -------------------------------------------------------
 * - Use `let` when the variable value will change later (mutable).
 * - Use `const` when the variable value should remain fixed (immutable).
 * - Both are block-scoped (only available inside { }).
 * 
 * Primitive Data Types in JavaScript:
 * 1. String    → text values
 * 2. Number    → integers and floating-point numbers
 * 3. Boolean   → true or false
 * 4. Null      → intentional "no value"
 * 5. Undefined → variable declared but not assigned
 * 6. Symbol    → unique identifiers
 * 7. BigInt    → very large integers
 */

// Example of let (value can change)
let x = 5;
let y = 6;
console.log("Before Swap: X =", x, "Y =", y);

// Swapping values using let (since values change)
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: X =", x, "Y =", y);

// Example of const (value should not change)
const PI = 3.1416;   // mathematical constant
const YEAR = 2026;   // fixed year
console.log("Constant PI =", PI);
console.log("Constant YEAR =", YEAR);

// Basic Data Types Demonstration
let greeting = "Hello, World!";   // String
let age = 20;                     // Number (integer)
let temperature = 36.6;           // Number (float)
let isActive = true;              // Boolean
let emptyValue = null;            // Null
let notDefined;                   // Undefined
const uniqueId = Symbol("id");    // Symbol
const bigNumber = 123456789012345678901234567890n; // BigInt

// Checking typeof for each
console.log("String:", greeting, "| typeof =", typeof greeting);
console.log("Number age:", age, "| typeof =", typeof age);
console.log("Number temperature:", temperature, "| typeof =", typeof temperature);
console.log("Boolean:", isActive, "| typeof =", typeof isActive);
console.log("Null:", emptyValue, "| typeof =", typeof emptyValue); // typeof null → "object" (quirk in JS)
console.log("Undefined:", notDefined, "| typeof =", typeof notDefined);
console.log("Symbol:", uniqueId.toString(), "| typeof =", typeof uniqueId);
console.log("BigInt:", bigNumber, "| typeof =", typeof bigNumber);
