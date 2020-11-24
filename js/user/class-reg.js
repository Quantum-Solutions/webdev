$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getClassRegister(id);

        if(response.ok){
            const table = `
            <table border="1">
              <thead>
                <th>Student Number</th>
                <th>Name</th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.username}</td>
                      <td>${v.name}</td>
                      <input type="checkbox" id="presentStatus" name="presentStatus">
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          `;
          
          const div = $('#moduleInfo');
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