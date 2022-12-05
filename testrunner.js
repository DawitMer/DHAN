assert = chai.assert;

//test cases
 
describe("Testing function search() in DiseasePage.js", function () {
    

    it("Test 1: disease name for inventory[0] is covid", function () {
        var result = inventory[0]["name"];
        assert.equal(result, "covid");
    });

    it("Test 2: Influenza is one of the included diseases", function() {
        var result = inventory[6]["name"];
        assert.exists(result, "the returned value is not null or undefined");
    }); 

    it("Test 3: disease searched is not included", function() {
        if (event.key === 'Enter' && i==inventory.length-1) {
            var result = paragraph.innerHTML;
        }
        assert.equal(result, "Nothing Matchs Your Search Sorry");
    });
})


