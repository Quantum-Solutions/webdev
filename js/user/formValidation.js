function vaildateRegister1() {
    
const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const id_number = document.getElementById("id_number");
const contactNo = document.getElementById("contactNo");
const address = document.getElementById("address");
const gender = document.getElementById("gender");
const city = document.getElementById("city");
const province = document.getElementById("province");
const zipCode = document.getElementById("zipCode");
const country = document.getElementById("country");
const highschool = document.getElementById("highschool");




  
    // if (name==" " || lastName==" " || email ==" ") {
    //     regError = "Complete all Fields!";
    // } else {
    //     console.log("All Fulled Out!");
    //     nextPage1()


    // }
    console.log(password.value);

    if (name.value.length == 0 || lastName.value.length == 0 || email.value.length == 0 || id_number.value.length == 0 || contactNo.value.length == 0
        || address.value.length == 0 || gender.value.length == 0 || city.value.length == 0 || province.value.length == 0 || zipCode.value.length == 0 || country.value.length == 0
        || highschool.value.length == 0 )
      { 
         alert("Can't submit an empty Field!");  	
          
      } 
      else if(password.value.length <= 5 || passwordConfirm.value.length <= 5 || password.value != passwordConfirm.value){
        alert("Passwords must be minimum 5 characters and must match!");  
      }
      
      else {

        nextPage1()
      }
  }

  function vaildateRegister2() {
    
    const englishMark = document.getElementById("englishMark");
    const firstAddLangMark = document.getElementById("firstAddLangMark");
    const mathMark = document.getElementById("mathMark");
    const scienceMark = document.getElementById("scienceMark");
    const extra1Mark = document.getElementById("extra1Mark");
    const extra2Mark = document.getElementById("extra2Mark");
    
    
    
        
        console.log(password.value);
    
        if (englishMark.value.length == 0 || firstAddLangMark.value.length == 0 || mathMark.value.length == 0 || scienceMark.value.length == 0 || extra1Mark.value.length == 0
            || extra2Mark.value.length == 0)
          { 
             alert("Can't submit an empty Field!");  	
              
          } 
          
          else {
    
            nextPage2()
          }
      }


      function profileValidate() {
    
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const contactNo = document.getElementById("contactNo");
        const address = document.getElementById("address");
        const gender = document.getElementById("gender");
        const currentEmail = document.getElementById("currentEmail");
        
        
        
            
            
        
            if (firstName.value.length == 0 || lastName.value.length == 0 || contactNo.value.length == 0 || address.value.length == 0 || gender.value.length == 0
                || currentEmail.value.length == 0)
              { 
                 alert("Can't submit an empty Field!");  	
                  
              } 
              
          }

  