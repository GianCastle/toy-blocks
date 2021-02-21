import {getCurrencyFormattedNumber, isInt, scrubFormatting, getFormattedNumber, padLeft} from './numberFormat';

describe('Number Formatter', () => {
  describe('getCurrencyFormattedNumber', () => {
    it('returns $5.50 when passed 5.5', () => {
      expect(getCurrencyFormattedNumber(5.5)).toEqual('$5.50');
    });
  });

  describe('isInt', () => {
    it('returns true when passed 0', () => {
      expect(isInt(0)).toEqual(true);
    });

    it('returns false when passed an empty string', () => {
      expect(isInt('')).toEqual(false);
    });

    it('returns true when passed int as a string', () => {
      expect(isInt('5')).toEqual(true);
    });
  });

  describe('scrubFormatting', () => {
    it('strips commas and decimals', () => {
      expect(scrubFormatting('1,234.56')).toEqual('123456');
    });
  });

  describe('getFormattedNumber', () => {
    it('returns 0 if passed 0', () => {
      expect(getFormattedNumber(0)).toEqual(0);
    });

    it('returns empty string if passed empty string', () => {
      expect(getFormattedNumber('')).toEqual('');
    });
  });

  describe('padLeft', () => {
    it('Returns 000 if passed 0', () => {
        expect(padLeft(0)).toEqual('000');
    });

    it('Returns 000 for non numeric data types', () => {
      const dataset = [null, undefined, '123123123'];
      const areZeroes = dataset.every(dt => padLeft(dt) === '000')

      expect(areZeroes).toEqual(true);
    });

    // it('Returns 00[number] when a decimal type its passed', () => {
    //   expect(padLeft(3.14)).toEqual('003');
    // });

    // it('Returns positive index number when a negative number its passed', () => {
    //     expect(padLeft(-4)).toEqual('004');
    // });

  })
});
