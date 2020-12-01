$(document).ready(async function() {
  const lecturerId = UserAuthHelper.getUserId();

    try {
        const response = await api.getLecturerModules(lecturerId);

        console.log(response);

        if(response.ok){
          response.data.map(v =>
            $('#modules').append(`<option value="${v.id}">${v.name}</option>`)
          );

          $('#loadStatus').hide();
          $('#moduleContainer').show();
        } else {
          console.log('Not working')
        }

        $('#spinner').hide();
    } catch (error) {
        console.log(error);
    }
});

$('#createPostBtn').click(async function() {
  const name = $('#name').val();
  const body = $('#body').val();
  const moduleId = $('#modules').find(':selected').val();
	
  const post = { name, body, moduleId };

  try {
    const response = await api.postPosts(post);
    console.log(response);

      if (response.ok) {
        window.location.href = `posts.html?moduleId=${moduleId}`;
      } else {
        $('#message').text(response.message);
      }
  } catch (err) {
    console.log(err);
  }
});
