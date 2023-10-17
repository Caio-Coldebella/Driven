export const usuarios = [];
export const tweets = [];

export class Usuario {
    constructor(username, avatar){
        this.username = username;
        this.avatar = avatar;
    }
}

export class Tweet extends Usuario{
    constructor(username, tweet, avatar) {
        super(username, avatar);
        this.tweet = tweet;
    }
}