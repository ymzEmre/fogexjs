# fogex.js

Form Regex

## Installation

```
npm install fogexjs
```

## Usage

```
const fogex = require('fogexjs');
```

```
fogex.isEmail('test@test.com');  // true
fogex.isEmail('test@test');     // false
```

## Regex Patterns

| Tables           | Description                                                                |
| ---------------- | :------------------------------------------------------------------------- |
| isAscii          | Check if the string contains ASCII chars only.                             |
| isBoolean        | Check if a string is a boolean.                                            |
| isCamelCase      | Check if the string is a CamelCase.                                        |
| isEmail          | Check if the string is an email.                                           |
| isExtensionTxt   | Check if the file extension is an txt.                                     |
| isFloat          | Check if the string is a float.                                            |
| isHash           | Check if the string is a hash of type                                      |
| isHex            | check if the string is a hexadecimal color.                                |
| isHour12         | Check if the hour 12 format is an correct.                                 |
| isHour24         | Check if the hour 24 format is an correct.                                 |
| isHsl            | check if the string is an HSL (hue, saturation, lightness, optional alpha) |
| isIdentityNumber | check if the string is a valid identity code.                              |
| isImei           | check if check if the string is a valid IMEI number.                       |
| isInteger        | check if the string is an integer.                                         |
| isIp             | check if the string is an IP                                               |
| isISBN           | check if the string is an ISBN.                                            |
| isLowerCase      | Check if the string is a LowerCase.                                        |
| isMac            | check if the string is a MAC address.                                      |
| isMd5            | check if the string is a MD5 hash.                                         |
| isMongoId        | check if the string is a valid a MongoDB ObjectId.                         |
| isMonth          | check if the string is a month.                                            |
| isPascalCase     | Check if the string is a PascalCase.                                       |
| isPassword       | Check if a password is strong or not.                                      |
| isPhoneNumber    | check if the string is a mobile phone number.                              |
| isPlate          | check if string valid the of a country's license plate.                    |
| isPort           | check if the string is a valid port number.                                |
| isRgb            | check if the string is a rgb or rgba color.                                |
| isString         | check if string of a letter                                                |
| isUpperCase      | Check if the string is a UpperCase.                                        |
| isWhiteSpace     | Check if the string contains white space.                                  |

## Developers

|                                                           |                                                       |
| --------------------------------------------------------- | ----------------------------------------------------- |
| ![](https://avatars.githubusercontent.com/u/19785698?v=4) | Emre Yilmaz \| [@ymzEmre](https://github.com/ymzEmre) |
| ![](https://avatars.githubusercontent.com/u/39124676?v=4) | Ahmet Ozkan \| [@ahmet](https://github.com/ahmet021)  |

## Contribution

Fogex is under development, and is open to suggestions and contributions.

It is publicly open for any contribution. Bug fixes, new features and extra modules are welcome.

To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.

To report a bug: Please report it using GitHub Issues.

## MIT License

Copyright (c) 2022 Emre Yilmaz & Ahmet Ozkan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.