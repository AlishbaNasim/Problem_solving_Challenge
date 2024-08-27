"use strict";
// ### Question 1: Implement a Stack using TypeScript
// *Problem Statement:*
// Implement a stack using TypeScript. The stack should have the following methods:
// 1. push(item: T): void - Adds an item to the top of the stack.
// 2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// *Constraints:*
// - Use generics to make the stack implementation type-safe.
// - The stack should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log(stack.peek()); // Output: 2
// console.log(stack.pop());  // Output: 2
// console.log(stack.pop());  // Output: 1
// console.log(stack.isEmpty()); // Output: true
class Stack {
    constructor() {
        this.item = [];
    }
    //Adds an item to the top of the stack.
    push(item) {
        this.item.push(item);
    }
    //Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
    pop() {
        return this.item.pop();
    }
    // Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
    peek() {
        return this.item[this.item.length - 1];
    }
    //Returns true if the stack is empty, otherwise false.
    isEmpty() {
        return this.item.length === 0;
    }
}
const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true
// ### Question 2:  Implement a queue using TypeScript.
// Implement a queue using TypeScript. The queue should have the following methods:
// 1. enqueue(item: T): void - Adds an item to the end of the queue.
// 2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// *Constraints:*
// - Use generics to make the queue implementation type-safe.
// - The queue should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const queue = new Queue<string>();
// queue.enqueue("a");
// queue.enqueue("b");
// console.log(queue.peek()); // Output: "a"
// console.log(queue.dequeue());  // Output: "a"
// console.log(queue.dequeue());  // Output: "b"
// console.log(queue.isEmpty()); // Output: true
class Queue {
    constructor() {
        this.items = [];
    }
    // Adds an item to the end of the queue
    enqueue(items) {
        this.items.push(items);
    }
    //Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
    dequeue() {
        return this.items.pop();
    }
    //Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
    peek() {
        return this.items[this.items.length - 1];
    }
    //Returns true if the queue is empty, otherwise false.
    isEmpty() {
        return this.items.length == 0;
    }
}
const queue = new Queue();
queue.enqueue("C");
queue.enqueue("D");
console.log(queue.peek()); // Output: "D"
console.log(queue.dequeue()); // Output: "D"
console.log(queue.dequeue()); // Output: "C"
console.log(queue.isEmpty()); // Output: true
