export class token
{
    expiration:Date|undefined;
    token:String|undefined;

    constructor(expiration:Date, token:String)
    {
        this.expiration = expiration;
        this.token = token;
    }
}