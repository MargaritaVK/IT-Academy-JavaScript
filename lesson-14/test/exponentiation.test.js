const Calculator = require('./calculator');

const calculator = new Calculator();

describe('exponentiation function testing suit', function () {

  it('should get the number when positive numbers are passed', async() => {
      
      const result = await calculator.exponentiation(10)
      expect(result).toBe(100)
  })

  it('should get the number when negative numbers are passed', async() => {
      
      const result = await calculator.exponentiation(-5)
      expect(result).toBe(25)
  })

  it('should get the number when fractional numbers are passed', async() => {
      
      const result = await calculator.exponentiation(10.3)
      expect(result).toBe(106.09000000000002)
  })

  it('should get NaN when no numbers are passed', async() => {
  
      const result = await calculator.exponentiation()
      expect(result).toBe(NaN)
  })

  it('should get 0 when 0 is passed', async() => {
  
      const result = await calculator.exponentiation(0)
      expect(result).toBe(0)
  })

  })