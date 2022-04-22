const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('manager object', ()=> {
        it('should return a managers office number', () => {
            const manager = new Manager('Taimur', 4, 'taimurhasan11@gmail', 10);

            expect(manager.officeNumber).toBe(10);
        })
    })

    describe('manager get role', ()=> {
        it('should return a managers role', () => {
            const manager = new Manager('Taimur', 4, 'taimurhasan11@gmail', 10);

            expect(manager.getRole()).toBe('Manager');
        })
    })

})