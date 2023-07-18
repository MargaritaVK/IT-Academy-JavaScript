const Calculator = require('./calculator');

const calculator = new Calculator();

describe('multiply function testing suit', function () {

   
    it('should get the number when positive numbers are passed', async() => {
        
        const result = await calculator.multiply(10, 5)
        expect(result).toBe(50)
    })

    it('should get the number when one negative number is passed', async() => {
        
        const result = await calculator.multiply(10, -5)
        expect(result).toBe(-50)
    })

    it('should get the number when fractional numbers are passed', async() => {
        
        const result = await calculator.multiply(10.3, 5.6)
        expect(result).toBe(57.68)
    })

    it('should get the number itself when only one number is passed', async() => {
        
        const result = await calculator.multiply(10)
        expect(result).toBe(10)
    })
    it('should get the number when one of the numbers is NaN', async() => {
        
        const result = await calculator.multiply(10, '5')
        expect(result).toBe(50)
    })
    it('should get the number when four numbers are passed', async() => {
    
        const result = await calculator.multiply(10, 5, 1, 6)
        expect(result).toBe(300)
    })

})