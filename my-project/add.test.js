const { add } = require("./add");
describe('add function', function(){

    test('add should return sum', function (){
    let sum = add(2,3);
    expect(sum).toEqual(5);
    });

})