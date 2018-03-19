import {expect} from 'chai';
import 'mocha';
import {IsCloseScalers} from './index';

describe('maxAbsAOrB function test', () => {
    it('should return largest magnitude of a and b', () => {
        const result = IsCloseScalers.maxAbsAOrB(-2.0, 1);
        expect(result).to.equal(2.0);
    });
});
describe('maxAOrB function test', () => {
    it('should return largest value of a and b', () => {
        const result = IsCloseScalers.maxAOrB(-2.0, 1);
        expect(result).to.equal(1.0);
    });
});
describe('minAbsAOrB function test', () => {
    it('should return smallest magnitude of a and b', () => {
        const result = IsCloseScalers.minAbsAOrB(-1.0, -2);
        expect(result).to.equal(1);
    });
});
describe('minAOrB function test', () => {
    it('should return smallest value of a and b', () => {
        const result = IsCloseScalers.minAOrB(-1.0, -2);
        expect(result).to.equal(-2);
    });
});
describe('meanAbs function test', () => {
    it('should return mean of magnitudes of a and b', () => {
        const result = IsCloseScalers.meanAbs(-1.0, -2);
        expect(result).to.equal(1.5);
    });
});
describe('mean function test', () => {
    it('should return mean of a and b', () => {
        const result = IsCloseScalers.mean(-1.0, -2);
        expect(result).to.equal(-1.5);
    });
});
describe('absA function test', () => {
    it('should return absolute value of a', () => {
        const result = IsCloseScalers.absA(-1.0);
        expect(result).to.equal(1.0);
    });
});
describe('absB function test', () => {
    it('should return absolute value of b', () => {
        const result = IsCloseScalers.absB(-1.0, -2);
        expect(result).to.equal(2);
    });
});
