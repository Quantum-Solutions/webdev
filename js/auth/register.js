// First Next Button Click
function nextPage1() {
  var x = document.getElementById("registerGrid-1");
  var y = document.getElementById("registerGrid-2");

  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
    y.style.display = "grid";
  }
}

// Second Next Button Click
function nextPage2() {
  var y = document.getElementById("registerGrid-2");
  var z = document.getElementById("registerGrid-3");
  if (y.style.display === "none") {
    y.style.display = "grid";
  } else {
    y.style.display = "none";
    z.style.display = "grid";
  }
}


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