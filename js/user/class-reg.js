let response;
$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getClassRegister(id);
        
        if(response.ok){
        //    response = JSON.parse(`{
        //     "ok": true,
        //     "data": [
        //         {
        //             "username": "179258421",
        //             "firstName": "Keegan",
        //             "lastName": "Launspach",
        //             "attended": true
        //         },
        //         {
        //             "username": "183005472",
        //             "firstName": "Jared",
        //             "lastName": "Govender",
        //             "attended": true
        //         },
        //         {
        //             "username": "170845789",
        //             "firstName": "Aaron",
        //             "lastName": "Garton",
        //             "attended": true
        //         }
        //     ]
        // }`);

            const table = `
            <table border="1">
              <thead>
                <th>Student Number</th>
                <th>Name</th>
                <th>isPresent</th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.username}</td>
                      <td>${v.firstName} ${v.lastName}</td>
                      <td><input type="checkbox" id="presentStatus" name="presentStatus"></td>
                      
                    </tr>
                  `;
                })}
              </tbody>
            </table>
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
});




