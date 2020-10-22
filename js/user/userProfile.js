$(document).ready(function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await apiService.getUser(id);

        if(response.ok){
            
            const { firstName, lastName, contactNo, address, gender, city, province, zipCode, country, course, currentEmail } = response.data;

            $('#firstName').value(firstName);
            $('#lastName').value(lastName);
            $('#contactNo').value(contactNo);
            $('#address').value(address);
            $('#gender').value(gender);
            $('#city').value(city);
            $('#province').value(province);
            $('#zipCode').value(zipCode);
            $('#country').value(country);
            $('course').text(course);
            $('currentEmail').text(currentEmail);
        }

        $('#spinner').hide();
    } catch (error) {
        
    }
});