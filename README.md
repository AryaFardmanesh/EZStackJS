# EZStackJS

EZStackJS is a lightweight and easy-to-use JavaScript library designed for working with stack data structures. With EZStackJS, you can effortlessly manage and manipulate stack in your JavaScript applications.

## License

EZStackJS is licensed under the [MIT License](LICENSE).

## Features

- **Simplicity**: EZStackJS provides a straightforward interface for creating, modifying, and traversing stack.
- **Lightweight**: With minimal dependencies and efficient implementation, EZStackJS offers high performance while keeping your project's footprint small.
- **Flexibility**: EZStackJS is highly adaptable and can be easily integrated into various JavaScript projects, from small scripts to large-scale applications.

Whether you're a beginner learning about data structures or an experienced developer needing a reliable tool for managing stack, EZStackJS is here to simplify your workflow and empower your projects.

## Installation

To start using EZStackJS in your project, simply install it via npm:

```bash
npm install ezstackjs
```

```js
// Import the Stack class from EZStackJS
const { Stack } = require('EZStackJS');

// Create a new stack
const stack = new Stack();
```

## Method Documentation

EZStackJS provides a variety of methods for creating, modifying, and interacting with stack. Below is an overview of the available methods along with their descriptions and usage examples:

### `.push(item)`

This method inserts the data into the stack

#### Parameters:

- `item`: The item you want to insert to the stack.

### `.peek()`

The method return the last data in the stack (does not remove it).

### Returns:
- `Any`
  - Your last item in the stack.

### `.pop()`

This method return the last data and remove it.

#### Returns:
- `Any`
  - Your last item in the stack.

### `.size()`

This method return the number of items in the stack.

#### Returns:
- `Number(int)`
    - The size of your stack.

### `.isEmpty()`

This method indicates whether the stack is empty or not.

#### Returns:

- `Boolean` 
  - `true`: Stack is empty.
  - `false`: Stack is not empty.

### `.toArray()`

This method pours all the data of the stack into an array and returns it.

#### Returns:

- `Array`.
    - An array of all elements in the stack.

### `.toReverseArray()`

This method puts all elements of the stack in reverse order in the array and returns it.

#### Returns:

- `Array`.
    - An array of all elements in the reverse array.

Explore the various methods to effectively manage and manipulate stack using EZStackJS in your JavaScript applications.


## Advanced Topic: Time Complexity Analysis

Understanding the time complexity of each method can help you optimize your code and make informed decisions when working with large datasets in EZStackJS.

Below is an analysis of the time complexity for each method in the EZStackJS library:

### Time Complexity `.push()`:
- O(1)

### Time Complexity `.peek()`:
- O(1)

### Time Complexity `.pop()`:
- O(1)

### Time Complexity `.size()`:
- O(1)

### Time Complexity `.isEmpty()`:
- O(1)

### Time Complexity `.toArray()`:
- O(n)

### Time Complexity `.toReverseArray()`:
- O(n)
