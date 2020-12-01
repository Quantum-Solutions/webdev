$('#btnAgree').click( async function() {
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const passwordConf = $('#passwordConf').val();
  const idNumber = $('#id_number').val();
  const city = $('#city').val();
  const province = $('#province').val();
  const zipCode = $('#zipCode').val();
  const country = $('#country').val();
  const contactNumber = $('#contactNo').val();
  const address = $('#address').val();
  const gender = $('#gender').val();
  const highschool = $('#highschool').val();
  const engMark = $('#englishMark').val();
  const falMark = $('#firstAddLangMark').val();
  const mathMark = $('#mathMark').val();
  const scienceMark = $('#scienceMark').val();
  const extra1Mark = $('#extra1Mark').val();
  const extra2Mark = $('#extra2Mark').val();
  const course = $('#courseChosen').find(':selected').val();

  const body = {
    firstName,
    lastName,
    email,
    password,
    idNumber,
    contactNumber,
    address,
    gender,
    highschool,
    city,
    province,
    zipCode,
    country,
    courseId: course,
    highSchoolMarks: {
      english: engMark,
      firstAdditionalLanguage: falMark,
      maths: mathMark,
      science: scienceMark,
      extraOne: extra1Mark,
      extraTwo: extra2Mark,
    }
  };

  try {
    const response = await auth.register(body);

    console.log(response);

      if (response.ok) {
        SessionStorageHelper.storeJwtToken(response.data);

        window.location.href = 'index.html';
      } else {
        $('#message').text(response.message);
      }
  } catch (err) {
    console.log(err);
    $('#message').text('Something went wrong');
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
