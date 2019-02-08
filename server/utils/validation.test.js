const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
   it('should reject non-string values', () => {
      var number = 8;
      expect(isRealString(number)).toBe(false);
   });

   it('should reject string with only spaces', () => {
      var spaces = '   ';
      expect(isRealString(spaces)).toBe(false);
   });

   it('should allow string with non-space characters', () => {
      var input = '  test  ';
      expect(isRealString(input)).toBe(true);
   });
});