'use strict';

// check if the given id has a valid ObjectId form.
exports.isValid = function (id) {

	// check first if undefined
	if (!id) {
		return false;
	}

	// check if id is a valid string
	if (typeof id !== 'string') {
		id = id.toString();
	}

	// simply match the id from regular expression
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		return true;
	} else {
		return false;
	}
};