tag: #data-type 

Es un nuevo tipo de dato primitivo que crea valores únicos por cada llamada

```js
let id = Symbol("123")
console.log(Symbol() === Symbol()) // -> false
```

## Replicar symbols

podemos traer de memoria un symbol ya existente con el método `for`

```js
let citizenId = Symbol.for("123")
console.log(id === citizenId) // -> true
```