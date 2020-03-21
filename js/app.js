//GitHub init
const github = new GitHub;

//UI init
const ui = new UI;

//Input Field element
const searchUser = document.querySelector('#searchUser');

//Event Listener for searchUser
searchUser.addEventListener('keyup', (e) => {
    //Input field value
    const userText = e.target.value;

    if(userText !== ''){
        //Fetch User data promise
        github.getUser(userText)
            .then(data => {
                console.log(data);
                if(data.profile.message === 'Not Found'){
                    //Show Alert Not found
                    ui.showAlert('User not found...', 'alert alert-danger');
                }
                else{
                    //Show Profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //Clear Profile field
        ui.clearProfile();
    }
})