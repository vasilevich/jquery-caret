# jQuery Caret

## Browser Support

jQuery caret is tested on the same browsers a jQuery Core 3.x ,jQuery Core 2.x,jQuery Core 1.x  versions. [Check it](http://swarm.jquery.org/project/jquerycolor)

## jQuery Caret Usage
```javascript
//move the caret to index 5 for example in the string: abcde<caret here>fg
$(selectInputElement).caretTo(5);
//move the caret to index 0 for example in the string: <caret here>abcdefg
$(selectInputElement).caretToStart();
//returns the current position of the caret eg: 5
$(selectInputElement).getCursorPosition();
```
