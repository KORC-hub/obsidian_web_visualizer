Tag: #data-structure 

Permiten almacenar pares clave-valor, además las claves pueden ser cualquier tipo de dato y son directamente iterables:

```jsx
let simpleMap = new Map();
// or 
let simpleMap = new Map([
	["name", "kevin"],
	["age", 20],
	[1, "kevin@gmail.com"]
])
```

Una forma de mostrar todo el map (tanto keys como valores) es con `.entries` :

```jsx
console.log(simpleMap.entries());
/*
[Map Entries] {
  [ 'name', 'kevin' ],
  [ 'age', 20 ],
  [ 1, 'kevin@gmail.com' ]
}
*/ 

```

Para saber el tamaño del se utiliza el atributo `.size`

```jsx
console.log(simpleMap.size) 
// -> 3
console.
```

Para saber las llaves y los valores almacenados se utiliza `.keys` y `.values`

```jsx
console.log(simpleMap.keys())
// -> [Map Iterator] { 'name', 'age', 1 }
console.log(simpleMap.values())
// -> [Map Iterator] { 'kevin', 20, 'kevin@gmail.com' }
```

### Métodos:

`set` : 

```jsx
simpleMap.set("lastName","rogers");
console.log(simpleMap)
/*
 Map(4) {
  'name' => 'kevin',
  'age' => 20,
  1 => 'kevin@gmail.com',
  'lastName' => 'rogers'
}
*/
```

`get` :

```jsx
console.log(simpleMap.get("name"))
// -> "kevin"
console.log(simpleMap.get("midleName"))
// -> undefined
```

 `has` : 

```jsx
console.log(simpleMap.has("name"))
// -> true
console.log(simpleMap.has("midleName"))
// -> false
```

`delete`  : 

```jsx
simpleMap.delete("lastName","rogers");
console.log(simpleMap)
/*
 Map(4) {
  'name' => 'kevin',
  'age' => 20,
  1 => 'kevin@gmail.com',
}
*/
```

`clear` :

```jsx
simpleMap.clear();
console.log(simpleMap)
// -> Map(0) {}
```