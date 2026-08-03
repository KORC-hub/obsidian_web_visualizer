Tag: #data-structure #OOP

Un objeto puede contener cualquier número de propiedades, que son pares clave-valor. Una forma de crear un objeto es usando llaves como una expresión. podemos utilizar la palabra clave `this` para referirnos a propiedades propias del objeto:

```jsx
let person = {
    age: 20,
    firstName: "Kevin",
    lastName: "Rogers",
    greet: (name) => {
        console.log(`Hi ${name}, I'm ${this.lastname}`);
    },
    job: { name: "Programmer", exp: 0 }
};
console.log(person.age);
// -> 20
person.greet("Rogers");
// -> Hi! Rogers
console.log(person.job.name);
// -> Programmer

```

Los objetos son iguales (`==` o `===`) **solo si apuntan al mismo espacio en memoria**, independientemente de si contienen los mismos valores o propiedades. ( **los objetos se comparan por referencia** )

```jsx
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
```

el *contenido* de ese objeto pueden cambiar aunque este se declare con `const`.

```jsx
const score = {points: 0};
// Esto está bien
score.points = 1;
// Esto no está permitido
score = {points: 1};
```

`delete`(elimina una propiedad) y `in` (se aplica a una cadena y a un objeto, y te dice si ese objeto tiene una propiedad con ese nombre)

```jsx
delete person.age
console.log("age" in person);
// -> false
console.log("lastName" in person);
// -> true
```

`Keys` y `values` : ambas son métodos de la clase Objects a las que se le puede pasar como parámetros el objeto y retornaran las claves (en el caso de `keys`) o los valores (en el caso de `values`)  

```jsx
console.log(Object.keys(person));
// -> [ 'firstName', 'lastName', 'greet' ]
console.log(Object.values(person));
// -> [ 'Kevin', 'Rogers', [Function: greet] ]
```

`Object.assign()` : Copia todas las propiedades de un objeto en otro, donde el primer argumento es el destino y el segundo es la fuente.

```jsx
let person1 = Object.assign({}, person);
Object.assign(person1, { age: 20 });
console.log(person);
// -> { firstName: 'Kevin', lastName: 'Rogers', greet: [Function: greet] }
console.log(person1);
// -> { firstName: 'Kevin', lastName: 'Rogers', greet: [Function: greet], age: 20 }
```

### Operador spread (…):

- Copiar un objeto sin afectar el original (crea una copia "superficial").

```jsx
let person = {name: "Kevin", age: 20}
let  person1 = {...person}
console.log(person1)
// -> { name: 'Kevin', age: 20 }
```

- Añadir mas valores

```jsx
let person = {name: "Kevin", age: 20}
let  person1 = {...person, email: "kevin@gmail.com"}
console.log(person1)
// -> { name: 'Kevin', age: 20, email: 'kevin@gmail.com' }
```

### Iterar Objetos

```jsx
for (let key in person) {
	console.log(`${key}: ${person[key]}`)
}

/*
age: 20
firstName: Kevin
lastName: Rogers
greet: (name) => {
        console.log(`Hi ${name}`);
    }
job: [object Object]
*/
```