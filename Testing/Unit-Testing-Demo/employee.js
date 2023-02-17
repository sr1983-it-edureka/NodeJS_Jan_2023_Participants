
function calculateBonus(employee){

  let bonusPercentage = 1;
  
  if (employee.rating >= 4 ){

    if (employee.noOfProjects >= 10){
      bonusPercentage = 25;
    }else{
      bonusPercentage = 21;
    }

  }else if (employee.rating >=3 && employee.rating<4){
    bonusPercentage = 15;
  }else{
    bonusPercentage = 5;
  }
  return bonusPercentage;
}

function getProject(employee){

  return {
    id: 1,
    projectName: 'Mobile Application Development',
    clientName : 'IBM'
  }

}

function registerEmployee(employeeName){

  if (!employeeName){
    throw new Error("Incorrect data type");
  }

  // Proceed with employee registration
}

module.exports = {calculateBonus, getProject, registerEmployee}