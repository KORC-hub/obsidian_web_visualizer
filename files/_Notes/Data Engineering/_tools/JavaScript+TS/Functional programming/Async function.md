
Status: Functions

> [!note] 
> JavaScript es un lenguaje **síncrono, bloqueante y de un solo hilo**. Sin embargo, proporciona una sintaxis para la **asincronía** a través de **callbacks, Promises y async/await**, permitiendo que entornos de ejecución como **Node.js** o los **navegadores** gestionen tareas asíncronas mediante el **Event Loop**.

^77d999

A continuacion se ven como a evolucionado la asincronia en JavaScript a travez de sus versiones:

- En ES5  y anteriores JavaScript utilizaba los **callbacks** para manejar asincronía, pero causaban **callback hell** (callbacks anidados que hacian dificil la lectura).

> [!note]
>  Si no sabes que es fs mira [[Built-in modules#`node fs` sistema de archivos]]


```js title:"Callback Hell"
fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error leyendo archivo", err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error("Error procesando datos", err);
            } else {
                saveToDatabase(processedData, (err, result) => {
                    if (err) {
                        console.error("Error guardando en DB", err);
                    } else {
                        console.log("Datos guardados con éxito:", result);
                    }
                });
            }
        });
    }
});
```

- En ES6-2015 llegaron **Promesas** para mejorar la legibilidad, las cuales nos permitian utilizar `.then()` y `.catch()`. 

```js title:"Promise y uso de then y catch"
function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFilePromise("file.txt")
    .then(data => processData(data))
    .then(processedData => saveToDatabase(processedData))
    .then(result => console.log("Datos guardados con éxito:", result))
    .catch(err => console.error("Error:", err));
```

- Finalmente en ES8-2017, se implementaron las palabras clave `async`/`await` simplificó la escritura de código asíncrono, haciéndolo más limpio, ademas de manejable al poder utilizar  `try/catch` en un solo bloque.

```js title:"Funcion asincrona"
async function main() {
    try {
        const data = await readFilePromise("file.txt");
        const processedData = await processData(data);
        const result = await saveToDatabase(processedData);
        console.log("Datos guardados con éxito:", result);
    } catch (err) {
        console.error("Error:", err);
    }
}

main();
```
