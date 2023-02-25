
const chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;


describe("Chai.Assert", () => {

  before( (done) => {
    console.log("BEFORE CALLED - ONCE");
    done();
  })


  beforeEach( (done) => {

    console.log("BEFORE EACH CALLED -> ");
    done();
  })

  it("Demo for assert.equal", () => {

      // Logic 
      // Function is invoked
      const color = "RED";


      assert.equal(color, "RED");
  })

  it("Demo for assert.length", () => {

    // Logic 
    // Function is invoked
    const favColors = ["RED", "BLUE", "GREEN"];


    assert.lengthOf(favColors, 3);
  })

  it("Demo for expect.equality", () => {

    // Logic 
    // Function is invoked
    const color = "RED";

    expect(color).to.be.equal("RED");

    const emp = {id: 1, name : 'ABC'};
    expect(emp).to.be.an('object');

  })

  afterEach( (done) => {

    console.log("AFTER EACh CALLED ");
    done();
  })

  after( (done) => {

    console.log("AFTER CALLED -> ONCE");
    done();
  })

})