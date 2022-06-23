import { token } from "./token";

export class logged_user
{
    email:String|undefined;
    id:number|undefined;
    roles:Array<String>|undefined;
    token:token|undefined;
    type:String|undefined;
    username:String|undefined;

    constructor(email:String, id:number, roles:Array<String>, token:token, type:String, username:String)
    {
        this.email = email;
        this.id = id;
        this.roles = roles;
        this.token = token;
        this.type = type;
        this.username = username;
    }
}