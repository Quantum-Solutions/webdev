$(document).ready(async function() {
    try {
        const id = UserAuthHelper.getUserId();
        const response = await api.getTimetable(id);


        if(response.ok){
            
            const path = response.data;
            console.log(path);
            $('#iframepdf').attr('src', path);


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