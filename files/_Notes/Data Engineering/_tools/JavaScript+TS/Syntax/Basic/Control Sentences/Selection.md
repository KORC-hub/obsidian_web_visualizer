Tag: #control-sentence

Estas estructuras funcionan a partir de **expresión booleana,** donde se analiza que una **condición** se cumpla para ejecutar varias líneas de código.

### `if - else if - else`

```js
let edad = 25;
let acceso;
if (edad > 17) {
	acceso = 'permitir ingreso'
}  else if (condition) {
	// statement
} else {
	acceso = 'no puede ingresar'
}
```

### Ternario:

Tiene la mismo funcionalidad que un if y else, siendo el símbolo `?` el if y el `:` el else. , si se cumple se ejecutara lo que hay después del símbolo `?`, si no, se ejecutara lo que hay después del símbolo `:` .

```js
let edad = 25;
let acceso = edad > 17 ? 'permitir ingreso' : 'no puede ingresar';
console.log(acceso);
```

### `switch`

En un while no solo podemos ejecutar código cuando la variable es un valor exacto, si no que podemos hacer que sea un rango de valor una condición

```js
switch(variable) {
	case 1: 
		// statement
		break;
	case 10: 
		//statement
		break;
	default:
		//statement
		break;
}
```