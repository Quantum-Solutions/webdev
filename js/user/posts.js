$(document).ready(async function() {
  console.log(document.location.href)

  const moduleId = document.location.href.split('?')[1].split('=')[1]

  console.log(moduleId);

    try {
        const response = await api.getPosts(moduleId);

        if(response.ok){
            const table = `
            
          ${response.data.map(v => {
            return `
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">${v.name}</a>
                      </h4>
                  </div>
                <div id="collapse1" class="panel-collapse collapse in">
                  <div class="panel-body" style="color: black;">${v.body}</div>
                </div>
              </div>
            `;
          })}
          `;
          
          const div = $('#accordion');
          div.append(table);

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