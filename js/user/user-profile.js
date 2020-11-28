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
    const response = api.putProfile(id);
    const { firstName, lastName, contactNumber, address, gender, email} = response.data;
   

    if(response.ok){
      
        console.log(push.data);
  
        $(firstName).val('#firstName');
        $('#lastName').val(lastName);
        $('#contactNo').val(contactNumber);
        $('#address').val(address);
        $('#gender').val(gender);
        
        //Make 2nd API Call for username and course
        // .value for inputs and .text for labels
        $('#course').text(course.code);
        $('#studentNumber').text(username);
        $('#currentEmail').val(email);
        console.log('PUT REQUEST ATTEMPTED!')
       
    }
    else{
        console.log('PUT Not working')
    }
});