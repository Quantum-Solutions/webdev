let api;
let auth;

// Should be false on login and reg page
//UserAuthHelper.isUserAuthenticated;

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




