
Status: Control Sentences

Podemos lanzar errores manualmente utilizando la palabra clave `throw` , lo que va a enviar una nueva instancia de la clase Error, con el mensaje que le pasemos al constructor

```js
function myError() {
	throw new Error("se ha producido un error");
}
```

Utilizamos la estructura `try`-`catch` para capturar los errores y que el programa no se cierre o termine abruptamente, en la parte del `try` va el proceso que debería de seguir el programa, en el `catch` lo que pasa si hay algún error, y opcionalmente en el apartado `finally` podemos poner algo que se va ejecutar en cualquiera de los dos casos

```js
try { 
	myError();
} catch (error) {
	console.log(error.message);
} finally {
	// esta parte se muestra en cualquiera de los dos casos (si hay error o no)
	console.log("se termina la ejecución")
}
/*
se ha producido un error"
se termina la ejecución
*/
```