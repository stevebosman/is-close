# is-close

> Check if two numbers are equal within a tolerance

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

```sh
Output should be true
```

### TypeScript
```typescript
import { isClose } from 'is-close';
console.log(isClose(1,2))
```

```sh
Output should be false
```

## Test 
```sh
npm run test
```

## License

MIT © [Steve Bosman](http://github.com/stevebosman)
