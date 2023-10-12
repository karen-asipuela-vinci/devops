import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    let main = new Main();
    //1 = éteint
    //0 = allumé
    
    it("function should return 1 when given 0 sec"), function() {
        let result = main.berlinClock(0);
        expect(result).toBe(1);
    };

    it("function should return ")


    /**it("fizzBuzz function should return 1 when given 1", function() {
        let result = main.fizzByzz(1);

        expect(result).toBe(1);
    });**/
    
});
