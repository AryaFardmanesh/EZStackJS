const { Stack } = require('../src/ezstack.dev');

let stack;
beforeEach(() => {
    stack = new Stack();
});


describe(`Test .push method - Group`, () => {
    it(`It should push the data onto the stack correctly - Unit 1`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        let actual = stack.toArray();
        let expected = ['item 3', 'item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should push the data onto the stack correctly - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.toArray();
        let expected = ['item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should push the data onto the stack correctly - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        let actual = stack.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });

    it(`It should push the data onto the stack correctly - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.size();
        let expected = 2;

        expect(actual).toEqual(expected);
    });

    it(`It should push the data onto the stack correctly - Unit 5`, () => {
        stack.push('item 1');

        let actual = stack.size();
        let expected = 1;

        expect(actual).toEqual(expected);
    });
});

describe(`Test .peek method - Group`, () => {
    it(`It should peek the latest data - Unit 1`, () => {
        stack.push('item 1');

        let actual = stack.peek();
        let expected = 'item 1';

        expect(actual).toEqual(expected);
    });

    it(`It should peek the latest data - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.peek();
        let expected = 'item 2';

        expect(actual).toEqual(expected);
    });

    it(`It should peek the latest data - Unit 3`, () => {
        let actual = stack.peek();
        let expected = undefined;

        expect(actual).toEqual(expected);
    });

    it(`It should peek the latest data - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');

        stack.peek();

        let actual = stack.toArray();
        let expected = ['item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should peek the latest data - Unit 5`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.peek();

        let actual = stack.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });
});

describe(`Test .pop method - Group`, () => {
    it(`It should pop the latest data - Unit 1`, () => {
        stack.push('item');

        let actual = stack.pop();
        let expected = 'item';

        expect(actual).toEqual(expected);
    });

    it(`It should pop the latest data - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        let actual = stack.pop();
        let expected = 'item 3';

        expect(actual).toEqual(expected);
    });

    it(`It should pop the latest data - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();

        let actual = stack.toArray();
        let expected = ['item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should pop the latest data - Unit 4`, () => {
        let actual = stack.pop();
        let expected = undefined;

        expect(actual).toEqual(expected);
    });

    it(`It should pop the latest data - Unit 5`, () => {
        stack.pop();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });
});

describe(`Test .size method - Group`, () => {
    it(`It should give the size of stack correctly - Unit 1`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        let actual = stack.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });

    it(`It should give the size of stack correctly - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();

        let actual = stack.size();
        let expected = 2;

        expect(actual).toEqual(expected);
    });

    it(`It should give the size of stack correctly - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();
        stack.pop();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it(`It should give the size of stack correctly - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it(`It should give the size of stack correctly - Unit 5`, () => {
        stack.pop();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });
});

describe(`Test .isEmpty method - Group`, () => {
    it(`It should return the stack is empty or not - Unit 1`, () => {
        let actual = stack.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it(`It should return the stack is empty or not - Unit 2`, () => {
        stack.push('item');

        let actual = stack.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it(`It should return the stack is empty or not - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it(`It should return the stack is empty or not - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');

        stack.pop();

        let actual = stack.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it(`It should return the stack is empty or not - Unit 5`, () => {
        stack.push('item 1');
        stack.push('item 2');

        stack.pop();
        stack.pop();

        let actual = stack.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it(`It should return the stack is empty or not - Unit 6`, () => {
        stack.pop();

        let actual = stack.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });
});

describe(`Test .toArray method - Group`, () => {
    it(`It should return the data in the stack as an array - Unit 1`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.toArray();
        let expected = ['item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as an array - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();

        let actual = stack.toArray();
        let expected = ['item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as an array - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();

        let actual = stack.toArray();
        let expected = ['item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as an array - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();
        stack.pop();

        let actual = stack.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as an array - Unit 5`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        let actual = stack.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });
});

describe(`Test .toReverseArray method - Group`, () => {
    it(`It should return the data in the stack as a reverse array - Unit 1`, () => {
        stack.push('item 1');
        stack.push('item 2');

        let actual = stack.toReverseArray();
        let expected = ['item 1', 'item 2'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as a reverse array - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();

        let actual = stack.toReverseArray();
        let expected = ['item 1', 'item 2'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as a reverse array - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();

        let actual = stack.toReverseArray();
        let expected = ['item 1'];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as a reverse array - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();
        stack.pop();
        stack.pop();

        let actual = stack.toReverseArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });

    it(`It should return the data in the stack as a reverse array - Unit 5`, () => {
        stack.pop();

        let actual = stack.toReverseArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });
});

describe(`Test .clear method - Group`, () => {
    it(`This should remove all data from the stack - Unit 1`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.clear();

        let actual = stack.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 2`, () => {
        stack.push('item 1');
        stack.push('item 2');
        stack.push('item 3');

        stack.pop();

        stack.clear();

        let actual = stack.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 3`, () => {
        stack.push('item 1');
        stack.push('item 2');

        stack.clear();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 4`, () => {
        stack.push('item 1');
        stack.push('item 2');

        stack.clear();

        let actual = stack.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 5`, () => {
        stack.clear();

        let actual = stack.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 6`, () => {
        stack.clear();

        let actual = stack.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it(`This should remove all data from the stack - Unit 7`, () => {
        stack.clear();

        let actual = stack.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });
});
