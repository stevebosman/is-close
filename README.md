# is-close

> Check if two numbers are equal within a given tolerance

<a name="isClose"></a>
## isClose(a, b, rtol, atol, equalNan) ⇒ <code>boolean</code>
Check if a is approximately equal to b.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if both a and b are considered to be close,
                   that is absolute(a - b) <= (atol + rtol * absolute(b)).  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First value to compare |
| b | <code>number</code> | Second value to compare |
| rtol | <code>number</code> | The relative tolerance parameter |
| atol | <code>number</code> | The absolute tolerance parameter |
| equalNan | <code>boolean</code> | Whether to compare NaN’s as equal.                  If true, when a is NaN and b is NaN they will be considered equal. |

## Installation 
```sh
npm install is-close --save
```
## Usage
### Javascript
```javascript
var isClose = require('is-close');
console.log(isClose(1,1.0000001))
```

Output should be `true`

### TypeScript
```typescript
import { isClose } from 'is-close';
console.log(isClose(1,2))
```

Output should be `false`

## Test 
```sh
npm run test
```

## License

MIT © [Steve Bosman](http://github.com/stevebosman)
