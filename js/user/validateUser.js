
function validateLect() {
    const userType = UserAuthHelper.getUserType();
    if(userType != "lecturer"){
  
      window.location.href = 'index.html';
  
    }
    else{
      console.log("Authorized Lecturer.")
    }
  }

  function validateStud() {
    const userType = UserAuthHelper.getUserType();
    if(userType != "student"){
  
      window.location.href = 'index.html';
  
    }
    else{
      console.log("Authorized Student.")
    }
  }

  function validateAdmin() {
    const userType = UserAuthHelper.getUserType();
    if(userType != "admin"){
  
      window.location.href = 'index.html';
  
    }
    else{
      console.log("Authorized Admin.")
    }
  }