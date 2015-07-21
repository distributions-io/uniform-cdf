'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( a, b )
*	Partially applies minimum value `a` and maximum value `b` and returns a function for evaluating the cumulative distribution function (CDF) for a Uniform distribution.
*
* @param {Number} a - minimum value
* @param {Number} b - maximum value
* @returns {Function} CDF
*/
function partial( a, b ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Uniform distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
