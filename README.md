[![Build Status](http://jenkins.jquery.com/job/jQuery%20Color/badge/icon)](http://jenkins.jquery.com/job/jQuery%20Color/)

# jQuery Caret

## Browser Support

jQuery caret is tested on the same browsers a jQuery Core 3.x ,jQuery Core 2.x,jQuery Core 1.x  versions. [Check it](http://swarm.jquery.org/project/jquerycolor)

## jQuery Caret Usage
```javascript
// method taken from https://gist.github.com/960189
jQuery.Color.fn.contrastColor = function() {
	var r = this._rgba[0], g = this._rgba[1], b = this._rgba[2];
	return (((r*299)+(g*587)+(b*144))/1000) >= 131.5 ? "black" : "white";
};

// usage examples:
jQuery.Color("#bada55").contrastColor(); // "black"
element.css( "color", jQuery.Color( element, "backgroundColor" ).contrastColor() );
```