export function isClose(a: Array<number>, b: Array<number>, rtol?: number, atol?: number, equalNaN?: boolean): Array<boolean>;
export function isClose(a: number, b: number, rtol?: number, atol?: number, equalNaN?: boolean): boolean;
/**
 * Check if a is approximately equal to b,
 * or for arrays,
 * if each element of a is approximately equal to each element of b.
 * @param {number|Array<number>} a First value(s) to compare
 * @param {number|Array<number>} b Second value(s) to compare
 * @param {number} rtol The relative tolerance parameter
 * @param {number} atol The absolute tolerance parameter
 * @param {boolean} equalNaN Whether to compare NaNs as equal.
 *                  If true, when a is NaN and b is NaN they will be considered equal.
 * @returns {boolean|Array<boolean>}
 *          For singletons:
 *          Returns true when both a and b are considered to be close,
 *          that is abs(a - b) <= max(rtol * max(abs(a), abs(b)), atol)
 *          For Arrays:
 *          Returns an array of booleans corresponding to the result of calling isClose() on the individual values.
 */
export function isClose(a: any, b: any, rtol = 1e-09, atol = 0.0, equalNaN = false): any {
    if (typeof a === 'number') {
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
    } else if (a instanceof Array) {
        const result = new Array(Math.max(a.length, b.length));
        const min = Math.min(a.length, b.length);
        for (let i = 0; i < min; i++) {
            result[i] = isClose(a[i], b[i], rtol, atol, equalNaN);
        }
        return result;
    }
    throw new TypeError('a and b must both be either numbers or arrays of numbers.');
}
