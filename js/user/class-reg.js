let moduleId;
let classRegister;

const getLecturerModules = async () => {
  try {
    const response = await api.getLecturerModules(UserAuthHelper.getUserId());

    console.log(response);

    if (response.ok) {
      for (const module of response.data) {
        const { id, name } = module;

        $('#modules').append(`<option value="${id}">${name}</select>`);
      }

      $('#content').show()
      $('#loadStatus').hide();
    }
  } catch (err) {
    console.log(err);
  }
}

const displayRegister = async () => {
  try {
    const response = await api.getClassRegister(moduleId);

    console.log(response);
    
    if(response.ok){
        classRegister = response.data;

        const table = `
        <table border="1">
          <thead>
            <th>Student Number</th>
            <th>Name</th>
            <th>Attended</th>
          </thead>
          <tbody>
            ${response.data.map(v => {
              console.log(v.attended, typeof v.attended);

              return `
                <tr>
                  <td>${v.student.username}</td>
                  <td>${v.student.firstName} ${v.student.lastName}</td>
                  <td><input type="checkbox" ${v.attended && 'checked'}"></td>
                </tr>
              `;
            })}
          </tbody>
        </table>

        <br />
        <button id="updateRegister">Update</button>
      `;
      
      const div = $('#classReg');
      div.append(table);

      $('#loadStatus').hide();
      $('#classReg').show();
    }
    else{
        console.log('Not working')
    }

      $('#spinner').hide();
  } catch (error) {
      console.log(error);
  }

  $('#loadStatus').hide();
}

getLecturerModules();

$('#viewRegister').click(async function() {
  moduleId = $('#modules').find(':selected').val();

  console.log(moduleId);

  $(this).prop('disabled', true);

  $('#loadStatus').show();
  displayRegister();
});

$(document).on('click', '#updateRegister', async function() {
  $(this).prop('disabled', true);

  $('#loadStatus').show();
  
  $('tr').each((i, el) => {
    if (i !== 0) {
      const checked = $(el).find('input[type="checkbox"]').prop('checked');

      console.log(i, checked);

      classRegister[i-1].attended = checked;

      delete classRegister[i-1].student;
    }
  });

  try {
    const response = await api.updateClassRegister(moduleId, classRegister);

    if (response.ok) alert('Class register updated');
  } catch (err) {
    console.log(err)
  }

  console.log(JSON.stringify(classRegister));

  $('#loadStatus').hide();
  $(this).prop('disabled', false);
});
