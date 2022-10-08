// Sort the array of objects
// [{name:"Srijan",roll:34},{name:"Sagnik", roll:33},{name:"Subhradeep",roll:35}]
// The final array will look like this
// [{name:"Subhradeep",roll:35},{name:"Srijan",roll:34},{name:"Sagnik", roll:33}]…
const obj =[{name:"Srijan",roll:34},{name:"Sagnik", roll:33},{name:"Subhradeep",roll:35}];
obj.sort((a,b)=>b.roll-a.roll);
console.log(obj);