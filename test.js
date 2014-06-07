'use strict';
var expect = require('expect.js');
var Id = require('./index');


/* global describe, it */
describe('valid-objectid', function () {

	it ('Check isValid function', function (done) {

		expect(Id.isValid('foo-object-id')).to.be(false);
		expect(Id.isValid('534b4dcaadc0c2136938de3a')).to.be(true);

		done();
	});
});