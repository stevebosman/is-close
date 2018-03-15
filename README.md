# is-close

> Check if two numbers are equal within a given tolerance

<a name="isClose"></a>
## isClose(a, b, rtol, atol, equalNan) ⇒ <code>boolean</code>
Check if a is approximately equal to b.

This check uses similar logic to [NumPy.isClose](https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.isclose.html).

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if both a and b are considered to be close,
                   that is:
                   
    absolute(a - b) <= (atol + rtol * absolute(b)).  
                   

| Parameter | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First value to compare |
| b | <code>number</code> | Second value to compare |
| rtol | <code>number&#124;optional</code> | The relative tolerance parameter<br/>[default = 1e-05] |
| atol | <code>number&#124;optional</code> | The absolute tolerance parameter<br/>[default = 1e-08] |
| equalNaN | <code>boolean&#124;optional</code> | Whether to compare NaN’s as equal.<br/>If true, when a is NaN and b is NaN they will be considered equal.<br/>[default = false] |

## Installation 
```sh
npm install is-close --save
```

## Example Usage
### TypeScript
```typescript
import { isClose } from 'is-close';
console.log(isClose(1.0, 1.0001))
```

Output should be `false`

```typescript
import { isClose } from 'is-close';
console.log(isClose(1.0, 1.00001))
```

Output should be `true`

## License

MIT © [Steve Bosman](http://github.com/stevebosman)
