import { expect } from 'chai';
import 'mocha';
import { isClose } from './index';

describe('isClose function test', () => {
    it('should return true for identical values', () => {
        let result = isClose(1.0, 1.0);
        expect(result).to.equal(true);
    });
    it('should return false for very different values', () => {
        let result = isClose(1.0, 2.0);
        expect(result).to.equal(false);
    });
    it('should return true for slightly different large values', () => {
        let result = isClose(1e10, 1.00001e10);
        expect(result).to.equal(true);
    });
    it('should return false for different small values', () => {
        let result = isClose(1e-7, 1e-8);
        expect(result).to.equal(false);
    });
    it('should return false for two NaNs', () => {
        let result = isClose(NaN, NaN);
        expect(result).to.equal(false);
    });
    it('should return true for two NaNs when equalNan is true', () => {
        let result = isClose(NaN, NaN, undefined, undefined, true);
        expect(result).to.equal(true);
    });
    it('should return true when absolute tolerance is met', () => {
        let result = isClose(100000, 100001,0,1);
        expect(result).to.equal(true);
    });
    it('should return false when absolute tolerance is breached', () => {
        let result = isClose(100000, 100001.00000001,0,1);
        expect(result).to.equal(false);
    });
    it('should return true when relative tolerance is met', () => {
        let result = isClose(1100, 1000,0.1,0);
        expect(result).to.equal(true);
    });
    it('should return false when relative tolerance is breached', () => {
        let result = isClose(1100.000001, 1000,0.1,0);
        expect(result).to.equal(false);
    });
});
