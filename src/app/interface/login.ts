export class login
{
    username:String|undefined;
    password:String|undefined;

    constructor(username:String, password:String)
    {
        this.username = username;
        this.password = password;
    }
}