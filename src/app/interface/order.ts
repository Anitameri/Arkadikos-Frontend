export class order
{
    id:number|undefined;
    name:String|undefined;
    price:number|undefined;
    totalPrice:number|undefined;
    image:String|undefined;
    units:number|undefined;
    max_units:number|undefined;

    constructor(id:number, name:String, price:number, image:String, units:number, max_units:number)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.totalPrice = price * units;
        this.image = image;
        this.units = units;
        this.max_units = max_units;
    }
}
