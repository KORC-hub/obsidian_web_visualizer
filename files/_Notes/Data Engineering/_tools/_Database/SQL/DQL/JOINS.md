# Multi-table query

## INNER JOIN

Es la sentencia `JOIN` por defecto, y consiste en combinar cada fila de una tabla con cada fila de la otra tabla, seleccionando aquellas filas que cumplan una determinada condición.

```sql
SELECT e.Nombre as NombreEmpleado, d.Nombre as NombreDepartamento
FROM Empleados e
INNER JOIN Departamentos d ON e.DepartamentoID = d.DepartamentoID;
```

Cabe aclarar una diferencia entre hacer un `JOIN` con `ON` o `WHERE`: si se hace con `ON`, la condición se aplica antes de que se realice la combinación, mientras que las condiciones con `WHERE` se aplican al conjunto de resultados combinado. Por lo tanto, se utiliza `ON` para definir las condiciones de unión y `WHERE` para aplicar condiciones adicionales de filtrado si es necesario.

## LEFT JOIN

Devolverá las filas de la **primera tabla**, incluso aunque no cumplan la condición.

```sql
SELECT a.column1, a.column2, b.column1, b.column2
FROM table_A a LEFT JOIN table_B b
ON a.column1 = b.column1
ORDER BY a.column1;
```

## RIGHT JOIN

Devolverá las filas de la **segunda tabla**, incluso aunque no cumplan la condición.

```sql
SELECT a.column1, b.column1, b.column2
FROM table_A a RIGHT JOIN table_B b
ON a.column1 = b.column1
ORDER BY a.column1;
```

## SELF JOIN

La tabla se une a sí misma.

```sql
SELECT a.column1, b.column1, b.column2
FROM table_A a, table_A b
ON a.column1 = b.column1
ORDER BY a.column1;
```

## CROSS JOIN

El producto cartesiano obtiene todas las posibles concatenaciones de filas de la primera tabla con filas de la segunda tabla.

```sql
SELECT e.Nombre as NombreEmpleado, d.Nombre as NombreDepartamento
FROM Empleados e
CROSS JOIN Departamentos d;
```

## UNION

Se obtiene una nueva tabla con las filas de la primera y las filas de la segunda. En este caso, la tabla resultante tiene las mismas columnas que la primera tabla (que son las mismas que las de la segunda tabla).

```sql
SELECT id AS [identificacion], nombre FROM tabla1
UNION
SELECT documento, nombre FROM tabla2
ORDER BY id
```

Hay que tener en cuenta lo siguiente:

- Las dos consultas deben tener el mismo número de columnas, pero las columnas pueden llamarse de diferente forma y ser de tipos de datos distintos, aunque los tipos de datos deben ser compatibles en términos de conversión implícita. Es decir, solo si es del tipo `varchar` a `char`, mas no diferencias muy grandes como `int` a `varchar`; en el último caso se debe hacer una conversión con `CAST`.
- Las columnas del resultado se llaman como las de la primera consulta.
- Por defecto, la unión no incluye filas repetidas: si alguna fila está en las dos tablas, solo aparece una vez en el resultado. Si se quiere obtener todos los registros incluyendo los duplicados, se utiliza `UNION ALL`.
- Se puede unir más de dos tablas, repitiendo la palabra `UNION`.
- Se puede utilizar `ORDER BY`.

## EXCEPT

Devuelve los registros del primer `SELECT` que **no se encuentran** en el segundo `SELECT`.

```sql
SELECT ID, Nombre FROM Empleados
EXCEPT
SELECT ID, Nombre FROM ExEmpleados;
-- devuelve las filas de la tabla "Empleados" que no se encuentran en la tabla "ExEmpleados".
```

## INTERSECT

Devuelve los registros del primer `SELECT` que **se encuentran** en el segundo `SELECT`, y tiene las mismas condiciones que `UNION`.

```sql
SELECT idfab, idproducto FROM productos
INTERSECT
SELECT id, producto FROM pedidos
```
