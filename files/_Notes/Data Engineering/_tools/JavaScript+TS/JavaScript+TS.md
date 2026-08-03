# JavaScript / ECMAScript

- **Creator:** Brendan Eich

- **First appeared**: 1995

- **Execution type:** `Interpreted`

- **Typing**: `weak`

- **Paradigm:** `event-driven`, `functional`, `imperative`, `procedural`, `object-oriented`

## Introduction

JavaScript es un lenguaje conocido por ser **ridículamente liberal** en lo que permite. Durante el ascenso al dominio de JavaScript, la versión ECMAScript 3 fue ampliamente soportada, aproximadamente entre los años 2000 y 2010. En 2015, se lanzó la versión 6, una actualización importante que incorporó algunas de las ideas previstas originalmente para la versión 4. Desde entonces, JavaScript ha recibido nuevas actualizaciones menores cada año.

Aunque su origen está ligado a los navegadores web, JavaScript no se limita a ellos. **Plataformas como MongoDB y CouchDB utilizan JavaScript** como su lenguaje de secuencias de comandos y consulta. Además, proyectos como **Node.js** han ampliado su alcance al proporcionar un entorno para programar en JavaScript fuera del navegador, habilitando su uso en servidores y aplicaciones de escritorio.

JavaScript puede parecer que hacer cosas extrañas, pero esto puede ser porque no tenemos conocimiento sobre como es interpretado lo que escribimos, a lo largo de las secciones se vera pero por ahora es importante tener en cuanta los siguientes términos:

### Hoisting (Elevación)

Se refiere al proceso mediante el cual el intérprete parece mover la declaración de funciones, variables(solo pasa con las variables declaradas con `var`, con `const` y `let` esto no sucede)  o importaciones a la parte superior de su **scope** (ámbito), antes de la ejecución del código.

```js
	fun("Rogers"); // -> Hi! Rogers
	
	function fun(name) {
		console.log(`Hi! ${name}`);
	}
```

### Temporal Dead Zone (TDZ)

una variable declarada con let, const o class está en una zona desde el inicio del bloque hasta que la ejecución del código llega al lugar donde se declara e inicializa la variable.

```js
console.log(name) 
const name = "Rogers"
```

La declaración se mueve hacia arriba y se establece la TDZ: 

```js
const name // TDZ
console.log(name) // TDZ
name = "Rogers"
```


## Preguntas 

- ¿Porque aprender JavaScript?
    - is the most widely used on the web (> 90%)
    - it’s used by google, Microsoft, Netflix and Paypal
    
- Que es JavaScript?
    It was made to run inside NetScape, since the web sites were static (link browsing). 
    You can develop web, mobile, desktop applications and work on microcontrollers.
    
- Que es ECMAScript (ES)?
	ECMA es una organizacion que contrubuye a estandares tecnologicos como: 
    - ECMA 334 (especificaciones de C#)
    - ECMA 404(especificaciones de JSON)
    - [ECMA 262 (especificaciones de JavaScript)](https://262.ecma-international.org/)
    ECMAScript 2015 **(ES6)** cambio mucho el lenguaje.
    el actual es el siguiente: [ECMAScript 2025](https://tc39.es/ecma262/)
    
- Que es Node.js?
    fue creado por Ryan Dahl y permite embeber el motor V8(el utilizado por Google chrome para ejecutar JavaScript).

## Lista de temas
### 1. [[Syntax]]

### 2. [[Functional programming]]
### 3. [[Object-Oriented Programming]]

### 4. [[Node js]]


# References

[Eloquent JavaScript en Español](https://www.eloquentjavascript.es/)

[GitHub - leonardomso/33-js-concepts: 📜 33 JavaScript concepts every developer should know.](https://github.com/leonardomso/33-js-concepts?tab=readme-ov-file)

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

[Quick Start – React](https://react.dev/learn)