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
              </thead>
              <tbody>
                ${data.data.map(v => {
                  return `
                    <tr>
                      <td>${v.name}</td>
                      <td>${v.code}</td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          `;
          
          const div = $('#moduleContainer');
          div.append(table);
  
          
        }
        else{
            console.log('Not working')
        }

        $('#spinner').hide();
    } catch (error) {
        console.log(error);
    }
});