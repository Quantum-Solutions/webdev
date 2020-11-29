$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getUser(id);
       

        if(response.ok){
            
            const { firstName, lastName, contactNumber, address, gender, email, username , course} = response.data;
            console.log(response.data);
            console.log( $('#firstName'));
            $('#firstName').val(firstName);
            $('#lastName').val(lastName);
            $('#contactNo').val(contactNumber);
            $('#address').val(address);
            $('#gender').val(gender);
            
            //Make 2nd API Call for username and course
            // .value for inputs and .text for labels
            $('#course').text(course.code);
            $('#studentNumber').text(username);
            $('#currentEmail').val(email);

            $('#loadStatus').hide();
            $('.profSection').show();
        }
        else{
            console.log('Not working')
        }

        $('#spinner').hide();
    } catch (error) {
        console.log(error);
    }
});


//PUT Request
$('#btnUpdateDetails').click(function() {
    const id = UserAuthHelper.getUserId();
    
    const { firstName, lastName, contact_number, address, gender, email} = response.data;
   

    try{
      
        //console.log(push.data);
        
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const contact_number = $('#contactNo').val();
        const address = $('#address').val();
        const gender = $('#gender').val();

        const response = api.putProfile(id);
        console.log('PUT REQUEST ATTEMPTED!')
       
    }
    catch{
        console.log('PUT Not working')
    }


    const credentials = { firstName, lastName, email, password, passwordConf, id_number, contact_number, address, gender, city, 
        province, zipCode, country, highschool,engMark, fistLangMark, mathMark, scienceMark, extra1Mark, extra2Mark,
      course };
      
      try {
        const response = await auth.register(credentials);
        console.log(response);
    
       
    
          if (response.ok) {
    
            window.location.href = 'index.html';
            
          } 
          else {
    
            $('#message').text(response.message);
    
          }
          console.log(response);
    
      } catch (err) {
    
        console.log(err);
        $('#message').text('Invalid email/password');
        console.log('fail');
      }  
});