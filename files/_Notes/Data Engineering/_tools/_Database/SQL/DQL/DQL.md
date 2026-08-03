# DQL (Data Query Language)

> Traer los datos que están almacenados en las tablas.

## Tabla rápida de cláusulas

| Cláusula | Descripción                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| `FROM`   | Especifica la tabla o tablas de las cuales se **seleccionan** los datos.                        |
| `WHERE`  | **Filtra los datos** seleccionados en función de una condición específica.                      |
| `INTO`   | Especifica la tabla en la cual se van a **insertar** las filas nuevas.                          |
| `VALUES` | **Especifica los valores** de las nuevas **filas** a insertar en las columnas correspondientes. |
| `SET`    | **Especifica los valores** nuevos de las **columnas** que se van a actualizar.                  |
## SELECT

Recupera datos de una o varias tablas y los muestra en un resultado de consulta.

```sql
SELECT * FROM clientes;
SELECT nombre, direccion FROM clientes;
```

| Cláusula | Descripción |
| --- | --- |
| `GROUP BY` | **Agrupa los datos** seleccionados en función de una o varias columnas, y calcula agregados (como `SUM`, `COUNT`, `AVG`) para cada grupo. |
| `HAVING` | **Filtra** los grupos seleccionados en función de una **condición específica** sobre los agregados calculados con `GROUP BY`. |
| `ORDER BY` | **Ordena** los datos seleccionados en función de **una o varias columnas**, ya sea en orden `ASC` o `DESC`. |
| `DISTINCT` | Elimina las filas duplicadas en el conjunto de resultados basado en las columnas especificadas. |

## HAVING vs. WHERE

La cláusula `HAVING` se agregó a SQL porque la cláusula `WHERE` no se podía usar con funciones agregadas. Las diferencias entre estas dos son:

| `HAVING` | `WHERE` |
| --- | --- |
| Opera sobre un grupo de registros. | Opera sobre registros individuales. |
| Establece una condición sobre un grupo de registros. | Establece una condición usando registros individuales; aquellos que cumplan con esta condición serán seleccionados. |

`HAVING` va por lo general acompañada de un `GROUP BY`, aunque haya diferencias entre las dos, esto no quiere decir que no puedan estar en una misma consulta.

```sql
SELECT nombre_columna(s) FROM nombre_tabla
WHERE condición GROUP BY nombre_columna(s)
HAVING condicion ORDER BY nombre_columna(s);
```
