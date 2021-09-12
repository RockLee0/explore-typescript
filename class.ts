class car{
    name:string;
    price:number;

    private _millage:number;

    constructor(name:string,price:number,_millage:number)
    {
        this.name=name;
        this.price=price;
        this._millage=_millage;
    }

   
    getTotalprice(tax:number):number{
        const totalTax=this.price*tax/100;
        const total=this.price+totalTax;
        return total;
    }

    getActualMillage():number{
        const actualMillage=this._millage+50000;
        return actualMillage;
    }
   

}