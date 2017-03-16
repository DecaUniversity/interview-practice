# Useful Javascript Built-in Functions

## [Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

The toFixed() method formats a number using fixed-point notation.

```js
numObj.toFixed([digits])
```

*[Caution](http://stackoverflow.com/questions/14059201/why-does-firebug-say-tofixed-is-not-a-function)*

toFixed isn't a method of non-numeric variable types. When you get the value of something in Javascript, it automatically is set to a string type. Using parseFloat() (or parseInt() with a radix, if it's an integer) will allow you to convert different variable types to numbers which will enable the toFixed() function to work.


