# Static Properties

Status: Advance

Los métodos y atributos estáticos pertenecen directamente a la clase, no a instancias. Se acceden usando el nombre de la clase.

```jsx
class Person {
    static count = 0;
    #age;
    constructor(name, age) {
        this.id = ++Person.count;
        this.name = name;
        this.#age = age;
    }

    get age() {
        return `I'm ${this.#age}`;
    }

    static numberPerons() {
        return `there're ${Person.count} persons`;
    }
}

let persona1 = new Person("kevin", 20);
let persona2 = new Person("Rogers", 20);
console.log(persona1.id); // -> 1
console.log(persona1.name); // -> "Kevin"
console.log(persona1.age); // -> "I'm 20"
console.log(Person.numberPerson); // -> 2
console.log(Person.numberPerons()); // -> "there're 2 persons"

```