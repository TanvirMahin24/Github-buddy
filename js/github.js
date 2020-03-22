class GitHub{
    constructor(){
        this.client_id = 'd1d813c2bed445026202';
        this.client_secret = '231385d69b9aea47439b07441968aea71159f9a1';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        //Fetch the profile information
        const proRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //Fetch the user repos
        const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //converting the response to jeson object
        const profile = await proRes.json();
        const repos = await reposRes.json();

        return {
            profile,
            repos
        }
    }
}