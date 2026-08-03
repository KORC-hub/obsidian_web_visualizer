Tags: #Modules 

Node.js tiene un conjunto de módulos integrados para realizar funcionalidades esenciales sin la necesidad de instalar libretias externas:

## `node:http` : Servidor y Cliente HTTP

## `node:fs` : sistema de archivos

![[_Notes/Data Engineering/_tools/JavaScript+TS/Functional programming/Async function#^77d999]]


```js title:"Leer un archivo con una funcion asincrona"
const fs = require("node:fs");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
```


## `node:events` : Emisor de eventos **(Observer pattern)**


> [!info] 
> El Patrón Observer establece una relación uno-a-muchos donde un objeto notifica automáticamente a sus oyentes cuando cambia su estado, sin acoplarlos directamente. Este patron esta muy relacionado con la programación Reactiva.
> 


```js title:"Import module"
const EventEmitter = require("node:events")
const emiter = new EventEmitter();
```

`require("node:events")` nos da una clase que llamamos `EventEmitter`  por convención, con esta clase generamos una instancia que va a ser el que emita las notificaciones (`emiter`), y podemos utilizar las siguiente funciones:

- `emit()` : Emitir eventos
- `on()` o `addListener()`: Registrar oyentes de eventos
- `once()` : Gestionar suscripciones únicas
- `removeListener()` o `off()` : Eliminar oyentes

```js title:"Emit event"
emiter.on("notification", (message) => {
  console.log(`${message}`); // -> new notification
});

emiter.emit("notification", "new notification");
```

Como EventEmitter es una clase podemos extender esta clase crear objetos 


## `node:stream` :

## `node:path` : Manipular rutas de archivos


> [!info] 
>   `__filename` y `__dirname` son de alcance global por lo que son accesibles en cualquier parte del codigo sin tener que importar un modulo.


```js
const path = require("node:path")
```

`basename` : Devuelve el último segmento de una ruta, normalmente el nombre del archivo. 

`extname` : Extrae y devuelve la extensión del archivo de una ruta, incluyendo el punto.

`parse` : Analiza una ruta y devuelve un objeto con sus componentes (root, dir, base, name, ext).

`format` : Toma un objeto con componentes de ruta y los convierte en una cadena de ruta completa. Inversa a `parse`

`isAbsolute` : Determina si una ruta es absoluta (comienza desde la raíz del sistema). devuelve un booleano

`join` : Combina múltiples segmentos de ruta en una sola ruta normalizada.

`resolve` : Resuelve una secuencia de rutas o segmentos de ruta en una ruta absoluta.

## `node:assert` :
## `node:net`:
## `node:assert`
## `node:test`
