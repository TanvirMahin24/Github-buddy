class UI{
    constructor(){
        this.profile = document.querySelector('.outputContainer');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="col-md-4 profile-view pl-5 pr-3">
            <div class="card">
                <div class="card-header">
                    <img class="card-img-top" src="${user.avatar_url}">
                    <div class="text-center">
                    <span class="badge badge-success mt-3">Followers: ${user.followers}</span>
                    <span class="badge badge-success mt-3">Following: ${user.following}</span>
                    <span class="badge badge-success  mt-3">Gists: ${user.public_gists}</span>
                    <span class="badge badge-success  mt-3">Repos: ${user.public_repos}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <span class="profileName mb-2">${user.name}</span><br>
                        <span class="h6 lead">${user.bio}</span>
                        <ul class="list-group text-left mt-2">
                            <li class="list-group-item"><b>Company:</b> ${user.company}</li>
                            <li class="list-group-item"><b>Website:</b> ${user.blog}</li>
                            <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                            <li class="list-group-item"><b>Email:</b> ${user.email}</li>
                            <li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
                        </ul>
                        <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mt-3">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 reposContainer">
            <span class="text-center mb-3 repoTitle">Latest 10 repositories:</span>
            <div id="repos"></div>
        </div>
        `;
    }

    //Show user Repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row box-shadow">
                    <div class="col-md-6">
                        <span class="lead">${repo.name}</span>
                    </div>
                    <div class="col-md-6 mt-md-0 mt-3 text-center">                            
                        <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                    <div class="offset-1 col-md-4 mt-3 float-right">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-outline-success">View Repository</a>
                    </div>
                </div>
            </div>
            `
        });
        document.querySelector('#repos').innerHTML = output;
    }

    //Clear Profile Method
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //alert method
    showAlert(message , classList){
        //Clear existing alert 
        this.clearAlert();
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
        //Timeout 3s
        setTimeout(() => {
            this.clearAlert();
        },3000)

    }

    //Clear Alert 
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove();
        }
    }
}