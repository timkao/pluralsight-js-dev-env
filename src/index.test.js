import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!??");
      done(); // because jsdom is an asyncronous test, we have to use "done" to let mocha know when to do the test
      window.close(); // free the memory
    }); // use index.html to setup jsdom environment, making a virtual dom in the memory for testing and after the testing, free the memory
  })
})


