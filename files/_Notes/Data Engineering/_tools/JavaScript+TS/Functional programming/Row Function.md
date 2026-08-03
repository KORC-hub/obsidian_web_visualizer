# Row Function

Status: Functions

utiliza una flecha (`=>`) compuesta por un signo igual y un caracter mayor que , La flecha viene *después* de la lista de parámetros y es seguida por el cuerpo de la función. Hay tres formas de escribirlo dependiendo del numero de parámetros y si retorna o no algo.

```jsx
const raiseNumber = (base, exp) => {
	if (exp == 0) {
	   return 1;
	 }
  return base* exp;
};
```

```jsx
const exponente = x => x * x;
```

```jsx
const cuerno = () => {
  console.log("Toot");
};
```