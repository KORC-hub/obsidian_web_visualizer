# Prototypes

Status: Basic

Todos los objetos en JavaScript tienen un prototipo, que es otro objeto del cual heredan propiedades y métodos. Se accede al prototipo de un objeto mediante `Object.getPrototypeOf` 

## **Herencia prototípica**:

Si intentas acceder a una propiedad en un objeto y no existe, JavaScript busca en su prototipo. Este proceso se repite en cadena hasta encontrar la propiedad o llegar a `null`. Los simples objetos creados con la notación `{}` están enlazados a un objeto llamado `Object.prototype`.

## Creación de prototipos

Tambien se puede crear de las siguiente dos formas:

### Función como constructor

```jsx
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
}

const persona1 = new Persona("Ana");
persona1.saludar(); 
// -> "Hola, soy Ana"
```

### Con `Object.create()`

```jsx
const personaPrototipo = {
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

const ana = Object.create(personaPrototipo);
ana.nombre = "Ana";

ana.saludar(); 
// -> "Hola, soy Ana"
```

En ambos casos la relación entre el objeto y el prototipo es la siguiente:

```jsx
Persona.prototype/personaPrototipo  --->  { saludar: [Function] }
     ^ (prototipo)
     |
persona1  --->  { nombre: "Ana" }

```

Aunque:

- Con **funciones constructoras**, puedes ejecutar lógica personalizada al crear el objeto (como inicializar propiedades).
- Con `Object.create`, simplemente heredas de un prototipo y configuras las propiedades manualmente después.