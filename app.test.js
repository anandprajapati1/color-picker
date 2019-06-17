/* eslint-disable no-magic-numbers */
const Cover = require('./sampleCoverage');

test('test1', () => {
    var cover = new Cover();
    
    expect(cover.b).toBe(12);
})
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
})