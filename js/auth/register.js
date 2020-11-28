$('#btnAgree').click( async function () {
  
   
  const credentials = { firstName, lastName, email, password, passwordConf, idNum, contactNo, address, gender, city, 
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


