import {expect} from 'chai';
import 'mocha';
import {isClose} from './index';

describe('isClose function test', () => {
    it('should return true for identical values', () => {
        const result = isClose(1.0, 1.0);
        expect(result).to.equal(true);
    });
    it('should return true for slightly different values', () => {
        const result = isClose(1.0, 1.0000000001);
        expect(result).to.equal(true);
    });
    it('should return false for sufficiently different values', () => {
        const result = isClose(1.0, 1.000000001);
        expect(result).to.equal(false);
    });
    it('should return true for slightly different large values', () => {
        const result = isClose(1e10, 1.0000000001e10);
        expect(result).to.equal(true);
    });
    it('should return false for different small values', () => {
        const result = isClose(1e-7, 1e-8);
        expect(result).to.equal(false);
    });
    it('should return false for two NaNs', () => {
        const result = isClose(NaN, NaN);
        expect(result).to.equal(false);
    });
    it('should return true for two NaNs when equalNaN is true', () => {
        const result = isClose(NaN, NaN, undefined, undefined, true);
        expect(result).to.equal(true);
    });
    it('should return true when absolute tolerance is met', () => {
        const result = isClose(100000, 100001, 0, 1);
        expect(result).to.equal(true);
    });
    it('should return false when absolute tolerance is breached', () => {
        const result = isClose(100000, 100001.00000001, 0, 1);
        expect(result).to.equal(false);
    });
    it('should return true when relative tolerance is met', () => {
        const result = isClose(1111.1111111111111, 1000, 0.1, 0);
        expect(result).to.equal(true);
    });
    it('should return false when relative tolerance is breached', () => {
        const result = isClose(1111.1111111111112, 1000, 0.1, 0);
        expect(result).to.equal(false);
    });
});
