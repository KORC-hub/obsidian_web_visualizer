# DML (Data Manipulation Language)

> Manipular los datos, permitiendo a los usuarios realizar cambios en los datos de manera eficiente y segura, sin afectar la estructura de la base de datos.

## Tabla rápida de cláusulas

| Cláusula | Descripción                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| `FROM`   | Especifica la tabla o tablas de las cuales se **seleccionan** los datos.                        |
| `WHERE`  | **Filtra los datos** seleccionados en función de una condición específica.                      |
| `INTO`   | Especifica la tabla en la cual se van a **insertar** las filas nuevas.                          |
| `VALUES` | **Especifica los valores** de las nuevas **filas** a insertar en las columnas correspondientes. |
| `SET`    | **Especifica los valores** nuevos de las **columnas** que se van a actualizar.                  |
## INSERT

Inserta nuevos registros en una tabla.

```sql
INSERT INTO productos (nombre, precio) VALUES ('camiseta', 25);
```

## UPDATE

Actualiza los datos de uno o más registros en una tabla.

```sql
UPDATE productos SET precio = 20 WHERE id = 1;
```

> **Nota:** Si no se da una condición, modificará la columna en todos los registros de esa tabla.

## DELETE

Elimina registros de una tabla.

```sql
DELETE FROM pedidos WHERE fecha < '2022-01-01';
```

> **Nota:** Si no se da una condición, eliminará todos los registros de esa tabla.

## TRUNCATE

Elimina todos los registros de una tabla de manera rápida, sin afectar la estructura de la tabla.

```sql
TRUNCATE TABLE ventas;
```
