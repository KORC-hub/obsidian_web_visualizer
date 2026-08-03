
Tag: #data-structure 

Un set es muy similar a un array pero este no admite duplicados, esto se demuestra en el método `add`:

```jsx
let simpleSet = new Set();
// or
let simpleSet = new Set(["rogers", 2, 13, true]);
```

Para saber el tamaño del se utiliza el atributo `.size`

```jsx
console.log(simpleSet.size) 
// -> 4
```

### Métodos:

`add` : Inserta uno o mas elementos al final del array.

```jsx
simpleSet.add(20);
simpleSet.add("rogers");
console.log(simpleSet);
// -> Set(5) { 'rogers', 2, 13, true, 20 }
```

`delete` : Elimina y retorna el ultimo elemento del array.

```jsx
// se pasa el elemento no el indice 
console.log(simpleSet.delete(20));
// -> true
console.log(simpleSet);
// -> Set(4) { 'rogers', 2, 13, true }
```

 `has` : Elimina y retorna el primer elemento del array.

```jsx
console.log(mySet.has("rogers"));
// -> true
console.log(mySet.has(20));
// -> false
```

`union` : Todos los elementos de dos conjuntos.

```jsx
const a = new Set([2, 4, 6]);
const b = new Set([1, 4]);
console.log(evens.union(squares)); 
//  -> Set(4) { 2, 4, 6, 1 }
```

`difference` : Los elementos de un conjunto que no están en otro.

```jsx
const a = new Set([2, 4, 6]);
const b = new Set([1, 4]);
console.log(a.difference(b));
//  -> Set(2) { 2, 6 }
```

`intersection` : Los elementos comunes entre dos conjuntos.

```jsx
const a = new Set([2, 4, 6]);
const b = new Set([1, 4]);
console.log(a.intersection(b));
//  -> Set(1) { 4 }
```

`symmetricDifference` : Los elementos que están en uno u otro conjunto, pero no en ambos.

```jsx
const a = new Set([2, 4, 6]);
const b = new Set([1, 4]);
console.log(a.symmetricDifference(b));
//  -> Set(3) { 2, 6, 1 }
```

`isSubsetOf` : Devuelve `true` si todos los elementos de un conjunto están en otro conjunto.

```jsx
const a = new Set([4, 8]);
const b = new Set([2, 4, 6, 8, 10]);
console.log(a.isSubsetOf(b));
// -> true
```

`isSupersetOf` : Devuelve `true` si un conjunto contiene todos los elementos de otro conjunto.

```jsx
const a = new Set([2, 4, 6, 8, 10]);
const b = new Set([4, 8]);
console.log(a.isSupersetOf(b));
// -> true
```

`isDisjointFrom` : Devuelve `true` si dos conjuntos no tienen elementos en común.

```jsx
const a = new Set([2, 4, 6, 8, 10]);
const b = new Set([1, 3, 7, 9]);
console.log(a.isDisjointFrom(b));
// -> true
```

### Conversiones entre Array y Set:

- Set a Array
    
    ```jsx
    let simpleArray = Array.from(simpleSet);
    console.log(simpleArray);
    // -> [ 2, 13, true ]
    ```
    

- Array a Set
    
    ```jsx
    let simpleSet = new Set(simpleArray);
    console.log(simpleSet);
    // -> Set(3) { 2, 13, true }
    ```