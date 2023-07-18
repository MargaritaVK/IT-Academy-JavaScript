const Calculator = require('./calculator');

const calculator = new Calculator();

describe('add function testing suit', function () {

    it('should get the number when positive numbers are passed', async() => {

        const result = await calculator.add(25, 2);
        expect(result).toBe(27);
      });

    it('should get the number when negative numbers are passed', async() => {
        
        const result = await calculator.add(-27, -5);
        expect(result).toBe(-32);
    })

    it('should get the number when one of the numbers is a negative number', async() => {
        
        const result = await calculator.add(27, -5);
        expect(result).toBe(22);
    })

    it('should get the number when fractional numbers are passed', async() => {

        const result = await calculator.add(25.4, 3.5);
        expect(result).toBe(28.9);
    })

    it('should get 0 when no numbers are passed', async() => {

        const result = await calculator.add();
        expect(result).toBe(0);
    });

    it('should get the number itself when only one number is passed', async() => {

        const result = await calculator.add(5);
        expect(result).toBe(5);
    });

    it('should get the number when one of the numbers is 0', async() => {

        const result = await calculator.add(5, 0);
        expect(result).toBe(5);
    })

    it('should get the number when five numbers are passed', async() => {

        const result = await calculator.add(10, 17, 1, 9, 25);
        expect(result).toBe(62);
    })
})