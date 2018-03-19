import {IsCloseScaler} from './isclose.scaler';
import {IsCloseScalers} from './isclose.scalers';

export function isClose(a: Array<number>, b: Array<number>, rtol?: number, atol?: number,
                        equalNaN?: boolean, rtolScaler?: IsCloseScaler): Array<boolean>;
export function isClose(a: number, b: number, rtol?: number, atol?: number,
                        equalNaN?: boolean, rtolScaler?: IsCloseScaler): boolean;
/**
 * Check if a is approximately equal to b,
 * or for arrays,
 * if each element of a is approximately equal to each element of b.
 * @param {number|Array<number>} a First value(s) to compare.
 * @param {number|Array<number>} b Second value(s) to compare.
 * @param {number} rtol The relative tolerance parameter, default = 1e-09.
 * @param {number} atol The absolute tolerance parameter, default = 0.0.
 * @param {boolean} equalNaN Whether to compare NaNs as equal, default = false.
 *                  If true, when a is NaN and b is NaN they will be considered equal.
 * @param {IsCloseScaler} rtolScaler
 *                        Determine how the relative difference will be scaled using a function rtolScaler(a,b).
 * @returns {boolean|Array<boolean>}
 *          For singletons:
 *          Returns true when both a and b are considered to be close,
 *          that is:
 *            abs(a - b) <= max(rtol * rtolScaler(a,b), atol)
 *          For Arrays:
 *          Returns an array of booleans corresponding to the result of calling isClose() on the individual values.
 */
export function isClose(a: any, b: any, rtol = 1e-09, atol = 0.0,
                        equalNaN = false, rtolScaler: IsCloseScaler = IsCloseScalers.maxAbsAOrB): any {
    if (typeof a === 'number') {
        let result = false;
        if (equalNaN && isNaN(a) && isNaN(b)) {
            // NaNs can, optionally, be close to other NaNs
            result = true;
        } else if (a === b) {
            // Same values are always close
            result = true;
        } else if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
            // Infinities are never close to other values except themselves
            result = false;
        } else {
            const adiff = Math.abs(a - b);
            if (atol >= adiff) {
                result = true;
            } else {
                const rdiff = adiff / rtolScaler(a, b);
                if (rtol >= rdiff) {
                    result = true;
                }
            }
        }

        return result;
    } else if (a instanceof Array) {
        const result = new Array(Math.max(a.length, b.length));
        const min = Math.min(a.length, b.length);
        for (let i = 0; i < min; i++) {
            result[i] = isClose(a[i], b[i], rtol, atol, equalNaN, rtolScaler);
        }
        return result;
    }
    throw new TypeError('a and b must both be either numbers or arrays of numbers.');
}
