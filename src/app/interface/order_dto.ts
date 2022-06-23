export class order_dto
{
    user_id:number|undefined;
    product_id:number|undefined;
    price:number|undefined;
    units:number|undefined;

    constructor(user_id:number, product_id:number, price:number, units:number)
    {
        this.user_id = user_id;
        this.product_id = product_id;
        this.price = price;
        this.units = units;
    }
}