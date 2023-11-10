const Calculator = require('./calculator');

const calculator = new Calculator();

describe('divide function testing suit', function () {
   
    it('should get the number when positive numbers are passed', async() => {
        
        const result = await calculator.divide(33, 3)
        expect(result).toBe(11)
    })

    it('should get the number when one of the numbers is a negative number', async() => {
        
        const result = await calculator.divide(10, -5)
        expect(result).toBe(-2)
    })

    it('should get the number when fractional numbers are passed', async() => {
        
        const result = await calculator.divide(10.3, 5.6)
        expect(result).toBe(1.8392857142857146)
    })

    it('should get NaN when only one number is passed', async() => {
        
        const result = await calculator.divide(10)
        expect(result).toBe(NaN)
    })
    it('should get the number when one of the numbers is NaN', async() => {
        
        const result = await calculator.divide(10, '5')
        expect(result).toBe(2)
    })

    it('should get Infinity when one of the numbers is 0', async() => {
    
        const result = await calculator.divide(33, 0)
        expect(result).toBe(Infinity)
    })

})