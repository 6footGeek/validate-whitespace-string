[![CircleCI](https://circleci.com/gh/6footGeek/validate-whitespace-string/tree/master.svg?style=svg)](https://circleci.com/gh/6footGeek/validate-whitespace-string/tree/master)![](https://img.shields.io/npm/v/@6footgeek/validate-whitespace-string.svg?style=flat)
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

[MIT](LICENSE)
