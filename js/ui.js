class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9 mt-3">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item"><b>Name:</b> ${user.name}</li>
                            <li class="list-group-item"><b>Bio:</b> ${user.bio}</li>
                            <li class="list-group-item"><b>Company:</b> ${user.company}</li>
                            <li class="list-group-item"><b>Website:</b> ${user.blog}</li>
                            <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                            <li class="list-group-item"><b>Email:</b> ${user.email}</li>
                            <li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3"></h3>
            <div id="repos"></div>
        `;
    }

    //Clear Profile Method
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //alert method
    showAlert(message , classList){
        //create alert div with classes and text
        const div = document.createElement('div');
        div.className = classList; 
        div.appendChild(document.createTextNode(message));
        //Get parent element
        const container = document.querySelector('.searchContainer');
        //get search box
        const searchBox = document.querySelector('.search');
        //insert the alert
        container.insertBefore(div, searchBox);

    }
}