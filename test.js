'use strict';
var assert = require('assert');
var timeoutThunk = require('./');
var meow = 'bow';
it('should ', function () {
    var res = timeoutThunk(3000)(function(){meow = 'moew';});
	assert.strictEqual(res._idleTimeout, 3000);
});
