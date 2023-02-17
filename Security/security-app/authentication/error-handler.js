const errorResponse = (errorObj) => {

  const message = errorObj.message;

  if (!message || message == ""){

  }else{

    const code = errorObj.code;

    if (code == "11000" || code == 11000){

      // Unique constraint violation on username
      return {
        error: "Unique Constraint Violation on username - Duplicate username",
        details: message
      }
    }else{
      return {
        error: message
      }
  
    }
  }
}

module.exports =  {errorResponse};