const Calculator = require('./calculator');

const calculator = new Calculator();

describe('subtraction function testing suit', function(){

   
    it('should get the number when positive numbers are passed', async() => {
    
        const result = await calculator.subtraction(10, 5)
        expect(result).toBe(5)
    })

    it('should get the number when one of the numbers is a negative number',async() => {
    
        const result = await calculator.subtraction(10, -5)
        expect(result).toBe(15)
    })

    it('should get the number when fractional numbers are passed', async() => {
        
        const result = await calculator.subtraction(10.3, 5.6)
        expect(result).toBe(4.700000000000001)
    })

    it('should get NaN when only one number is passed', async() => {
        
        const result = await calculator.subtraction(10)
        expect(result).toBe(NaN)
    })

    it('should get the number when one of the numbers is NaN', async() => {
        
        const result = await calculator.subtraction(10, '5')
        expect(result).toBe(5)
    })

    it('should get the number when five numbers are passed', async() => {
    
        const result = await calculator.subtraction(10, 5, 1, 4, 6)
        expect(result).toBe(5)
    })

    })