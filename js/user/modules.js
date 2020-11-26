$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getModules(id);

        if(response.ok){
            const table = `
            <table border="1">
              <thead>
                <th>Module Name</th>
                <th>Module Code</th>
                <th>Lecturer Info</th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.name}</td>
                      <td>${v.code}</td>
                      <td><a href="lecturerDetails.html">Info Link</a></td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          `;
          
          const div = $('#moduleInfo');
          div.append(table);
          console.log(response);
          $('#loadStatus').hide();
          $('#moduleContainer').show();
          
        }
        else{
            console.log('Not working')
        }

        $('#spinner').hide();
    } catch (error) {
        console.log(error);
    }
});