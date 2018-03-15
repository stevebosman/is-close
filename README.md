# is-close

> Check if two numbers are equal within a given tolerance

## isClose(a, b, rtol, atol, equalNaN) ⇒ `boolean`
Check if `a` is approximately equal to `b`.

This check uses similar logic to [Python math.isClose](https://docs.python.org/3/library/math.html#math.isclose).
Values are considered to be close if:
                   
    abs(a - b) <= max(rtol * max(abs(a), abs(b)), atol).

                   
**Kind**: global function  
**Returns**: `boolean` - Returns true if both a and b are considered to be close.  

| Parameter | Type | Description |
| --------- | --- | --- |
| a         | `number` | First value to compare |
| b         | `number` | Second value to compare |
| rtol      | `number`&#124;`optional` | The relative tolerance parameter<br/>[default = 1e-09] |
| atol      | `number`&#124;`optional` | The absolute tolerance parameter<br/>[default = 0.0] |
| equalNaN  | `boolean`&#124;`optional` | Whether to compare NaN’s as equal.<br/>If true, when a is NaN and b is NaN they will be considered equal.<br/>[default = false] |

## Installation 
```sh
npm install is-close --save
```

## Example Usage
```javascript
var isClose = require("is-close");
console.log(isClose.isClose(1e10, 1.000000001));
console.log(isClose.isClose(1e10, 1.0000000001));
```

Output should be 
```
false
true
```

### TypeScript
```typescript
import { isClose } from 'is-close';
console.log(isClose(1.0, 1.000000001));
console.log(isClose(1.0, 1.0000000001));
```

Output should be 
```
false
true
```

## License

MIT © [Steve Bosman](http://github.com/stevebosman)
