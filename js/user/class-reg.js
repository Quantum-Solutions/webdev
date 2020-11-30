const getLecturerModules = async () => {
  try {
    console.log(123);
    const response = await api.getLecturerModules(UserAuthHelper.getUserId());

    console.log(response);

    if (response.ok) {
      moduleId = response.data[0].id;
    
      console.log(12, moduleId)
    }
  } catch (err) {
    console.log(err);
  }
}

getLecturerModules();

let moduleId;

$(document).ready(async function() {
    try {
        const response = await api.getClassRegister(moduleId);
        
        if(response.ok){
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
