/**
 * Check if a is approximately equal to b.
 * @param {number} a First value to compare
 * @param {number} b Second value to compare
 * @param {number} rtol The relative tolerance parameter
 * @param {number} atol The absolute tolerance parameter
 * @param {boolean} equalNaN Whether to compare NaN’s as equal.
 *                  If true, when a is NaN and b is NaN they will be considered equal.
 * @returns {boolean} Returns true if both a and b are considered to be close,
 *                    that is abs(a - b) <= max(rtol * max(abs(a), abs(b)), atol)
 */
export function isClose(a: number, b: number, rtol = 1e-09, atol = 0.0, equalNaN = false): boolean {
    return (
            equalNaN && isNaN(a) && isNaN(b)
        )
        || (
            a === b
        )
        || (
            a !== Infinity
            && a !== -Infinity
            && b !== Infinity
            && b !== -Infinity
            && Math.abs(a - b) <= Math.max(rtol * Math.max(Math.abs(a), Math.abs(b)), atol)
        );
}
