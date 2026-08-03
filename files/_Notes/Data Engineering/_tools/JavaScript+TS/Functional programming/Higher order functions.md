# Higher order functions

Status: Functions

Las funciones que operan en otras funciones, ya sea tomándolas como argumentos o devolviéndole, estos son algunos ejemplos de funciones de orden superior, estas funciones ya existen y son utilizadas para manipular un array, en estos ejemplos les pasamos funciones (`test`, `transform`, `combine`), nótese que no se modifica el array que llega como parámetro por lo visto al inicio de esta sección (no queremos modificar los valores originales):

```jsx
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
```

```jsx
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
```

```jsx
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
```

Como se mencionó anteriormente estas funciones ya están disponibles desde una instancia de un Array (para poder aplicar estos métodos a otras estructura iterable hay que hacer la conversión a array con  `Array.from()`), otros métodos interesantes son:

`reduceRight` : Similar a `reduce`, pero itera desde el último elemento hacia el primero.

```jsx
const elements = ['a', 'b', 'c'];
const result = elements.reduceRight((current, next) => current + next, ''); // "cba"
```

`every` : Devuelve `true` si **todos los elementos** cumplen una condición.

```jsx
const nums = [1, 2, 3];
const allPositive = nums.every(n => n > 0); // true
```

`some` : Devuelve `true` si **al menos un elemento** cumple una condición.

```jsx
const nums = [1, 2, 3];
const hasEven = nums.some(n => n % 2 === 0); // true
```

`forEach` : Ejecuta una función para cada elemento (no devuelve un nuevo array a diferencia de un map)

```jsx
const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); 
/* ->
2 
4 
6 
*/
```