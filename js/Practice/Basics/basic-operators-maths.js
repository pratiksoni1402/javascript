 console.log(10 + 5 * 2); // 20

 function multiply(a, b){
   console.log('Ans is', a * b)
 }

 multiply(10, 5)

 console.log(10 % 3);

 function power(a, b){
   console.log('Power', a ** b)
 }

 power(2, 5)

 console.log(4 ** (1/2));
 let num = 20;
 console.log(num/2)

 let a = 5;
 let b = a++;
 console.log(a, b);

 let x = 10;
 console.log(++x); // 11
 console.log(x++); //11
 console.log(x); // 12

 console.log(5 == '5'); // true
 console.log(5 === '5'); // false

 function isGreater(a, b){
   console.log( a > b ? 'A is Greater' : b > a ? 'B is greater' : a == b ? 'Both are equal' : '')
 }

 isGreater(5, 5)

 function randomNumber(min, max){
   let minCeil = Math.ceil(min)
   let maxFloor = Math.floor(max)
   console .log("Value between 1 and 100", Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil) )
 }

 randomNumber(1, 100)

 console.log(Math.floor( 4.9))//4
 console.log(Math.ceil( 4.9))//5

 function numberRounding(num){
   let result = num.toFixed(2)
   console.log('After 2 digit fraction', result)
 }
 numberRounding(5.45222)

 console.log(Math.max(3, 7, 2, 9, 4))

 console.log('10' + 5); //105
 console.log('10' - 5); // 5
 console.log('10' * 2); // 20
 console.log('10' / '2'); //5
 console.log(true + 1); // 2
 console.log((10 + 5) * 2 / 5); //6
 console.log(2 ** 3 ** 2); // 512
 console.log(Math.trunc(4.9015)) // removes the decimal part and returns only the integer part, without rounding.
 console.log(Math.floor(4.9015)) // rounds the number down to the nearest integer.
 console.log(Math.trunc(-4.9015)) //
 console.log(Math.floor(-4.9015)) //

 console.log('--------------------------------');
 //() Bitwise operators work on numbers at the binary level, meaning they operate on individual bits of the numbers.

 //? The bitwise XOR (^) compares each bit of two numbers:
 //* It returns 1 if the bits are different.
 //* It returns 0 if the bits are the same.
 console.log(5 ^ 3); //6

 //() The bitwise OR (|) compares each bit of two numbers:
 //* It returns 1 if at least one bit is 1.
 //* It returns 0 only if both bits are 0.
 console.log(5 | 3); //7

 //() The bitwise AND (&) compares each bit of two numbers:
 //* It returns 1 if both bits are 1.
 //* Otherwise, it returns 0.
 console.log(5 & 3); // 1

 //() The bitwise NOT (~) inverts all the bits of a number:
 //* 0 becomes 1, and 1 becomes 0.
 //* However, JavaScript uses 32-bit signed integers, meaning the result follows Two’s Complement Notation.

 //? Bitwise NOT Calculation
 //? Convert 5 to binary:
 //* 0000 0000 0000 0000 0000 0000 0000 0101
 //? Flip all bits:
 //* 1111 1111 1111 1111 1111 1111 1111 1010
 //* Convert back to decimal using Two’s Complement:
 //? The leftmost bit (1) indicates a negative number.
 //* To find the magnitude, take the two's complement (invert bits and add 1):
 //* 0000 0000 0000 0000 0000 0000 0000 1010  (which is 10 in decimal)
 console.log(~5); // -6

 //() Unary, Compound & Mixed Operators
 //? What will be the output?
 console.log('-----UCMO-----');
 let ab = 5;
 let ba = -ab;
 console.log(ba);

 let num2 = 5;
 num2 *= 2 + 3; // 5 = 5 * 2 + 3
 console.log(num2);

 console.log(+"Hello");
 console.log(+"100");

 function randomInteger(a, b){
   let minCeil = Math.ceil(a)
  let maxFloor = Math.floor(b)
  console.log(Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil))
 }

 randomInteger(50, 100)

 function withoutAbsolute(num) {
  console.log(num < 0 ? -num : num)
 }

 withoutAbsolute(-15)

 console.log(+30 -15)

 function floatingPoint(){
  console.log(Math.random().toFixed(4))
 }

 floatingPoint()

 //() Operator Precedence & Associativity
 let result = 10 + 5 * 2 - 3 / 3;
 console.log(result);

 console.log(10 + "5" - 2);

 let xay = 10;
 xay += (5, 3, 2);
 console.log(xay);
 //* The comma operator is used to evaluate multiple expressions, but only the last expression is returned. It does not store the intermediate values; instead, it just executes them and moves forward.

 //! JavaScript does not store intermediate results from the comma operator.
 (10, console.log("Hello"), console.log("World"));