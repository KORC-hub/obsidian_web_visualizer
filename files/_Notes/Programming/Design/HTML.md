# HTML

# Basic structure

Todo archivo HTML comienza con la siguiente estructura, la cual define diferentes etiquetas para su correcto funcionamiento:

- `<head>`
    
    Contiene metadatos del documento, como enlaces, estilos, scripts, etc.
    
    - `<meta>`
        - `charset="UTF-8”`
            
            Codificación estándar que incluye casi todos los caracteres y símbolos usados en el mundo.
            
        - `name="viewport”`
            
            Área visible en navegadores móviles.
            
- `<body>`
    
    Define el contenido visible de una página web
    

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
			    content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

![image.png](zExtra/Imagenes/Programming/HTML/image.png)

# Head Content

<aside>
📖

</aside>

## `<meta>`

## `<link>`

## `<style>`

## `<script>`

## `<base>`

# Body Content

Aquí se agregara contenido sobre  <audio>,<canvas>, <datalist>,<details>, <embed>,<search>, <output>, <progress>, <video>, <ul>, <li>,<ol>

## Page Structure (Layout)

### `<header>`

### `<main>`

### `<nav>`

### `<div`

### `<section>`

### `<article>`

### `<footer>`

### `<aside>`

## **Typography and Text**

### `<h1>` ->`<h6>`

### `<p>`

### `<spam>`

## Multimedia

### `<img>`

### `<audio>`

### `<video>`

### `<canvas>`

### `<embed>`

## Interactivity

### `<a>`

### `<input>`

### `<output>`

### `<details>`

### `<progress>`

## Lists

### `<ul>` y `<li>`

<aside>
📖

Se utiliza cuando **NO** es importante el orden de los elementos.

</aside>

```html
<ul> <!-- unorder list -->
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
</ul>
```

- `<ul>` → `type=""`
    
    Define el estilo de los marcadores
    
    `disc` (predeterminado)
    
    `circle`
    
    `square`
    

![image.png](zExtra/Imagenes/Programming/HTML/image%201.png)

### `<ol>` y `<li>`

<aside>
📖

Se utiliza cuando es importante saber el orden de los elementos.

</aside>

```html
<ol> <!-- order list -->
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
</ol>
```

- `<ol>` → `type=""`
    
    Define el tipo de numeración
    
    `1` (números)
    
    `A` (letras mayúsculas)
    
    `a` (letras minúsculas)
    
    `I` (números romanos mayúsculos)
    
    `i` (números romanos minúsculos)
    
- `<ol>` → `start="#"`
    
    Define el número desde donde comienza la numeración.
    
- `<ol>` → `reversed`
    
    Invierte el orden de la numeración (de mayor a menor).
    

![image.png](zExtra/Imagenes/Programming/HTML/image%202.png)