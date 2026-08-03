# Basic Function

Status: Functions

### Sentencia de Función (Function Statement):

Las declaraciones de función no forman parte del flujo de control regular de arriba hacia abajo. Conceptualmente se mueven al principio de su alcance y pueden ser utilizadas por todo el código. Además las variables locales se crean nuevamente para cada llamada, y las diferentes llamadas no afectan los enlaces locales de los demás (**Clausura**).

```jsx
console.log(greeting("rogers"));
// -> "hello, rogers"

function greeting(name){
	let greet = "hello, " + name;
	return greet;
}
```

```jsx
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```

En JavaScript, el comportamiento de los parámetros de una función depende del **tipo de dato** que se pase como argumento. En general, los datos se manejan de dos maneras: **por valor** o **por referencia**. A continuación, se describe cómo funciona cada tipo de dato:

| Tipo de dato | ¿Por valor o referencia? | ¿Cambia el original? |
| --- | --- | --- |
| Primitivos (`number`, `string`, `boolean`, `bigint`, `symbol`, `undefined`, `null`.) | Por valor | No |
| Objetos (`object`, `array`, `function`, etc.) | Por referencia | Sí (si se modifican las propiedades) |
| Redefinir un objeto (asignándole un nuevo objeto dentro de la función) | Por referencia | No (si se reasigna la referencia) |

### Expresión de Función (Function Expression):

Escribimos una función en un lugar del código donde se esperaba un valor, como en la declaración de una variable o como parámetro de una función. Puede ser una funcion normal, anónima o arrow function. a estas funciones **no hacen Hoisting**

```jsx
const newGreet = function Greet (name) {
	console.log(`Hi! ${name}`)
}
```

```jsx
const newGreet = function(name) {
	console.log(`Hi! ${name}`)
}
```

```jsx
const newGreet = (name) => console.log(`Hi! ${name}`)
```

### **Immediately Invoke Function Expression (IIFE)**:

Es una función que estamos usando como valor para invocarla inmediatamente pero no se crea la función en el scope (ámbito), solo existen dentro de los parentesis:

```jsx
 (function(name){
	 console.log(`Hi! ${name}`)
 })("Rogers");
```

### Argumentos Opcionales:

Si pasas demasiados, los extras son ignorados. Si pasas muy pocos, los parámetros faltantes se les asigna el valor `undefined`.

```jsx
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// -> -10
console.log(minus(10, 5));
// -> 5
```

### Argumentos por defecto:

un operador `=` después de un parámetro, seguido de una expresión, el valor de esa expresión reemplazará al argumento cuando no se le dé.

```jsx
const raiseNumber = (base, exp = 1) => {
	if (exp == 0) {
	   return 1;
	 }
  return base ** exp;
};
console.log(raiseNumber (2));
// -> 2
console.log(raiseNumber (2, 5));
// -> 32
```

### Operador spread:

```jsx
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
```

```jsx
let numbers = [5, 1, 7];
console.log(max(4, 1, ...numbers, 9, -2));
// → 9
```