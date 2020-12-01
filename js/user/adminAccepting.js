$(document).ready(async function() {
    try {
        const response = await api.getNotAccepted();

        console.log(response);

        if(response.ok){
            const table = `
            <table border="1">
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>isAccepted</th>
                <th>Eng / FAL / Maths / Sciences / Extra 1 / Extra 2</th>
              </thead>
              <tbody>
                ${response.data.map((v, i) => {
                  const { id, firstName, lastName, email, highSchoolMarks } = v;

                  console.log('marks', highSchoolMarks);

                  return `
                    <tr data-id="${id}">
                      <td>${firstName} ${lastName}</td>
                      <td>${email}</td>
                      <td>
                        <a href="javascript:void(0)" onclick="acceptStudent('${id}', ${i}); this.innerText = 'Accepting...'">Accept</a>
                      </td>
                        <td>
                          ${highSchoolMarks[0].mark} / ${highSchoolMarks[1].mark} / ${highSchoolMarks[2].mark} / ${highSchoolMarks[3].mark} / ${highSchoolMarks[4].mark} / ${highSchoolMarks[5].mark}
                        </td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          `;
          
          const div = $('#userData');
          div.append(table);
          console.log(response);

          $('#loadStatus').hide();
          $('#container').show();
          
        }
        else{
            console.log('Not working')
        }

        $('#spinner').hide();
    } catch (error) {
        console.log(error);
    }
});

const acceptStudent = async (id, tableRowIndex) => {
  console.log('Accepted student', id, tableRowIndex);

  try {
    const response = await api.acceptStudent(id);

    if (response.ok) {
      console.log(123);
      const tr = $(`tr[data-id="${id}"]`);
      
      console.log(tr);

      tr.remove();
    }
  } catch (err) {
    console.log(err)
  }
}
