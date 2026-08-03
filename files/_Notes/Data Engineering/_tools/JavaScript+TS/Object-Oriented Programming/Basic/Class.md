# Class

Status: Basic

Nos permite crear una plantilla y poder crear multiples objetos, para esto se utiliza la palabra clave `class` y para crear un nuevo objeto la palabra clave `new`

- Sin valores por defecto en el constructor

```jsx
class Person {

	constructor(name, age){
		this.name = name
		this.age = age
	}
	
}

let person = new Person("Rogers",20)
console.log(person)
 // -> Person { name: 'Rogers', age: 20 }
```

- Con valores por defecto en el constructor

```jsx
class Person {

	constructor(name = "sin nombre", age = 0){
		this.name = name
		this.age = age
	}
	
}

let person = new Person()
console.log(person)
 // -> Person { name: 'sin nombre', age: 0 }
```

### Métodos

Los métodos son las comportamientos de un objeto (lo que puede hacer) : 

```jsx
class Person {

	constructor(name, age){
		this.name = name
		this.age = age
	}
	
	greet(name) {
		console.log(`Hi ${name}`)
	}
	
}

let person = new Person("Rogers",20)
person.greet("Kevin")
// -> Hi Kevin
```

### Private Properties

son propiedades a las que no se puede acceder ni modificarla por fuera de la clase:

```jsx
class Person {
	
	#phone
	
	constructor(name, age, phone){
		this.name = name
		this.age = age
		this.#phone = phone
	}
	
}

let person = new Person("Rogers",20, 2039740237)
console.log(person.phone) // -> undefined
console.log(person.#phone) // -> Error
console.log(person) 
// -> Person { name: 'Rogers', age: 20 }
```

### Getter and Setter

```jsx
class Person {
	#name
	#gmail
	
	constructor(name, gmail){
		this.#name = name
		this.#gmail = gmail
	}
	
	get name(){
		return this.#name
	}
	
	set gmail(newGmail) {
		this.#gmail = newGmail
	}
	
}

let person = new Person("Rogers", "Rogers@gmail.com");
console.log(person.name); // -> "Rogers"
console.log(person.gmail); // -> undefined
person.name = "Kevin";
console.log(person.name); // -> "Rogers"
```