import isEmpty from '../isEmpty';

describe('isEmpty', () => {
  test('[value=[1,2,3,4]]', () => {
    const value = [1, 2, 3, 4];
    const answer = true;
    const result = isEmpty(value);
    expect(result).toBe(answer);
  });
  test('[value={one:1,two:2,three:3,four:4}', () => {
    const value = { one: 1, two: 2, three: 3, four: 4 };
    const answer = true;
    const result = isEmpty(value);
    expect(result).toBe(answer);
  });
  test('[value="Hello, world"]', () => {
    const value = 'Hello, world';
    const answer = true;
    const result = isEmpty(value);
    expect(result).toBe(answer);
  });
  test('[value=null]', ()=>{
    const value = null;
    expect(isEmpty(value)).toBeFalsy();
  })
  
});
