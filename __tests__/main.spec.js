describe('validateWhitespace', () => {
  const {validateWhitespaceString} = require('../src');

  describe('exports', () => {
    it('should expose a default function', () => {
      expect(typeof validateWhitespaceString).toBe('function');
    });
  });

  describe('when validateWhitespaceString is called with a string', () => {
    describe('only whitespace', () => {
      it('should return false', () => {
        expect(validateWhitespaceString(' ')).toBe(false);
      });
    });

    describe('whitespace - string - whitespace', () => {
      it('should return true', () => {
        expect(validateWhitespaceString('    test string    ')).toBe(true);
      });
    });
    describe('string - whitespace', () => {
      it('should return true', () => {
        expect(validateWhitespaceString('test string    ')).toBe(true);
      });
    });

    describe('whitespace - string', () => {
      it('should return true', () => {
        expect(validateWhitespaceString('    test string')).toBe(true);
      });
    });
  });

  describe('when validateWhitespaceString is called with an Integer', () => {
    describe('non string', () => {
      function passAnInt () {
        validateWhitespaceString(123);
      }
      it('should throw error', () => {
        expect(passAnInt).toThrowError('validateWhitespaceString requires a string');
      });
    });
  });

  describe('when validateWhitespaceString is called with an Boolean', () => {
    describe('non string', () => {
      function passABool () {
        validateWhitespaceString(true);
      }
      it('should throw error', () => {
        expect(passABool).toThrowError('validateWhitespaceString requires a string');
      });
    });
  });

  describe('when validateWhitespaceString is called with an Array', () => {
    describe('non string', () => {
      function passAnArray () {
        validateWhitespaceString(['hello this is a test', 123, false]);
      }
      it('should throw error', () => {
        expect(passAnArray).toThrowError('validateWhitespaceString requires a string');
      });
    });
  });
});