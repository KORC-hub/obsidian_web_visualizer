# Views

> [!warning]
> Esta sección estaba vacía (solo el título) en el documento original. No se inventó contenido — pendiente de completar.

# Functions and Stored Procedures

En T-SQL existen las funciones y los procedimientos almacenados. Ambos son muy parecidos ya que comparten el mismo objetivo: ejecutar un bloque de código para hacer una determinada tarea. Pero hay diferencias clave.

## Creation

Los bloques `BEGIN` y `END` son obligatorios en una función, mientras que el procedimiento almacenado no los requiere si es solo una línea de instrucciones. El valor de retorno de un procedimiento almacenado es opcional, pero una función debe devolver un valor.

**Function:**

```sql
CREATE FUNCTION f_NombreFuncion(@param1 int(10))
RETURNS varchar(20) -- valores de retorno
AS
BEGIN
    -- SQL_statements
    RETURN 'Hello world' -- retorno
END
```

**Stored Procedure:**

```sql
CREATE PROCEDURE sp_NombreProcedimiento @param1 int(10)
AS
SELECT * FROM Customers WHERE age = @param1 -- SQL_statements
```

Como conclusión, los procedimientos almacenados son más flexibles, mientras que las funciones tienen una funcionalidad y estructura más rígida.

## Invoke

**Function:**

Para una función es necesario hacer uso de un `SELECT` y especificar su esquema (por lo general `dbo`, database owner):

```sql
SELECT dbo.f_NombreFuncion() AS [alias]
```

**Stored Procedure:**

```sql
exec sp_NombreProcedimiento
execute sp_NombreProcedimiento
execute dbo.sp_NombreProcedimiento
sp_NombreProcedimiento
```

## Variable

En un procedimiento almacenado y una función se pueden usar variables para hacer operaciones y devolver un valor:

**Function:**

```sql
CREATE FUNCTION dbo.f_ConVariable(@variable real)
RETURNS real
AS
BEGIN
    RETURN @variable
END
```

**Stored Procedure:**

```sql
CREATE PROCEDURE sp_Convariables
@variable real
AS
SELECT @variable AS [alias]
```

La gran diferencia viene con la reusabilidad que tiene cada uno: para poder utilizar el valor de retorno de un procedimiento almacenado y concatenarlo o hacer una operación con él, es necesario crear otra variable por fuera y asignarle el valor de retorno. Por otra parte, la función permite utilizar ese valor de retorno directamente.

Una ventaja de los procedimientos almacenados es que pueden recibir varios parámetros, mientras que en las funciones solo se puede devolver una variable (función escalar) o una tabla (funciones con valores de tabla).

## Return tables

**Function:**

```sql
GO
CREATE FUNCTION function_name (@variable Int)
  RETURNS @returnTable Table
    (Column1 (dataType),
     Column2 (dataType),
     Column3 (dataType))
AS
  BEGIN
    IF @Variable IS NULL
      BEGIN
        INSERT INTO @returnTable (Column1, Column2, Column3)
        SELECT Column1, Column2, Column3
        FROM (table)
      END
    ELSE
      BEGIN
        INSERT INTO @returnTable (Column1, Column2, Column3)
        SELECT Column1, Column2, Column3
        FROM (table)
        WHERE column1 = @variable
      END
    RETURN
  END
```

**Stored Procedure:**

> [!warning]
> El documento original no tenía un ejemplo aquí (bloque de código vacío). No se inventó contenido — pendiente de completar.

## Nesting

No se pueden invocar procedimientos dentro de una función. Pero, por otro lado, en un procedimiento sí se pueden invocar funciones y otros procedimientos almacenados.

> **Nota:** Existen muchos [procedimientos almacenados](https://learn.microsoft.com/es-es/sql/relational-databases/system-stored-procedures/system-stored-procedures-transact-sql?view=sql-server-ver16) y [funciones](https://learn.microsoft.com/es-es/sql/relational-databases/system-functions/system-functions-category-transact-sql?view=sql-server-ver16) propios del sistema que se pueden utilizar.
