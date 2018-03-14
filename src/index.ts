/**
 * Check if a is approximately equal to b.
 * @param {number} a First value to compare
 * @param {number} b second value to compare
 * @param {number} rtol The relative tolerance parameter
 * @param {number} atol The absolute tolerance parameter
 * @param {boolean} equalNan Whether to compare NaN’s as equal.
 *                  If true, when a is NaN and b is NaN they will be considered equal.
 * @returns {boolean} Returns true if both a and b are considered to be close,
 * that is absolute(a - b) <= (atol + rtol * absolute(b)).
 */
export function isClose(a: number, b: number, rtol = 1e-05, atol = 1e-08, equalNan = false): boolean {
    return (
               equalNan && isNaN(a) && isNaN(b)
           )
           || (
               a === b
           )
           || (
               Math.abs(a - b) <= atol + rtol * Math.abs(b)
           );
}
