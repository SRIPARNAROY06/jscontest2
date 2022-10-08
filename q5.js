// Create a function that takes any number of inputs and returns the multiplication of them. 
function multiply(...args){
return args.reduce(function(prev,curr){
    return prev*curr;
})
} 
console.log(multiply(3,2,3));
console.log(multiply(3,2));
console.log(multiply(10,10,2,2));