import assert from 'assert'
import {parseHtml as solution} from './solution.js'

describe.skip('HtmlParser', () => {
    it('Should solve casey\'s case', () => {
        const input = `<p><img src="https://i.imgur.com/LSG9xg3.jpeg" /></p>`
        const expected = [{ tag: 'p' }, { tag: 'img', attributes: [{'src': 'https://i.imgur.com/LSG9xg3.jpeg'}] }];
        const actual = solution(input);
        assert.deepEqual(actual, expected);
    });
    it('Should support empty attribute values', () => {
        const input = `
        <input required />`
        const expected = [{ tag: 'input', attributes: [{'required': null}]}];
        const actual = solution(input);
        assert.equal(actual, expected);
    });
    it('Should support html comments 😂', () => {
        const input = `<!--Just a comment, passing through--><input required />`
        const expected = [{ tag: 'input', attributes: [{'required': null}]}];
        const actual = solution(input);
        assert.equal(actual, expected);
    });
});