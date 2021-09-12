"use strict";
class car {
    constructor(name, price, _millage) {
        this.name = name;
        this.price = price;
        this._millage = _millage;
    }
    getTotalprice(tax) {
        const totalTax = this.price * tax / 100;
        const total = this.price + totalTax;
        return total;
    }
    getActualMillage() {
        const actualMillage = this._millage + 50000;
        return actualMillage;
    }
}
