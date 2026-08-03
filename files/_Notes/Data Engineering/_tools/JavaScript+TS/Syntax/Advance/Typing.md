# Typing

## Porque es un problema que JavaScript sea dinámico?

JavaScript utiliza una técnica llamada **hoisting**. Esto significa que las declaraciones de funciones y variables se mueven al inicio del contexto de ejecución, por lo que se puede llamar desde cualquier parte del archivo, esto puedo parecer algo bueno, pero como JavaScript es dinámico, en tiempo de ejecución almacena los tipos de datos que recibe y devuelve cada función. Esto implica que **si** **llamamos repetidamente a la misma función, pero con diferentes tipos de datos, JavaScript debe actualizar su estructura interna cada vez  que se llama la función,** lo cual puede afectar negativamente el rendimiento.

Para mejorar el rendimiento y seguridad, es recomendable minimizar este tipo de situaciones. Por ejemplo, es buena práctica definir funciones que trabajen con tipos de datos consistentes y evitar operaciones que obliguen al motor de JavaScript a realizar conversiones o actualizaciones constantes. Aquí es donde llega **TypeScript** y nos permite definir tipos de datos directamente en la implementacion, 

## Primitive value


> [!tip]
> **JavaScript** no tiene un valor especial en tiempo de ejecución para enteros, por lo que no hay equivalente a `int` o  `float`, todo es simplemente `number`


```ts
const Text: string = "Hi!"
const age: number = 20
const width: number = 2.3
const isTruth: boolean = true
```

## Arrays

```ts
const numbers: number[] = [1,2,3]
const messages: string[] = ["Hi!","Bye"]

// other form
const numbers2: Array<number> = [1,2,3]
const message2: Array<string> = ["Hi!","Bye"]

// Tuple
const stringNumberPair: [string, number] = ["Hi!",20]
```

## any

<aside>
🚫

any representa cualquier tipo de dato, usar any en **TypeScript** es como seguir utilizando **JavaScript,** por lo que no es recomendable su uso

</aside>

```ts
const something: any = "Hi!"
something = 100 
something = true
```

## Functions

Cada parámetro se le especifica el tipo , y después de los paréntesis se especifica el valor a retornar

```ts
function greet(name: string): string {
  console.log(`Hello, ${name} !!`);
}
```

Retornar promesas 

```ts
async function promiseNumber(): Promise<number> {
  return 26;
}
```

## **Union Types**

Es un tipo formado a partir de dos o más tipos, que representa valores que pueden ser cualquiera de esos tipos. Pero hay que tener cuidado ya que el código va a tener en cuenta cada tipo para la ejecución, para solucionar esto se hace `narrowing`, ósea verificamos qué tipo tiene realmente una variable en tiempo de ejecución, para esto podemos utilizar `===` , `typeof` (para primitivos), `instanceof` (para clases y objetos),          `in` (para propiedades en objetos)

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase());
}

// Error: Property 'toUpperCase' does not exist on type 'number'.

```

```ts
function printId(id: number | string) {
  if (typeof id === "string") { // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {     // Here, id is of type 'number'
    console.log(id);
  }
}
```

## Record type

```ts

```

## **Type Aliases**

Podemos crear nuestros tipos con la palabra clave `type`

```ts
type Point = {
  x: number;
  y: number;
};

type Text = string
```

## **Interfaces**

las interfaces también se pueden utilizar para definir la estructura de un objeto y se puede utilizar igual que `type` para objetos

```ts
interface Point {
  x: number;
  y: number;
}

interface Text = string // Error: interface always expected a object 
```

Podemos crear tipos mas complejas si usamos union types, por ejemplo

```ts
type Colors = "Red" | "Blue" | "Green" | "Yellow";
type Sizes = 15 | 20 | 25 | 30;

type Props = {
	show: boolean
	title: string
	count: number
	background: Color;
	width: Sizes;
	heigh: Sizes;
	padding: [number, number, number?, number?] // acepta 2 o 3 o 4
	event: () => number; // function
	
}
```