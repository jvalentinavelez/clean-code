(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';
    interface HtmlAttributes {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {

        public id: string;
        public type: HtmlType;

        constructor( {id, type}: HtmlAttributes
        ) {
            this.id = id,
            this.type = type
        }
    }


    interface ElementAttributes {
        value: string;
        placeholder: string;
    }
    class InputAttributes {

        public value: string;
        public placeholder: string;

        constructor({ value, placeholder } : ElementAttributes
        ) {
            this.value = value;
            this.placeholder = placeholder;
         }
    }

    interface ElementIdentifier {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }
    class InputElement {
        public htmlIdentifier: HtmlElement;
        public inputAttributes: InputAttributes;

        constructor({id, type, value, placeholder}: ElementIdentifier
        ) {
            this.htmlIdentifier = new HtmlElement({ id, type });
            this.inputAttributes = new InputAttributes({ value, placeholder });
        }

        setFocus() {
            return (this.htmlIdentifier.id);
        };
        getValue() {
            return (this.inputAttributes.value);
        };
        isActive() {
            return true;
        };
        removeValue() {
            return (this.inputAttributes.value);
        };
    } 

    const element1 = new HtmlElement({ id: '1', type: 'input' });
    console.log(element1);

    const input1 = new InputAttributes({ value: 'txtName', placeholder: 'Enter first name' });
    console.log(input1);

    const inputHTML1 = new InputElement({ id: element1.id, type: element1.type, value: input1.value, placeholder: input1.placeholder});
    console.log(inputHTML1);


    // class InputAttributes extends HtmlElement {
    //     constructor(
    //         public value: string,
    //         public placeholder: string,
    //         id: string,
    //     ) {
    //         super(id, 'input');
    //     }
    // }

    // class InputEvents extends InputAttributes {
    //     constructor( value: string, placeholder: string, id: string ) {
    //         super( value, placeholder, id );
    //     }

    //     setFocus() {};
    //     getValue() {};
    //     isActive() {};
    //     removeValue() {};
    // }


    //? Idea para la nueva clase InputElement

    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

    //console.log({ nameField });

})()