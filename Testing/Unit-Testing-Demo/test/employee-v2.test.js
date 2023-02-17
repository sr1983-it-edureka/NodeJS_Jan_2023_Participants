const employee = require("../employee");

describe("Calculate Bonus", () => {

  it("Should return 25 for a 5 rating employee and projects count more than 10", () => {
    const john = {
      rating: 5,
      noOfProjects: 11
    }
  
    const result = employee.calculateBonus(john);
    expect(result).toBe(25);
  })


  it("Should return 21 for a 5 rating employee and projects count less than 10", () => {
    const john = {
      rating: 5,
      noOfProjects: 7
    }
  
    const result = employee.calculateBonus(john);
    expect(result).toBe(21);
  })  

  it("Should return 15 for a 3 * rating employee", () => {

    const john = {
      rating: 3
    }
  
    const result = employee.calculateBonus(john);
    expect(result).toBe(15);
      
  })
  
  
  it("Should return 5 for a 1 * rating employee", () => {
  
    const john = {
      rating: 1
    }
  
    const result = employee.calculateBonus(john);
    expect(result).toBe(5);
      
  })  
})


describe("GetProject", () => {

  it("Should return the project client as IBM", () => {

    const project = employee.getProject(1);

    // V1
    // expect(project).toBe({id: 1, projectName : 'Mobile Application Development', clientName : 'IBM'})

    // V2
    // expect(project).toEqual({id: 1, projectName : 'Mobile Application Development', clientName : 'IBM'})

    //  V3
    expect(project).toMatchObject({projectName : 'Mobile Application Development', clientName : 'IBM'})

    // V4

    expect(project).toHaveProperty("clientName", "IBM");
    expect(project).toHaveProperty("projectName", "Mobile Application Development");

  })

})

describe("Register Employee", () => {

  it("should throw exception for a undefined data type", () => {

    // null, undefined, NaN, false, 0, ''

    expect( () => {
      employee.registerEmployee(undefined)
    }).toThrow()

    expect( () => {
      employee.registerEmployee(undefined)
    }).toThrow()

  })

  // expect().toBeGreaterThan()
})






