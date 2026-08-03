# Destructuring

Extraer valores de arrays o objetos a variables de manera concisa

### Destructuración de Array

- Sin valores por defecto

```jsx
let numbers = [1,2,3,4]
let [numer1, number2, number3, number4] = numbers
console.log(number1) // -> 1
console.log(number2) // -> 2
console.log(number3) // -> 3
console.log(number4) // -> 4
```

- Con valores por defecto
    
    ```jsx
    let numbers = [1,2,3]
    let [numer1, number2, number3, number4 = 0] = numbers
    console.log(number1) // -> 1
    console.log(number2) // -> 2
    console.log(number3) // -> 3
    console.log(number4) // -> 0
    ```
    

- Valores específicos

```jsx
let numbers = [1,2,3,4]
let [numer1, , ,number4 ] = numbers
console.log(number1) // -> 1
console.log(number4) // -> 4
```

### Destructuración de Objetos

hay que tener en cuanta que los objetos a diferencia de los array no son iterables y su estructura ya no se basa en posiciones si no en claves por lo que si queremos asignar un valor a una variable, este se tiene que llamar igual que la clave que contiene el valor, o  especificando la clave y luego el nombre de la variable 

Objeto de prueba:

```jsx
let person = {
    age: 20,
    firstName: "Kevin",
    lastName: "Rogers",
    greet: (name) => {
        console.log(`Hi ${name}, I'm ${this.lastname}`);
    },
    job: { name: "Programmer", exp: 0 }
}
```

- Sin valores por defecto

```jsx
// opcion 1
let { age, firstName, lastName2 } = person;
console.log(age); // -> 20
console.log(firstName); // -> Kevin
console.log(lastName2); // -> undefined

// opcion 2
let { 
	firstName: name1,
	lastName: lastName3,
	job: { name: jobName } 
} = person;

console.log(name1); // -> Kevin
console.log(lastName3); // -> Rogers
console.log(jobName); // -> Programmer
```

- Con valores por defecto

```jsx
// opcion 1
let { name, lastname, job = "unemployee" } = person
console.log(name) // -> Kevin
console.log(lastName) // -> Rogers
console.log(job) // -> unemployee
```