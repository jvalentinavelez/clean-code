(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        private masterEmail: string = 'juanita@google.com';

        sendEmail( emailList: string[], template: 'to-clients'|'to-admin') {
            console.log('Enviando correo a ', template, emailList);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
            //console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct(product: Product) {
            this.productService.saveProduct(product);
            // Realiza una petición para salvar en base de datos 
            //console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            this.mailer.sendEmail(['client1@google.com', 'client2@google.com'],'to-clients')
            //console.log('Enviando correo a los clientes');
        }
    
    }

    class CartBloc {

        private items: Object[] = [];

        addToCart ( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();
    const cartBloc = new CartBloc();
    const productBloc = new ProductBloc(productService, mailer);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();