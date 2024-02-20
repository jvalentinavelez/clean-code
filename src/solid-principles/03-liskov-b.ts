//clase abstracta sirve para trabajar con herencia
export abstract class Vehicle {
  //método abstracto
  //las clases que extiendan de la clase abstracta, deben
  //implementar los métodos y propiedades abstractas
  abstract getNumberOfSeats(): number;
}

//función implementada puede tolerar cualquier clase que sea de tipo Vehicle

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
