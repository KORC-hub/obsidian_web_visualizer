Tag: #Operators 

<aside>
📖

Los operadores son expresiones ya que nos permiten producir nuevos valores.

</aside>

Además de los básicos: `+`, `-`, `*` , `/`, `%`, `**` ; también tenemos de **incremento** y **decremento**. Al igual que en P**ython** se puede utilizar `+=`, `-=`, `*=` , `/=`, `%=`, `**=`

### Increment:

```js
++a // sum before action
```

```js
a++ // sum after action
```

### Decrement:

```js
--a // subtracts before action
```

```js
a-- // subtracts after action
```

Los operadores de comparación: `>`, `>=`, `<` , `<=`, `==`, `!=` , Aunque estos dos últimos (`==` y `!=`) no se recomienda su uso para comparar tipos de datos, en su lugar se utiliza `===` y `!==` .

```js
let a = 10;
console.log(a == "10"); // true (igualdad por valor)
console.log(a === "10"); // false (igualdad por identidad)
```

Solo hay un valor en JavaScript que no es igual a sí mismo, y ese es `NaN` :

```js
console.log(NaN == NaN);
// -> false
```

### Logics:

```js
&& // AND
|| // OR
!  // NOT
```