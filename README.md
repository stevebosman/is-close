# is-close

> Check if either: 
> 1. two numbers are equal within a given tolerance
> 2. the values in two arrays of numbers are equal within a given tolerance

## isClose(a, b, rtol, atol, equalNaN) ⇒ `boolean`&#124;`Array<boolean>`
Check if `a` is approximately equal to `b`.

This check uses similar logic to [Python math.isClose](https://docs.python.org/3/library/math.html#math.isclose).
By default values are considered to be close if:
 
```                   
abs(a - b) <= max(rtol * max(abs(a), abs(b)), atol).
```
                   
**Kind**: global function  
**Returns**: `boolean` - Returns true if both `a` and `b` are considered to be close.  

| Parameter        | Type | Description |
| ---------------- | --- | --- |
| `a`              | `number` | First value to compare |
| `b`              | `number` | Second value to compare |
| `rtol`           | `number [optional]` | The relative tolerance parameter<br/>[default = 1e-09] |
| `atol`           | `number [optional]` | The absolute tolerance parameter<br/>[default = 0.0] |
| `equalNaN`       | `boolean [optional]` | Whether to compare NaNs as equal.<br/>If true, when `a` is NaN and `b` is NaN they will be considered equal.<br/>[default = false] |
| `isCloseScaler`  | `IsCloseScaler [optional]` | Method used to scale the absolute difference into a relative difference.<br/>[default = IsCloseScalers.maxAbsAOrB] |

### Overload
**Returns**: `Array<boolean>` - Returns an array of booleans corresponding to the result of calling isClose() on the individual values in the arrays `a` and `b`.  

| Parameter        | Type | Description |
| ---------------- | --- | --- |
| `a`              | `Array<number>` | First value to compare |
| `b`              | `Array<number>` | Second value to compare |
| `rtol`           | `number [optional]` | The relative tolerance parameter<br/>[default = 1e-09] |
| `atol`           | `number [optional]` | The absolute tolerance parameter<br/>[default = 0.0] |
| `equalNaN`       | `boolean [optional]` | Whether to compare NaNs as equal.<br/>[default = false] |
| `isCloseScaler`  | `IsCloseScaler [optional]` | Method used to scale the absolute difference into a relative difference.<br/>[default = IsCloseScalers.maxAbsAOrB] |

## Installation 
```sh
npm install is-close --save
```

## Example Usage
```javascript
var isClose = require("is-close");
console.log(isClose.isClose(1e-7, 1e-8));
console.log(isClose.isClose(1e10, 1.0000000001e10));
console.log(isClose.isClose([1e-7, 1e10], [1e-8, 1.0000000001e10]));
```

Output should be 
```
false
true
[false, true]
```

### TypeScript
```typescript
import { isClose } from 'is-close';
console.log(isClose(1.0, 1.000000001));
console.log(isClose(1.0, 1.0000000001));
console.log(isClose([1.0, 1.0], [1.000000001, 1.0000000001]));
```

Output should be 
```
false
true
[false, true]
```

## License

MIT © [Steve Bosman](http://github.com/stevebosman)
