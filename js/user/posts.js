$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getPosts(id);

        if(response.ok){
            const table = ` `;
          
          const div = $('#moduleInfo');
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