(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputProps {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvent {
        
    }

    class InputElement{
        public htmlElement: HtmlElement;
        public inputProps: InputProps;

        constructor({ id, type }: HtmlElement, { value, placeholder }: InputProps) {
            this.htmlElement = new HtmlElement(id, type);
            this.inputProps = new InputProps(value, placeholder);
        }

        setFocus() {
            return (this.htmlElement.id);
        };
        getValue() {
            return (this.inputProps.value);
        };
        isActive() {
            return true;
        };
        removeValue() {
            return (this.inputProps.value);
        };
    }

    const element1 = new HtmlElement('1', 'input');
    console.log(element1);

    const input1 = new InputProps('txtName', 'Enter first name');
    console.log(input1);

    const inputHTML1 = new InputElement({ id: element1.id, type: element1.type }, {value: input1.value, placeholder: input1.placeholder});
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


    // //? Idea para la nueva clase InputElement

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

    // console.log({ nameField });

})()