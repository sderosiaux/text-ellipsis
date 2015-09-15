import { expect } from 'chai';
import ellipsis from '../index.js';

describe('text-ellipsis', () => {
  it('should not shorten a short text', () => {
    expect(ellipsis('short text', 10)).to.be.equal('short text');
  });

  it('should shorten a long text', () => {
    expect(ellipsis('a long long text', 10)).to.not.be.equal('a long long text');
    expect(ellipsis('a very long text', 10)).to.be.equal('a very ...');
  });

  it('should shorten a long text from the end', () => {
    expect(ellipsis('a very long text', 10, { side: 'end' })).to.be.equal('a very ...');
  });

  it('should shorten a long text from the start', () => {
    expect(ellipsis('a very long text', 10, { side: 'start' })).to.be.equal('...ng text');
  });

  it('should work with a custom ellipsis', () => {
    expect(ellipsis('a very long text', 10, { ellipsis: ' END' })).to.be.equal('a very END');
  });

});
