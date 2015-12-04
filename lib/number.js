'use strict';

// FUNCTIONS //


// CDF //

/**
* FUNCTION: cdf( x, a, b )
*	Evaluates the cumulative distribution function (CDF) for a Uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @returns {Number} evaluated CDF
*/
function cdf( x, a, b ) {
	if ( x < a ) {
		return 0;
	}
	if ( x >= b ) {
		return 1;
	}
	return ( x - a ) / ( b - a );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
