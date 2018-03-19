/**
 * Predefined relative difference/error scalers.
 */
export class IsCloseScalers {
    /**
     * Relative difference scaling: Max(|a|,|b|)
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static maxAbsAOrB(a: number, b: number): number {
        return Math.max(Math.abs(a), Math.abs(b));
    }

    /**
     * Relative difference scaling: Max(a,b)
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static maxAOrB(a: number, b: number): number {
        return Math.max(a, b);
    }

    /**
     * Relative difference scaling: Min(|a|,|b|)
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static minAbsAOrB(a: number, b: number): number {
        return Math.min(Math.abs(a), Math.abs(b));
    }

    /**
     * Relative difference scaling: Min(a,b)
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static minAOrB(a: number, b: number): number {
        return Math.min(a, b);
    }

    /**
     * Relative difference scaling: Mean: (|a|+|b|)/2, using Welford's method
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static meanAbs(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);
        return a + (b - a) / 2.0;
    }

    /**
     * Relative difference scaling: Mean: (a+b)/2, using Welford's method
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    public static mean(a: number, b: number): number {
        return a + (b - a) / 2.0;
    }

    /**
     * Relative error scaling: abs(a)
     * @param {number} a Treated as theoretical expected value for calculating relative error
     * @returns {number}
     */
    public static absA(a: number): number {
        return Math.abs(a);
    }

    /**
     * Relative error scaling: abs(b)
     * @param {number} a ignored
     * @param {number} b Treated as theoretical expected value for calculating relative error
     * @returns {number}
     */
    public static absB(a: number, b: number): number {
        return Math.abs(b);
    }
}
