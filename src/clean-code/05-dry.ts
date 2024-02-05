
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean {

        //this hace referencia a la instancia de la clase
        for (const key in this) {
            // console.log(typeof this[key]);
            switch (typeof this[key]) {
                case 'string':
                    //castear 
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                default:
                    throw Error(`${typeof this[key]} is not supported`)
            }
        }
        return true;

    }
    
    toString() {

        //No Dry
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is zero');
        // if (this.size.length <= 0) throw Error('size is empty');
        if (!this.isProductReady) return;


        return `${this.name} (${this.price}, ${this.size})`
        
    }
}

//función anónima autoinvocada
(() => {
    const bluePants = new Product('Blue large pants', 10, 'S');
    console.log(bluePants.toString());

})();