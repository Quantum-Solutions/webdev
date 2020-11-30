let api;
let auth;



// Navbar Variables
//const defNav = document.getElementById("navContainer");
const navS = document.getElementById("studentNav");
const navL = document.getElementById("lecturerNav");
const navA = document.getElementById("adminNav");

//Get user data variable
const userId = UserAuthHelper.getUserId();
const userType = UserAuthHelper.getUserType();

//Variable for testin
//userType = "student";

 if(document.getElementById("navContainer")){
   //alert('Welcome!')
   //Leave Blank
 }

 else{

    if(userId!=null){
        console.log(userId);
        console.log(userType);
        
        if(userType == "student"){
            console.log("This is a student");
            navS.style.display = "grid";
        }
        else if(userType == "lecturer"){
            console.log("This is a lecturer");
            navL.style.display = "grid";
        }
        else if(userType == "admin"){
            console.log("This is an admin");
            navA.style.display = "grid";
        }
    } else{
        userId = "kicked from page"
        // window.location.href = 'index.html';
        
    }
 }

 

//console.log(tokenStatus);
//UserAuthHelper.getUserId;
//Validate token
// if(UserAuthHelper.isUserAuthenticated ){
//     console.log("SUCCESS!");
//     console.log(UserAuthHelper.isUserAuthenticated);
// }
// else{
//     console.log("ERROR Validation");
// }

if (typeof ApiService !== 'undefined') api = ApiService.getInstance();
if (typeof AuthService !== 'undefined') auth = AuthService.getInstance();
// console.log(UserAuthHelper.getUserId());
