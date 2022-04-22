const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('object creation', () => {
        it('should create an employee object', () => {
            const employee = new Employee('Taimur', '4', 'taimurhasan11@gmail.com');

            expect(employee.name).toBe('Taimur');
            expect(employee.id).toBe('4');
            expect(employee.email).toBe('taimurhasan11@gmail.com');
        });
    })

    describe('get name', () => {
        it('should retrieve name of new employee', () => {
            const employee = new Employee('Taimur', '4', 'taimurhasan11@gmail.com');

            expect(employee.getName()).toBe('Taimur');
        });
    })

    describe('get id', () => {
        it('should retrieve id of new employee', () => {
            const employee = new Employee('Taimur', '4', 'taimurhasan11@gmail.com');

            expect(employee.getId()).toBe('4');
        });
    })

    describe('get email', () => {
        it('should retrieve email of new employee', () => {
            const employee = new Employee('Taimur', '4', 'taimurhasan11@gmail.com');

            expect(employee.getEmail()).toBe('taimurhasan11@gmail.com');
        });
    })

    describe('get role', () => {
        it('should retrieve role of new employee', () => {
            const employee = new Employee('Taimur', '4', 'taimurhasan11@gmail.com');

            expect(employee.getRole()).toBe('Employee');
        });
    })
});