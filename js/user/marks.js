$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getMarks(id);

        if(response.ok){
            const table = `
            <table border="1">
              <thead>
                <th>Module Code</th>
                <th>Mark(%) </th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.module.code}</td>
                      <td>${v.mark}</td>
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