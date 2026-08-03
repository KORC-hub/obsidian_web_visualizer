Tags: #Modules 


> [!NOTE]
> **CommonJS** (CJS):  Es un estandar que establece como se debe estructurar y compartir un modulo. Node.js utilizo este estandar en sus inicios dado que JS todavía no tenia uno propio

Imagina que tienes dos archivos `index.js` y `add.js` y quieres ejecutar add.js cuando ejecutas index.js, podemos user la función `require()` y dentro la ruta dinámica del archivo.

```jsx
require('./add.js')
```

Ahora, si queremos obtener la función suma y poderla utilizar multiples veces, utilizamos `module.exports` 

```jsx
const add = require('./add.js')

const sum = add(1,2);
const sum2 = add(2,3);
console.log(`${sum} - ${sum2}`);
```

```jsx
const add = (a, b) => {
    return a + b;
}

module.exports = add
```

Algo importante a tener en cuenta es que cada modulo tiene su propio alcance (`scope`) dado que node.js trata los módulos como si fueran IIFE. Esto quiere decir que antes de que el código del modulo sea ejecutado, Node.js lo envuelve en una función para darle su propio alcance, evitando posibles errores con otras variables o funciones.

La IIFE que envuelve cada modulo contiene 5 parámetros que son importantes para el funcionamiento del modulo

- `exports`
- `require` : Es una función que se utiliza para importar el modulo
- `module` : Es una referencia a el modulo actual
- `__filename` : Es un string que representa la ruta actual del archivo
- `__dirname` :  Es un string que representa la ruta actual de la carpeta del archivo

## Module Catching

Cuando cargamos un modulo este almacena el objeto en cache, por lo que so volvemos a llamarlo, nos traerá el almacenado en cache y no un nuevo objeto.

Por ejemplo, utilizo `require()` en la linea 1 y este me da un objeto, modifico algunos valores del objeto, si vuelvo a llamar a `require()` en la linea 10 este me va a dar el objeto que he estado modificando (referencia)

Si lo que queremos es tener varias instancias, debes de retornar una instancia, retornamos la clase.

## Import export patterns

Para exportar mas de una función de un modulo se puede asignar a `module.exports` un objeto con las funcione:

```jsx
const math = require("./math")
console.log(math.add(2, 3))

const { add, subtract } = math
console.log(add(2, 3))
```

```jsx
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

module.exports = {
    add,
    subtract
}
```

Tambien se puede exportar utilizando solo `exports` en lugar de `module.exports`

```jsx
exports = (a, b) = {
    add,
    subtract
}
```

Pero hay que tener en cuenta lo siguiente:

- Se usa `module.exports` cuando quieras exportar un solo valor (función, clase, objeto).
- Se usa `exports` cuando quieras agregar múltiples propiedades al módulo.


> [!NOTE]
> **ESModules (ESM)** :  en ES2015 , JavaScript estandarizo un systema de módulos como parte del lenguaje.

Ahora se utilizan las palabras clave `export` y `import` para traer los módulos, también no todos los archivos `.js` son modulos como en CommonJS, si no que solo los qu tengan la extencion `.mjs` son modulos

```jsx
import add from "./math.mjs"

console.log(add(5,5))

```

```jsx
export default (a, b) => {
    return a + b
};

/*
const add =  (a, b) => {
    return a + b
};

export default add
*/
```