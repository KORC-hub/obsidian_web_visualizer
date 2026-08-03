# Inheritance

Status: Advance

La herencia se basa en prototipos. Un objeto hereda de otro estableciendo su prototipo, lo que permite compartir propiedades y métodos. 

```
Perro.prototype ---> Animal.prototype ---> Object.prototype ---> null
         ^                ^                   
     miPerro         Métodos de Animal      
```

```jsx
class Animal {
  constructor(name) {
    this.name= name;
  }

  makenoise() {
    console.log(`${this.name} hace un sonido.`);
  }
}

class Dog extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de Animal
    this.raza = raza; // Inicializa propiedades adicionales
  }
  
  bark() {
    console.log(`${this.name} dice: ¡Guau!`);
  }
}

	const miPerro = new Dog("Berlin","Pomsky");
console.log(miPerro.raza); // "Pomsky"
miPerro.makenoise(); // "Berlin hace un sonido."
miPerro.bark();      // "Berlin dice: ¡Guau!"
```

JavaScript **no soporta herencia múltiple directamente**, una clase solo puede extender otra clase, lo que establece una cadena prototípica única.

Con `extends`, una subclase tiene como prototipo el objeto de la clase padre, creando una cadena prototípica que busca métodos y propiedades en orden jerárquico, por lo tanto si un método no está en en la instancia de mi clase `Perro`, JavaScript lo busca en la cadena prototípica.

`super` en JavaScript es una forma de acceder a los métodos y constructores de una clase padre desde una clase hija.