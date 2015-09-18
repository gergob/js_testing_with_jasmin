### js_testing_with_jasmin
#### JavaScript Testing with Jasmin

##### Installation
1. npm install
1. node index.js

#### Sample result

```javascript
$ node index.js
Started
...FF.

Failures:
1) Tests for my math functions For Null array expect to throw error
  Message:
    Expected function to throw Error: Parameter [numbers] should NOT be NULL., b
ut it threw Error: Parameter [numbers] should be NULL..
  Stack:
    Error: Expected function to throw Error: Parameter [numbers] should NOT be N
ULL., but it threw Error: Parameter [numbers] should be NULL..
        at Object.<anonymous> (c:\Users\Gergo\projects\js_testing_with_jasmine\s
pec\mathFunctionsSpec.js:30:12)

2) Tests for my math functions For decimal numbers to have at least 2 precision
correct
  Message:
    Expected 4.2079 to be close to 4.108, 2.
  Stack:
    Error: Expected 4.2079 to be close to 4.108, 2.
        at Object.<anonymous> (c:\Users\Gergo\projects\js_testing_with_jasmine\s
pec\mathFunctionsSpec.js:35:45)

6 specs, 2 failures
Finished in 0.02 seconds
Failed
```
