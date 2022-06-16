export class logged_user
{
    email:String|undefined;
    id:number|undefined;
    roles:Array<String>|undefined;
    token:String|undefined;
    type:String|undefined;
    username:String|undefined;

    constructor(email:String, id:number, roles:Array<String>, token:String, type:String, username:String)
    {
        this.email = email;
        this.id = id;
        this.roles = roles;
        this.token = token;
        this.type = type;
        this.username = username;
    }

    isLogged():boolean
    {
        return this.token != "";
    }

    logout():void
    {
        this.roles = new Array<String>();
        this.email = "";
        this.token = "";
        this.type = "";
        this.username = "";
        this.id = 0;
    }

    isAdmin():boolean
    {
        let b = false;
        this.roles?.forEach(function(value)
        {
            if(value == "ROLE_ADMIN")
                b = true;
        });
        return b;
    }
}