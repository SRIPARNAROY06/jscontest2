/* Create a stack using javascript array and implement the functions..
 push(),pop(),isEmpty(),top()…*/

 function Stack(){
    let items = [];
    let top = 0;
    this.push = function(element){
      items[top++] = element;
    }
    this.pop = function(){
        return items.pop();
    }
    this.peek = function(){
      return items[items.length-1];
    }
    this.isEmpty = function(){
      return top === 0;
    }  
    this.print=function(){
        console.log(items);
        return this.print;
    }   
  }
 let stack = new Stack();  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  console.log("THE STACK:");
  stack.print();
  console.log("IS THE STACK EMPTY?:");
  console.log(stack.isEmpty());
  console.log("POPPED ELEMENT:");
console.log(stack.pop());
console.log("AFTER POPPING, THE STACK BECOMES:");
 stack.print();
 console.log("TOP ELEMENT NOW:");
  console.log(stack.peek());