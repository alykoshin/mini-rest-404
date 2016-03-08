[![npm version](https://badge.fury.io/js/mini-rest-404.svg)](http://badge.fury.io/js/mini-rest-404)
[![Build Status](https://travis-ci.org/alykoshin/mini-rest-404.svg)](https://travis-ci.org/alykoshin/mini-rest-404)
[![Coverage Status](https://coveralls.io/repos/alykoshin/mini-rest-404/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/mini-rest-404?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/mini-rest-404/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/mini-rest-404)
[![Inch CI](https://inch-ci.org/github/alykoshin/mini-rest-404.svg?branch=master)](https://inch-ci.org/github/alykoshin/mini-rest-404)

[![Dependency Status](https://david-dm.org/alykoshin/mini-rest-404/status.svg)](https://david-dm.org/alykoshin/mini-rest-404#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/mini-rest-404/dev-status.svg)](https://david-dm.org/alykoshin/mini-rest-404#info=devDependencies)


# mini-rest-404

404 Not Found Express error handler for mini-rest project
Forwards `new AppError('pageNotFound', req.originalUrl)` to `next` middleware (assuming the next middleware is Error Handler.

If you have different needs regarding the functionality, please add a [feature request](https://github.com/alykoshin/mini-rest-404/issues).


## Installation

```sh
npm install --save mini-rest-404
```

## Usage

This line must be last after all the routes and middlewares except errorHandler:

```
  app.use(require('mini-rest-404')());
  app.use(require('mini-rest-error-handler')());
```

## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/mini-rest-404) &nbsp; [npmjs.com](https://www.npmjs.com/package/mini-rest-404) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/mini-rest-404) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/mini-rest-404) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/mini-rest-404)


## License

MIT
