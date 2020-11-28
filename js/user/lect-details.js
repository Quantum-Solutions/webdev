// $(document).ready(async function() {
//     try {
//         const id = UserAuthHelper.getUserId();
//         const response = await api.getUser(id);

//         if(response.ok){
            
//             const { firstName, email } = response.data;
//             console.log(response.data);
//             console.log( $('#firstName'));
//             $('#firstName').val(firstName);
//             $('#email').val(email);


//             $('#loadStatus').hide();
//             $('#lectDetailsContainer').show();
//         }
//         else{
//             console.log('Not working')
//         }

//         $('#spinner').hide();
//     } catch (error) {
//         console.log(error);
//     }
// });