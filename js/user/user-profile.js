$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getUser(id);

        if(response.ok){
            
            const { firstName, lastName, contactNumber, address, gender, email, username } = response.data;
            console.log(response.data);
            console.log( $('#firstName'));
            $('#firstName').val(firstName);
            $('#lastName').val(lastName);
            $('#contactNo').val(contactNumber);
            $('#address').val(address);
            $('#gender').val(gender);
            
            //Make 2nd API Call for username and course
            // .value for inputs and .text for labels
            $('course').text(course);
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