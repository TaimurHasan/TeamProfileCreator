const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('intern school', () => {
        it('should return interns school', () => {
            const intern = new Intern('Hasan', 4, 'taimurhasan11@gmail.com', 'WLU');

            expect(intern.school).toBe('WLU');
        })
    })
    describe('intern get school', () => {
        it('should return interns school get function', () => {
            const intern = new Intern('Hasan', 4, 'taimurhasan11@gmail.com', 'WLU');

            expect(intern.getSchool()).toBe('WLU');
        })
    })
    describe('intern get role', () => {
        it('should return interns role', () => {
            const intern = new Intern('Hasan', 4, 'taimurhasan11@gmail.com', 'WLU');

            expect(intern.getRole()).toBe('Intern');
        })
    })
});