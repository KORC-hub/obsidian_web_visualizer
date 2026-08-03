Tag: #data-structure 

Un Array contiene **expresiones**

```js
let simpleArray = [];
// or
let simpleArray = new Array();
// Ej:
let array = [1, 2, 2 + 1, "a", "b", true, undefined, null];
```

Para saber el tamaño del se utiliza el atributo `.length`

```js
console.log(array.length) // 8

```

### Typed Arrays:

Los arrays tipados se utilizan generalmente cuando se interactúa con datos que vienen en un formato específico que no soporta un array normal de JavaScript y se desea acceder a esos datos.

`Int16Array`:  Un array de 16-bit enteros (con signo) - 2 bytes por entrada

`Uint8Array`:   Un  array ed 8-bit entero(sin signo) - 1 byte por entrada

`Uint32Array`:   Un  array de 32-bit enteros (sin signo) - 4 bytes por entrada

[Mas...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)

```js
const uint8 = new Uint8Array([1, 2, 3]);
```

### Operador spread (…):

- Copiar un array sin afectar el original (crea una copia "superficial").

```js
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray); // [1, 2, 3]
```

- Combinar múltiples arrays

```js
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4]
```

- convierte cualquier estructura iterable (como strings, sets, maps, etc.) en un array.

```js
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
```

### Métodos:

`push` : Inserta uno o mas elementos al final del array.

```js
simpleArray.push(10);
simpleArray.push(20, 30);
// simpleArray => [ 10, 20, 30 ]
```

`pop` : Elimina y retorna el ultimo elemento del array.

```js
let last = simpleArray.pop();
console.log(last ); // -> 30
//simpleArray => [ 10, 20 ]
```

`shift` : Elimina y retorna el primer elemento del array.

```js
let firts = simpleArray.shift();
console.log(firts); // -> 10
//simpleArray => [ 20 ]
```

`unshift` : Inserta uno o mas elementos al inicio del array.

```js
simpleArray.unshift(15);
simpleArray.unshift(5, 10);
// simpleArray => [ 5, 10, 15, 20 ]
```

`reverse` : Invierte el orden de los elementos del array.

```js
console.log(simpleArray.reverse()); 
//-> [ 20, 15, 10, 5 ]
```

`slice`: retorna un array que representa un trozo del array original. **(funciona también en strings)**

```js
let newArray = simpleArray.slice(1, 3);
console.log(newArray); // -> [ 10, 15 ]
```

`splice`: Elimina los elementos dentro de un rango, el primer parámetro es el índice en el que empieza y el segundo cuantos elementos se van a eliminar. 

```js
simpleArray.splice(1, 3);
console.log(simpleArray); // -> [ 5 ]
```

`fill` : Rellena los elementos de un array con un valor estático.

```js
const nums = [1, 2, 3];
nums.fill(0); // [0, 0, 0]
```

`indexOf` : retorna el índice del primer elemento encontrado que cumple la condición. o -1 si no lo encontró.  **(funciona también en strings)**

```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
```

`lastIndexOf` :  retorna el índice del ultimo elemento encontrado que cumple la condición. o -1 si no lo encontró.

```js
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3
```

`findlast` :  Devuelve el último elemento de un array.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.findLast(n => n % 2 === 0)); 
// -> 4
```

`toReversed` : Crea una copia del array con los elementos en orden inverso

```js
const letters = ['a', 'b', 'c'];
console.log(letters.toReversed());
// -> ['c', 'b', 'a']
```

`with` : Devuelve una copia del array con el elemento de un índice específico reemplazado por un nuevo valor.

```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.with(1, 'blueberry'));
// -> ['apple', 'blueberry', 'cherry']
```

`toSorted` : Devuelve una copia ordenada del array, sin modificar el original.

```js
const numbers = [10, 1, 20, 3];
console.log(numbers.toSorted()); 
// -> [1, 10, 20, 3] (Error)
```

```js
// Ascedente
console.log(numbers.toSorted((a, b) => a - b)); 
// -> [1, 3, 10, 20]
```

```js
// Descendente
console.log(numbers.toSorted((a, b) => b - a)); 
// -> [20, 10, 3, 1]
```

Para saber mas sobre como realizar operaciones sobre los datos guardados en un array consultar la sección : 

[Higher order functions](Higher%20order%20functions.md)