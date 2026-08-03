Tag:  #Operators  #booleans 

El operador `||`, por ejemplo, devolverá el valor de su izquierda cuando ese valor pueda convertirse en true y devolverá el valor de su derecha de lo contrario. El operador `&&` funciona de manera similar pero en sentido contrario. Cuando el valor a su izquierda es algo que se convierte en false, devuelve ese valor, y de lo contrario devuelve el valor de su derecha.

- si son diferentes el `||` me devuelve siempre el truthy, si ambos son truthy me devuelve el primero y si ambos son falsy me devuelve el segundo
- si son diferentes el `&&` me devuelve siempre el falsy, si ambos son falsy me devuelve el primero y si ambos son truthy me devuelve el segundo

```js
console.log( "hola" || "" )
// -> "hola"
console.log( "hola" && "" )
// -> ""
```

```js
console.log( "" || "bye" )
// -> "bye"
console.log( "" && "bye" )
// -> ""
```

```js
console.log( "hola" || "bye" )
// -> "hola"
console.log( "hola" && "bye" )
// -> "bye"
```

```js
console.log( "" || null )
// -> null
console.log( "" && null )
// -> ""
```

Otra propiedad importante de estos dos operadores es que la parte de su derecha se evalúa solo cuando es necesario. En el caso de `true || X`, el resultado será true, y `X` nunca se evaluará. Lo mismo ocurre con `false && X`, que es false e ignorará `X`. Esto se llama **evaluación de cortocircuito.**

Puede que en algunas situaciones solo queremos saber si el valor que esta a la izquierda es nulo o indefinido, para esto se utiliza el operador `??`

```js
console.log(0 ?? 100)
// -> 0
```

```js
console.log(null ?? 100)
// -> 100
```