const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('engineer github', () => {
        it('should return engineers github', () => {
            const engineer = new Engineer('Hasan', 4, 'taimurhasan11@gmail.com', 'TaimurHasan');

            expect(engineer.github).toBe('TaimurHasan');
        })
    })

    describe('engineer get github', () => {
        it('should return engineers github when called', () => {
            const engineer = new Engineer('Hasan', 4, 'taimurhasan11@gmail.com', 'TaimurHasan');

            expect(engineer.getGithub()).toBe('TaimurHasan');
        })
    })

    describe('engineer get role', () => {
        it('should return engineers role', () => {
            const engineer = new Engineer('Hasan', 4, 'taimurhasan11@gmail.com', 'TaimurHasan');

            expect(engineer.getRole()).toBe('Engineer');
        })
    })
})