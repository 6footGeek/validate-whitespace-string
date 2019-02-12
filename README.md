# @6footgeek/validate-whitespace-string 
A whitespace validator, whitespace is allowed, but the string cant consist only of whitespace characters.

## Installation
```bash
$ [sudo] npm install @6footgeek/validate-whitespace-string
```

## Usage
```js
import {validateWhitespaceString} from '@6footgeek/validate-whitespace-string';

validateWhitespaceString('test this string'); // true
validateWhitespaceString('     '); // false

validateWhitespaceString(123); // throws error
```

## License

[ISC](LICENSE)
