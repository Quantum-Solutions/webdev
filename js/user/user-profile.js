let user;

$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getUser(id);

        if(response.ok){
            user = response.data;

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
$('#btnUpdateDetails').click(async function() {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#currentEmail').val();
    const contactNumber = $('#contactNo').val();
    const address = $('#address').val();
    const gender = $('#gender').val();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.contactNumber = contactNumber;
    user.address = address;
    user.gender = gender;

    const userId = UserAuthHelper.getUserId();

    try{
      const response = await api.putProfile(userId, user);

      console.log(response);
    } catch{
        console.log('PUT Not working')
    } 
});
