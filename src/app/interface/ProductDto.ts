export class ProductDto
{
    name:String |undefined;
    description: String|undefined ;
    price: number|undefined;
    category:String | undefined;
    image:String | undefined ;
    units:number| undefined;
    rating:number|undefined;
    user_id:number|undefined;

    constructor(name:String, description:String, price:number, category:String, image:String, units:number, rating:number, user_id:number)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
        this.units = units;
        this.rating = rating;
        this.user_id = user_id;
    }
}