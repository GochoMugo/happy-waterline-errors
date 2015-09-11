
# happy-waterline-errors

> i want to be happy handling waterline errors
>
> :construction: It is a bad idea to use this module! I made it to lessen my work! And it is *not* yet comprehensive! :construction:

[![node](https://img.shields.io/node/v/happy-waterline-errors.svg?style=flat-square)](https://www.npmjs.com/package/happy-waterline-errors) [![npm](https://img.shields.io/npm/v/happy-waterline-errors.svg?style=flat-square)](https://www.npmjs.com/package/happy-waterline-errors) [![Travis](https://img.shields.io/travis/GochoMugo/happy-waterline-errors.svg?style=flat-square)](https://travis-ci.org/GochoMugo/happy-waterline-errors) [![Gemnasium](https://img.shields.io/gemnasium/GochoMugo/happy-waterline-errors.svg?style=flat-square)](https://gemnasium.com/GochoMugo/happy-waterline-errors) [![Coveralls](https://img.shields.io/coveralls/GochoMugo/happy-waterline-errors.svg?style=flat-square)](https://coveralls.io/github/GochoMugo/happy-waterline-errors?branch=master) 


## usage:

```js
import happy from "happy-waterline-errors";

// formats errors from Waterline to make them more user-friendly
// you can even send it back to your users as response! I do that!
User
  .create({ firstName: "gocho" })
  .exec(function(error, user) {
    if (error) {
      return console.log("user-friendly error: %j", happy(error));
    }

    return console.log("user: %j", error);
  })
```


## API:

```js
import happy from "happy-waterline-errors";
```

### happy(error [, options])

Formats waterline `error`. You can provide `options`.

* `options` (Object):
  * `key` (Function): function may be used to format attribute keys


## errors:

### validation errors:

```js
{
  code: "err_validation",
  status: 422,
  message: "validation failed",
  description: [
    {
      email: [
        "email",
      ],
      lastName: [
        "required",
        "string",
      ],
    },
  ],
}
```


### unknown errors:

```js
{
  code: "err_unknown",
  status: 500,
  message: "unknown error",
}
```


## license:

__The MIT License (MIT)__

Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
