/*Create an array of cubes from an array of numbers using map function. And visualize like this
Index 0 -> 1
Index 1 -> 8
Index 2 ->27 where the provided array is [1,2,3]*/

let arr=[1,2,3];
arr.map((x,index)=>{
    console.log(`Index ${index} ->${x**3}`);
});
console.log();