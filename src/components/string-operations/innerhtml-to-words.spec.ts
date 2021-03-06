import { expect } from 'chai';
import textToWords from './innerhtml-to-words';

describe('innerHTMLToWords', () => {
    it('splits correctly', () => {
        const htmlElement = document.createElement('div');
        htmlElement.innerText = "hello world";

        const splitted = textToWords(htmlElement);

        expect(splitted[0]).to.equal('hello');
        expect(splitted[1]).to.equal('world');
    });

    it('outputs an array with one index for each word', () => {
        const htmlElement = document.createElement('div');
        htmlElement.innerText = "hello world";

        const splitted = textToWords(htmlElement);

        expect(splitted.length).to.equal(2);
    });
});