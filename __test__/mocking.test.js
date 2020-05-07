class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        // API Aufruf Simulation
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.name), 1000);
        });
    }
}

describe('mocking sample', () => {
    it('mocks a reg function', () => {
        const sampleFunction = jest.fn();

        sampleFunction('params');
        expect(sampleFunction).toHaveBeenCalled();
        expect(sampleFunction).toHaveBeenCalledWith('params');
        
        sampleFunction('params');
        expect(sampleFunction).toHaveBeenCalledTimes(2);
    });

    it('can create a person', async () => {
        const name = "name";
        const p = new Person(name);

        expect(await p.getName()).toBe(name);
    });

    it('getName mocked function', async () => {
        const name = "name";
        const p = new Person(name);

        // Mocking the function: getName()
        p.getName = jest.fn().mockResolvedValue(name);

        expect(await p.getName()).toBe(name);
    });
});