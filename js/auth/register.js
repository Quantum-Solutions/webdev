$('#btnAgree').click( async function() {
  
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const passwordConf = $('#passwordConf').val();
  const idNum = $('#idNum').val();
  const contactNo = $('#contactNo').val();
  const address = $('#address').val();
  const gender = $('#gender').val();
  const city = $('#city').val();
  const province = $('#province').val();
  const zipCode = $('#zipCode').val();
  const country = $('#country').val();
  const highschool = $('#highschool').val();
  const engMark = $('#engMark').val();
  const fistLangMark = $('#fistLangMark').val();
  const mathMark = $('#mathMark').val();
  const scienceMark = $('#scienceMark').val();
  const extra1Mark = $('#extra1Mark').val();
  const extra2Mark = $('#extra2Mark').val();
  const course = $('#course').val();
	
  
  
  try {
    const response = await auth.register(credentials);
    console.log(response);

    const credentials = { firstName, lastName, email, password, passwordConf, idNum, contactNo, address, gender, city, 
      province, zipCode, country, highschool,engMark, fistLangMark, mathMark, scienceMark, extra1Mark, extra2Mark,
    course };

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


