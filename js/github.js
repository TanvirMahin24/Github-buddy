class GitHub{
    constructor(){
        this.client_id = 'd1d813c2bed445026202';
        this.client_secret = '231385d69b9aea47439b07441968aea71159f9a1';
    }

    async getUser(user){
        const proRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await proRes.json();

        return {
            profile
        }
    }
}