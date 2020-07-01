import { required, email, indonesianPhone } from './validate';

describe('required validation', () => {
    it('when no value, returns a validation error', () => {
      const value = null;
      const result = required(value);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  
    it('when empty value, returns a validation error', () => {
      const value = '';
      const result = required(value);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  
    it('when given value, returns undefined', () => {
      const value = 'value';
      const result = required(value);
      expect(result).toBeUndefined();
    });
});

describe('email validation', () => {
    it('when given non email value, returns a validation error', () => {
      const value = 'test@lup';
      const result = email(value);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  
    it('when given email value, returns undefined', () => {
      const value = 'test@lup.events';
      const result = email(value);
      expect(result).toBeUndefined();
    });
  
});

describe('indonesianPhone validation', () => {
    it('when given phone value, returns a validation error', () => {
      const value = 'test@lup';
      const result = indonesianPhone(value);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  
    it('when given phone value, returns undefined', () => {
      const value = '+62 361 456789';
      const result = indonesianPhone(value);
      expect(result).toBeUndefined();
    });
  
  });