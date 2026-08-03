tag: #data-type 

JavaScript es de **tipado dinámico** por lo que no tenemos que especificar el tipo de variable. 

Antes en JavaScript se declaraba las variables con la palabra `var`, pero esto ya no se utiliza y en su lugar se recomienda utilizar `let`  o  `const`, las variables definidas con `let` se pueden modificar en cualquier momento de la ejecución, para crear variables que no se puedan modificar se utiliza la palabra `const` , esto ultimo solo para valores primitivos, las estructuras como `array` y `objetos` se pueden modificar.

> [!tip]
> Se recomienda seguir este orden al declarar variables: **`const` > `let` > `var`**. El motivo principal para preferir la declaración con `const` proviene de uno de los principios de la programación funcional, que establece que, en lugar de modificar variables existentes, es mejor crear nuevas cada vez que sea necesario realizar un cambio. Esto no solo mejora la legibilidad del código, sino que también evita errores relacionados con estados mutables.
> 
> Cuando una variable deja de ser utilizada, el **garbage collector** se encarga de eliminarla de la memoria automáticamente, optimizando así los recursos disponibles.

```js title:"Declare and define variables"
let name = 'Kevin' // declare and define

let lastName; // declare
lastName = 'Roger' // defin
```

```js
const nombre = "Kevin"
nombre = "Oswaldo" // TypeError: Assignment to constant variable.
// por regla general deberiamos intentar no cambiar el valor de una variable
```

### Ámbitos (scopes):

Las variables declarados con `let` y `const` en realidad son locales al bloque en el que se declaran, por lo que si creas uno de ellos dentro de un bucle, el código antes y después del bucle no puede “verlo”. Cada ámbito puede “mirar hacia afuera” al ámbito que lo rodea, pero no  al revez

```js
let x = 10;   // global
if (true) {
  let y = 20; // local al bloque
  var z = 30; // también global
}
```

Tipo de valores que podemos almacenar, podemos ver el tipo de dato utilizando `typeof`:

```js
/*  Como se declara en JavaScript // typeof de la variable */
let number = 1; // number -> 64 bits
let decimal = 1.7; // number -> 64 bits
let infity = Infinity; // number 
let NotANumber = NaN; // number
let text = "String" 0 => 'string' => `string`; // string
let boolean = true; || let boolean = false;  // boolean
let notDefined; => let undef = undefined; // undefined
let nulo = null; // object
let mySymbol = Symbol("mysymbol"); // symbol
let bigInt = BigInt(4872348734676723424) => 4872348734676723424n // +64 bits
```

en los ejemplos anteriores lo que se pone después del símbolo `=` se conoce como **expresiones primarias ya que  por si sola produce un valor**.

Number(), String(), Boolean()

Number.isNaN