export class User {
    id:number|undefined;
    name:String|undefined;
    email:String|undefined;
    password:String|undefined;
    role:String|undefined;

    constructor(name:String, email:String, password:String, role:String)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}