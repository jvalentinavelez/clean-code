interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Humingbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

//La clase de Ostric depende de la implementación de Bird y
//esto representa un conflicto porque el Ostrich no necesariamente vuela

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

//si se incluye el método swim(), se tendría que hacer que las demás
//clases también implementen este método sólo para cumplir la interface
class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}

//código ahora es más tolerante al cambio
//se pueden añadir más propiedades a las clases que implementan la interface FlyingBird sin afectar a las demás
