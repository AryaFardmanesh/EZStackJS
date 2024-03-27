class Stack {
    constructor() {
        let _stack = [ ];

        const privateMethod = {
            _size : 0,
            _isEmpty : function () {
                return (!this._size);
            },
        };

        this.push = function (item) {
            _stack[privateMethod._size++] = item;
        }

        this.peek = function () {
            return _stack[privateMethod._size - 1];
        }

        this.pop = function () {
            if (privateMethod._isEmpty())
                return undefined;
            privateMethod._size--;
            return _stack.pop();
        }

        this.size = function () {
            return privateMethod._size;
        }

        this.isEmpty = function () {
            return privateMethod._isEmpty();
        }

        this.toArray = function () {
            let arr = [];
            for (let i = _stack.length - 1; i >= 0; i--)
                arr[arr.length] = _stack[i];
            return arr;
        }

        this.toReverseArray = function () {
            let arr = [];
            for (let i = 0; i < _stack.length; i++)
                arr[arr.length] = _stack[i];
            return arr;
        }

        this.clear = function () {
            _stack = [ ];
            privateMethod._size = 0;
        }
    }
}

module.exports = { Stack } ;
