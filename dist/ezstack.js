"use strict";function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Stack=_createClass((function Stack(){_classCallCheck(this,Stack);var _stack=[];var privateMethod={_size:0,_isEmpty:function _isEmpty(){return!this._size}};this.push=function(item){_stack[privateMethod._size++]=item};this.peek=function(){return _stack[privateMethod._size-1]};this.pop=function(){if(privateMethod._isEmpty())return undefined;privateMethod._size--;return _stack.pop()};this.size=function(){return privateMethod._size};this.isEmpty=function(){return privateMethod._isEmpty()};this.toArray=function(){var arr=[];for(var i=_stack.length-1;i>=0;i--)arr[arr.length]=_stack[i];return arr};this.toReverseArray=function(){var arr=[];for(var i=0;i<_stack.length;i++)arr[arr.length]=_stack[i];return arr}}));module.exports={Stack:Stack};