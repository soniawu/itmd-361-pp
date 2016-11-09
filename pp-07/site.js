/*
  1. Correct the variable scope so that the console.log call
  outputs the correct value for x (5).
*/

/* Make the old codes to self invoking function will
    block variables and functions being access via
    global objects. This solve problem 2.
*/
(function() {
  var x = 5;
  function double(num) {
    /*  add var in front of x to define it as local variable 
        to solve problem 1.
    */
    var x = num * 2;
    return x;
  }
  double(6);
  console.log('The value of x is:', x, 'It should be 5.');
})()



/*
  2. Rewrite the corrected JavaScript above as function that
  does not pollute the global namespace (e.g., neither its
  variables nor the double function can be accessed via the
  `window` global object, like `window.x`).
*/
