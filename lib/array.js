'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, arr, a, b )
*	Evaluates the cumulative distribution function (CDF) for a Uniform distribution with minimum support `a` and maximum support `b` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function cdf( y, x, a, b ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( a, b );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
