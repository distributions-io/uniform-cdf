'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( a, b )
*	Partially applies minimum support `a` and maximum support `b` and returns a function for evaluating the cumulative distribution function (CDF) for a Uniform distribution.
*
* @param {Number} a - minimum support
* @param {Number} b - maximum support
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
		if ( x < a ) {
			return 0;
		}
		if ( x >= b ) {
			return 1;
		}
		return ( x - a ) / ( b - a );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
