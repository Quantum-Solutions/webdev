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
                <th>Posts</th>
              </thead>
              <tbody>
                ${response.data.map(v => {
                  return `
                    <tr>
                      <td>${v.name}</td>
                      <td>${v.code}</td>
                      <td><a style="color: white" href="/posts.html?moduleId=${v.id}">View Posts</a></td>
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