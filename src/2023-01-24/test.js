import assert from 'assert'
import { missingBits as solution } from './solution.js'

describe('missingBits', () => {
    it('Should solve case 1', () => {
        const input = [1,2,3,4,20,21,22,23]
        const expected = '[1,2,3,4,...,20,21,22,23]';
        const actual = solution(input);
        assert.deepEqual(actual, expected);
    });

    it('Should solve case 2', () => {
        const input = [1,2,3,5,6]
        const expected = '[1,2,3,4,5,6]';
        const actual = solution(input);
        assert.deepEqual(actual, expected);
    });

    it('Should solve case 3', () => {
        const input = [1,3,20,27]
        const expected = '[1,2,3,...,20,...,27]';
        const actual = solution(input);
        assert.deepEqual(actual, expected);
    });
});