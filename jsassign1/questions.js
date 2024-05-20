// // Q.1 output
function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
console.log(typeof foo());    // string
alert( typeof foo() );


// Q.2 output
function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() );   //Function


//  Q.3 output
var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );   //1