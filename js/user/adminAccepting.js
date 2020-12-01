$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getNotAccepted();

        if(response.ok){
            const table = `
            <table border="1">
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>isAccepted</th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.name}</td>
                      <td>${v.email}</td>
                      <td><button>Accept</button></td>
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