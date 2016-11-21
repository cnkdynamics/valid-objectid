# valid-objectid

Test validity of mongoose ObjectId as string.

Moongoose uses type casting to handle MongDBs ObjectId as a string literal.  The `isValid` function returns `true` if valid. Else, returns `false`. The `isValid` function requires `string` parameter.  


## Installation

```
npm install valid-objectid
```


## Usage

Below is a sample usage in <a href='http://expressjs.com'>Express</a>.
```
var Id = require('valid-objectid');

...
router.get('/user/:id', function (req, res, next) {
    
    var id = req.params.id;

    if (!Id.isValid(id)) {
        res.status(422);
        return next(new Error('Invalid ID'));
    }    
});
```


## API

`isValid(str)` 

Returns `true` if `str` is a valid string representation of ObjectId . Otherwise, returns `false`.


## Test

```
cd valid-objectid
npm test
```

## License

Copyright (c) [2016 CNK Business Dynamics Co.](www.cnkdynamics.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
