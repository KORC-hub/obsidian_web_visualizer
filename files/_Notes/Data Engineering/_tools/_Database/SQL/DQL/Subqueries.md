# Sub-queries

Una subconsulta es una **consulta dentro de otra consulta** SQL. Más específicamente, una subconsulta es una instrucción `SELECT` anidada dentro de otra instrucción `SELECT`, `SELECT INTO`, `INSERT INTO`, `DELETE`, o `UPDATE`, o dentro de otra subconsulta. Las subconsultas deben estar **dentro de paréntesis** y no se puede utilizar `ORDER BY` en una subconsulta.

Se pueden utilizar tres formas de sintaxis para crear una subconsulta:

## Usando `ANY`, `ALL`, `SOME` o alguna función de agregado

En esta forma de subconsulta se utilizan comparadores como `<`, `>`, `=`, `<=`, `>=`, `!=`, dado que sabemos que la subconsulta va a devolver una sola columna o un solo valor.

| | `ANY` | `ALL` | `SOME` |
| --- | --- | --- | --- |
| La expresión es verdadera si: | **Al menos uno** de los valores cumple la condición especificada. | **Solo si todos** los valores cumplen la condición especificada. | Es una alternativa a `ANY` que se encuentra en algunos SGBD. |

Ejemplo de subconsulta con `ANY`, donde se quiere encontrar todos los productos cuyo precio unitario sea mayor que el precio unitario máximo en una subconsulta:

```sql
SELECT NombreProducto, PrecioUnitario FROM Productos
WHERE PrecioUnitario > ANY (SELECT PrecioUnitario FROM Productos);
```

## Usando `[NOT] IN`

En esta forma se utiliza la expresión `IN` para verificar si un valor está presente o no en un conjunto de valores que se pueden encontrar en una sola columna.

Ejemplo de subconsulta con `NOT IN` donde se encuentran todos los empleados que no están asignados a ningún proyecto:

```sql
SELECT NombreEmpleado FROM Empleados
WHERE EmpleadoID NOT IN (SELECT EmpleadoID FROM AsignacionesProyecto);
```

## Usando `[NOT] EXISTS`

Esta forma se utiliza para verificar si existe al menos una fila que cumple una condición en una subconsulta.

Por ejemplo, puedes encontrar todos los clientes que han realizado al menos un pedido:

```sql
SELECT NombreCliente FROM Clientes
WHERE EXISTS (SELECT * FROM Pedidos WHERE Clientes.ClienteID = Pedidos.ClienteID);
```

> **Nota:** La diferencia entre `ANY` y `EXISTS` depende de lo específico que se quiera ser. Si solo se quiere comparar valores específicos con múltiples resultados, `ANY` es más apropiado. Pero si simplemente se quiere verificar si existen registros relacionados en una subconsulta, `EXISTS` es mejor.
