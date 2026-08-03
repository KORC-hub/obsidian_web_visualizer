# SQL (Structured Query Language)

> [!warning]
> Todos los ejemplos y funcionalidades se explican en base a Transact-SQL, es posible que algunas cosas no esten en otros SGDB

# Lenguajes basicos de SQL

SQL se divide en tres lenguajes principales que se utilizan para realizar diferentes tipos de tareas en una base de datos:

- Para usar DML y DQL es importante tener en cuenta las siguientes clausulas:

| Cláusula | Descripción |
| --- | --- |
| `FROM` | Especifica la tabla o tablas de las cuales se **seleccionan** los datos. |
| `WHERE` | **Filtra los datos** seleccionados en función de una condición específica. |
| `INTO` | Especifica la tabla en la cual se van a **insertar** las filas nuevas. |
| `VALUES` | **Especifica los valores** de las nuevas **filas** a insertar en las columnas correspondientes. |
| `SET` | **Especifica los valores** nuevos de las **columnas** que se van a actualizar. |


### DDL (Data Definition Language)

<aside>
➡️ **Definir y modificar la estructura de una base de datos, incluyendo la creación**, modificación y eliminación de tablas, vistas, índices, procedimientos almacenados y otros objetos de la base de datos.

</aside>

- CREATE
    - Crear una **base de datos**:
	
    ```sql
    CREATE DATABASE mydatabase;
    ```
    
    - Crear una **tabla** en la base de datos:
    
    ```sql
    CREATE TABLE clientes (
    	clientes_id INT PRIMARY KEY,
    	nombre VARCHAR(50),
    	apellido VARCHAR(50),
    	email VARCHAR(100),
    	numero_telefono VARCHAR(20),
    	fecha_nacimiento DATE
    );
    ```
    
- ALTER
    
    Modificar el **tipo de datos** de una columna:
    
    ```sql
    ALTER TABLE clientes ALTER COLUMN numero_telefono VARCHAR(15);
    ```
    
    - Agregar una **columna** a una tabla existente:
    
    ```sql
    ALTER TABLE clientes ADD direccion VARCHAR(100);
    ```
    
    - Agregar **restricciones** a una tabla
    
    ```sql
    ALTER TABLE Clientes ADD CONSTRAINT PK_clientes PRIMARY KEY (id);
    ```
    
    **Nota**: `ALTER` es comúnmente utilizado para modificar la estructura de tablas, pero este comando tambien se puede utilizar en otros casos como lo son los índices, la base de datos, los usuarios y los esquemas.
    
- DROP
    - Eliminar una **tabla** existente:
    
    ```sql
    DROP TABLE clientes;
    ```
    
    - Eliminar una **base de datos** existente:
    
    ```sql
    DROP DATABASE GestorClientesDB;
    ```
    
- RENAME
    - Renombrar una **tabla**:
    
    ```sql
    ALTER TABLE old_table_name RENAME TO new_table_name;
    ```
    
    - Renombrar una **columna**:
    
    ```sql
    ALTER TABLE clientes RENAME COLUMN numero_telefono TO numero_celular;
    ```
    
- COMMENT
    - Agregar un comentario a una tabla:
    
    ```sql
    COMMENT ON TABLE clientes IS 'Tabla de clientes';
    ```
    
    - Agregar un comentario a una columna:
    
    ```sql
    COMMENT ON COLUMN clientes.email IS 'Correo electrónico del cliente';
    ```
    

### DCL (Data Control Language)

<aside>
➡️ Son utilizados para definir los **roles de usuario**, conceder o revocar permisos de **acceso a los objetos de la base de datos, garantizando que los datos estén protegidos** y se puedan acceder solo de manera adecuada y autorizada.

</aside>

- GRANT
    - Otorgar permisos a un usuario:
    
    ```sql
    GRANT SELECT, INSERT, UPDATE, DELETE ON clientes TO usuario1;
    ```
    
- REVOKE
    - Revoca los permisos que se han concedido previamente a un usuario específico:
    
    ```sql
    REVOKE INSERT, UPDATE ON clientes FROM usuario1;
    
    ```
    
- DENY
    - Niega a un usuario específico la capacidad de realizar una acción o conjunto de acciones:
    
    ```sql
    DENY DELETE ON clientes TO usuario1;
    ```
    
    La diferencia principal entre REVOKE y DENY es que REVOKE retira los permisos que se habían otorgado previamente, mientras que DENY niega explícitamente un permiso a un usuario o rol, incluso si se le había otorgado anteriormente.
    
    Por ejemplo, si un usuario tiene el permiso de SELECT en una tabla y luego se revoca ese permiso mediante un comando REVOKE, el usuario ya no tendrá acceso a esa tabla. Sin embargo, si se niega explícitamente el permiso de SELECT en la misma tabla a través de un comando DENY, el usuario no podrá acceder a la tabla, incluso si se le otorga el permiso de SELECT en el futuro a través de un comando GRANT o una función de rol.
    

### DML (Data Manipulation Language)

<aside>
➡️ **Manipular los datos,** permitiendo a los usuarios realizar cambios en los datos de manera **eficiente y segura, sin afectan la estructura de la base de datos.**

</aside>

- INSERT
    - **Inserta** nuevos registros en una tabla.
    
    ```sql
    INSERT INTO productos (nombre, precio) VALUES ('camiseta', 25);
    ```
    
- UPDATE
    - **Actualiza** los datos de uno o más registros en una tabla.
    
    ```sql
    UPDATE productos SET precio = 20 WHERE id = 1;
    ```
    
    **Nota**: Si no se da una condicion modificara la columna en todos los registros de esa tabla.
    
- DELETE
    - **Elimina** registros de una tabla.
    
    ```sql
    DELETE FROM pedidos WHERE fecha < '2022-01-01';
    ```
    
    **Nota**: Si no se da una condicion eliminara todos los registros de esa tabla.
    
- TRUNCATE
    - **Elimina** todos los registros de una tabla de manera rápida, sin afectar la estructura de la tabla.
    
    ```sql
    TRUNCATE TABLE ventas;
    ```
    

### DQL (Data Query Language)

<aside>
➡️ **Traer los datos que están almacenados en las tablas.**

</aside>

- SELECT
    
    **Recupera** datos de una o varias tablas y los muestra en un resultado de consulta.
    
    ```sql
    SELECT * FROM clientes;
    SELECT nombre, direccion FROM clientes;
    ```
    
    | Cláusula | Descripción |
    | --- | --- |
    | `GROUP BY` | **Agrupa los datos** seleccionados en función de una o varias columnas, y calcular agregados (como `SUM`, `COUNT`, `AVG`) para cada grupo. |
    | `HAVING` | **Filtra** los grupos seleccionados en función de una **condición específica** sobre los agregados calculados con `GROUP BY`. |
    | `ORDER BY` | **Ordena** los datos seleccionados en función de **una o varias columnas**, ya sea en orden `ASC` o `DESC`. |
    | `DISTINCT` | eliminará las filas duplicadas en el conjunto de resultados basado en las columnas especificadas. |

# Data type comparative


> [!info]
> Todas las descripciones estan basadas en datos de SQLSever, “**✅**” solo indica que hay variables similares en esos SGBD. Para mayor informacion acerca de como se implementan cada uno en su SGBD consultar: [MySQL](https://www.databasestar.com/sql-data-types/), [PostgreSQL](https://www.databasestar.com/sql-data-types/), [MariaDB](https://mariadb.com/kb/en/sql-server-and-mariadb-types-comparison/), [SQLite](https://sqlite.org/datatype3.html)


### Numeric

| Data type (SQLServer)                     | Description                                                                                | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| ----------------------------------------- | ------------------------------------------------------------------------------------------ | ----- | ----- | ---------- | ------- | ------ |
| `BIT`                                     | Tipo de dato entero, puede tomar 1, 0 o NULL. A menudo se utiliza como booleano.           | 1     | **✅** |            |         |        |
| `TINYINT`                                 | Integer value                                                                              | 1     | **✅** |            | **✅**   |        |
| `SMALLINT`                                | Valor entero                                                                               | 2     | **✅** | **✅**      | **✅**   |        |
| `INT`  /  `INTEGER`                       | Valor entero                                                                               | 4     | **✅** | **✅**      | **✅**   | **✅**  |
| `SMALLMONEY`                              | Representa valores monetarios                                                              | 4     |       |            |         |        |
| `REAL`                                    | Synonym for FLOAT(24)                                                                      | 4     | **✅** | **✅**      |         | **✅**  |
| `FLOAT(n)`                                | Approximate number, with “n” is the number of bits used to store the value. Default is 53. | 4-8   | **✅** |            | **✅**   |        |
| `BIGINT`                                  | Valor entero                                                                               | 8     | **✅** | **✅**      | **✅**   |        |
| `MONEY`                                   | Representa valores monetarios                                                              | 8     |       | **✅**      |         |        |
| `DECIMAL(p,s)`  /  `NUMERIC(p,s)` / `DEC` | Utiliza la precisión "p" que es el número total de dígitos decimales                       | 5-17  | **✅** | **✅**      | **✅**   |        |

### **Character**

> [!info]
> La N en las palabras `NCHAR`, `NVARCHAR` y `NTEXT` significa National, dado que estos pueden almacenar caracteres de múltiples alfabetos, utilizando la codificación Unicode. Tambien VAR ⇒ Tamaño variable 



| Data type(SQLSever) | Description | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| --- | --- | --- | --- | --- | --- | --- |
| `CHAR(n)` | "n" es el número de bytes entre 1 y 8,000. caracteres específico (ej.  latin1, utf8). | n | **✅** | **✅** | **✅** |  |
| `BINARY(n)` | Datos binarios de longitud fija con una longitud de "n" bytes. | n | **✅** |  |  |  |
| `VARCHAR(n)`  / `CHARACTER VARYING` | Cadena de tamaño variable. caracteres específico (ej.  latin1, utf8). | n + 2B | **✅** | **✅** | **✅** |  |
| `VARBINARY` / `BINARY VARYING` | Datos binarios de longitud variable con una longitud de "n" bytes. | n + 2B | **✅** |  |  |  |
| `NCHAR(n)` | Usa UTF-16, por lo que usa dos bytes por carácter | 2n |  |  | **✅** |  |
| `NVARCHAR(n)` | Usa UTF-16, por lo que usa dos bytes por carácter | 2n + 2B |  |  | **✅** |  |
| `TEXT` | Datos no Unicode de longitud variable. Está en desuso, en su lugar  `VARCHAR(MAX)` |  | **✅** | **✅** | **✅** | **✅** |
| `NTEXT` | Está en desuso, en su lugar  `NVARCHAR(MAX)` |  |  |  | **✅** |  |

### **Date**

| Data type(SQLSever) | Description | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| --- | --- | --- | --- | --- | --- | --- |
| `DATE` | Define y almacena un valor de fecha | 3 | **✅** | **✅** | **✅** |  |
| `TIME(s)` | Hora del día, sin zona horaria. "s" ⇒ # dígitos para la fracción de segundos | 3-5 | **✅** | **✅** | **✅** |  |
| `SMALLDATETIME` | Fecha y hora. Los segundos son siempre 0, y no hay segundos fraccionarios. | 4 |  |  | **✅** |  |
| `DATETIME2(s)` | Fecha y hora, mayor rango que `DATETIME`.  "s" ⇒ # dígitos para la fracción de segundos | 6-8 |  |  | **✅** |  |
| `DATETIME` | Fecha y hora, con segundos fraccionarios. | 8 | **✅** |  | **✅** |  |
| `DATETIMEOFFSET(s)` | Fecha y hora, con zona horaria. "s" ⇒ # dígitos para la fracción de segundos | 8-10 |  |  | **✅** |  |

# SQL Functions

## **Aggregate**

- `SUM()`
    
    Calcula la **suma** de los valores en una columna **numérica**.
    
- `COUNT()`
    
    Retorna el **numero** de filas que cumplen con algun **criterio especifico** (los valores **NULL** no se cuentan).
    
    `COUNT` en sí nunca devuelve `NULL`, pero si la consulta (`WHERE`) no devuelve filas, el valor final en tu consulta principal sería `NULL`. se puede solucionar con `ISNULL()` 
    
- `MIN()`
    
    Encuentra el valor **mínimo** en una columna.
    
- `MAX()`
    
    Encuentra el valor **máximo** en una columna.
    
- `AVG()`
    
    Calcula el **promedio de los valores** en una columna numérica.
    

## **Math**

- `ABS(number)`
    
    Devuelve el **valor absoluto** de un numero.
    
- `ROUND(n , #decimal)`
    
    **Redondea** un numero a una cantidad de **decimales especifico** (si no se le pasa la cantidad de decimales lo toma como 0).
    
- `SQRT(number)`
    
    Devuelve la **raiz cuadrad**a de un numero.
    
- `POWER(base , exponent)`
    
    **Eleva un numero** a un exponente en concreto.
    
- `CEILING(number)`
    
    Devuelve el menor número entero mayor o igual
    
    ```sql
    CEILING(3.25) 
    -- return 4
    ```
    
- `FLOOR(number)`
    
    Devuelve el mayor número entero menor o igual.
    
    ```sql
    FLOOR(3.25) 
    -- return 3
    ```
    

## **Date and time**

- `GETDATE()`
    
    Consiste tanto en la fecha como en la hora actual.
    
- `DATEPART(datepart , date)`
    
    
    - datepart
        
        
        | **datepart** | **Abbreviations** |
        | --- | --- |
        | `year` | `yy`, `yyyy` |
        | `month` | `mm`, `m` |
        | `day` | `dd`, `d` |
        | `week` | `wk`, `ww` |
        | `Weekday`  | `dw`, `w` |
        | `hour` | `hh` |
        | `minute` | `mi`, `n` |
        | `second` | `ss`, `s` |
    - `YEAR(date)`
        
        Devuelve el año correspondiente a una fecha.
        
    - `MONTH(date)`
        
        Devuelve el mes correspondiente a una fecha.
        
    - `DAY(date)`
        
        Devuelve el dia correspondiente a una fecha.
        
- `DATEADD(datepart , number , date)`
    
    Devualve la **fecha modificada en n periodos**, se le pasa por parametro el **intervalo** que puede ser `year`, `month` o `day`; un **numero** indicando la cantidad de periodos(funciona con numeros negativos, dando fechas inferiores), y por ultimo la **fecha a modificar**.
    
- `DATEDIFF(datepart , date ,  date )`
    
    concretar la diferencia entre la fecha o la hora a través de las dos fechas mencionadas.
    
- `DATENAME(datepart , date)`
    
    Devuelve el nombre especificado de la fecha
    

## **Conversion**

- `CAST(@variable/data AS datatype)`
    
    Convierte una expresión de un tipo de datos a otro.
    
- `CONVERT(datatype, @variable/data)`
    
    Es la misma que la función de reparto, convierte una expresión, solo la sintaxis es diferente. **Es específica de SQL Server**
    
- `PARSE(@variable/data AS datatype)`
    
    Ideal para conversiones que requieren interpretación cultural, aunque puede ser menos eficiente.
    
    ```sql
    SELECT PARSE('24 juillet 2023' AS DATE USING 'fr-FR');
    -- return 2023-07-24
    ```
    
- ISNULL(ifIsNull, new_value )

## String

### Manipulation

- `LEN(string)`
    
    Devuelve la longitud de una cadena.
    
- `CONCAT(strings)`
    
    Concatenar dos o más cadenas.
    
    ```sql
    SELECT CONCAT ('Learn', ' - ','SQL');
    ```
    
- `LTRIM()`
    
    Remueve los **espacio en blanco a la izquierda** de la cadena.
    
- `RTRIM()`
    
    Remueve los **espacio en blanco a la derecha** de la cadena.
    
- `REPLACE(string , old_string , new_string)`
    
    Reemplaza todas la ocurrencias de un string en una cadena con un nuevo string.
    

### Conversion

- `LOWER(string)`
    
    Devuelve la cadena en **minusculas**.
    
- `UPPER(string)`
    
    Devuelve la cadena en **MAYUSCULAS**.
    

### Substrings

- `REPLICATE(string , integer)`
    
    Repite una cadena un numero especifico de veces.
    
- `LEFT(string , integer)`
    
    Extrae varias caracteres de una cadena empezando desde la **Izquierda**.
    
- `RIGHT(string,integer)`
    
    Extrae varias caracteres de una cadena empezando desde la **derecha**.
    
- `SUBSTRING(string , start , length)`
    
    Extrae algunos caracteres de una cadena.
    

Además de lo anterior la clausula `HAVING` se agrego a SQL porque la clausula `WHERE` no se podia usar con funciones agregadas, las diferencias entre estas dos son:

| `HAVING` | `WHERE` |
| --- | --- |
| Opera sobre un grupo de registros. | Opera sobre registros individuales. |
| Establece una condición sobre un grupo de registros. | Establece una condición usando registros individuales, aquellos que cumplan con esta condición serán seleccionados |

La clausula `HAVING`  va por lo general acompañada de un `GROUP BY`, aunque hayan diferencias entre las dos, esto no quiere decir que no puedan estar en una misma consulta.

```sql
SELECT nombre_columna(s) FROM nombre_tabla
WHERE condición GROUP BY nombre_columna(s)
HAVING condicion ORDER BY nombre_columna(s);
```

# Sub-queries

Una subconsulta es una **consulta dentro de otra consulta** SQL. Mas especificamente, una subconsulta es una instrucción `SELECT` **anidada** dentro de otra instrucción `SELECT`, `SELECT INTO`, `INSERT INTO`, `DELETE`, o `UPDATE` o dentro de otra subconsulta. Por ultimo, las subconsultas deben de estar **dentro de parentesis** y no se puede utilizar `ORDER BY` en una subconsulta.

Se puede utilizar tres formas de sintaxis para crear una subconsulta:

- **■** Usando `ANY`, `ALL`, `SOME` o alguna funcion de agregado.
    
    En esta forma de subconsulta se utiliza comparadores como `<`, `>`, `=`, `<=`, `>=`, `!=`, dado que sabemos que la subconsulta va a devolver una sola columna o un solo valor.
    
    |  | `ANY` | `ALL` | `SOME` |
    | --- | --- | --- | --- |
    | La expresión es verdadera si: | **Al menos uno** de los valores cumple la condición especificada. | **Solo si todos** los valores cumplen la condición especificada. | Es una alternativa a `ANY` que se encuentra en algunos SGBD. |
    
    Ejemplo de subconsulta con `ANY`, donde se quiere encontrar todos los productos cuyo precio unitario sea mayor que el precio unitario máximo en una subconsulta:
    
    ```sql
    SELECT NombreProducto, PrecioUnitario FROM Productos
    WHERE PrecioUnitario > ANY (SELECT PrecioUnitario FROM Productos);
    ```
    
- **■** Usando `[NOT] IN`.
    
    En esta forma se utiliza la expresión `IN` para verificar si un valor está presente o no en un conjunto de valores que se pueden encontrar en una sola columna.
    
    Ejemplo de subconsulta con `NOT IN` donde se encuentran todos los empleados que no están asignados a ningún proyecto:
    
    ```sql
    SELECT NombreEmpleado FROM Empleados
    WHERE EmpleadoID NOT IN (SELECT EmpleadoID FROM AsignacionesProyecto);
    ```
    
- **■** Usando `[NOT] EXISTS`
    
    Esta forma se utiliza para verificar si existe al menos una fila que cumple una condición en una subconsulta.
    
    Por ejemplo, puedes encontrar todos los clientes que han realizado al menos un pedido:
    
    ```sql
    SELECT NombreCliente FROM Clientes
    WHERE EXISTS (SELECT * FROM Pedidos WHERE Clientes.ClienteID = Pedidos.ClienteID);
    ```
    
    **Nota:** La diferencia entre `ANY` y `EXISTS` depende de lo especifico que se quiera ser, si solo se quiere comparar valores específicos con múltiples resultados, `ANY` es más apropiado. Pero si simplemente se quiere verificar si existen registros relacionados en una subconsulta, `EXISTS` es mejor.
    

# Multi-table query

- **■** INNER JOIN
    
    Es la sentencia JOIN por defecto, y consiste en c**ombinar cada fila de una tabla con cada fila de la otra tabla**, seleccionado aquellas filas que **cumplan una determinada condición.**
    
    ```sql
    SELECT e.Nombre as NombreEmpleado, d.Nombre as NombreDepartamento
    FROM Empleados e
    INNER JOIN Departamentos d ON e.DepartamentoID = d.DepartamentoID;
    ```
    
    Cabe aclarar una diferencia entre hacer un `JOIN` con `ON` o `WHERE`, si se hace con `ON` la condicion se aplican antes de que se realice la combinación, mientras que las condiciones con `WHERE` se aplican al conjunto de resultados combinado. Por lo tanto, se utiliza `ON` para definir las condiciones de unión y `WHERE` para aplicar condiciones adicionales de filtrado si es necesario.
    
- **■** LEFT JOIN
    
    Devolverá las filas de la **primera tabla**, incluso aunque no cumplan la condición.
    
    ```sql
    SELECT a.column1, a.column2, b.column1, b.column2
    FROM table_A a LEFT JOIN table_B b
    ON a.column1 = b.column1
    ORDER BY a.column1;
    ```
    
- **■** RIGHT JOIN
    
    Devolverá las filas de la **segunda tabla**, incluso aunque no cumplan la condición.
    
    ```sql
    SELECT a.column1, b.column1, b.column2
    FROM table_A a RIGHT JOIN table_B b
    ON a.column1 = b.column1
    ORDER BY a.column1;
    ```
    
- **■** SELF JOIN
    
    La tabla se une a sí misma.
    
    ```sql
    SELECT a.column1, b.column1, b.column2
    FROM table_A a, table_A b
    ON a.column1 = b.column1
    ORDER BY a.column1;
    ```
    
- **■** CROSS JOIN
    
    El producto cartesiano obtiene **todas las posibles concatenaciones** de filas de la primera tabla con filas de la segunda tabla.
    
    ```sql
    SELECT e.Nombre as NombreEmpleado, d.Nombre as NombreDepartamento
    FROM Empleados e
    CROSS JOIN Departamentos d;
    ```
    

- **■** UNION
    
    Se obtiene una nueva tabla con las filas de la primera y las filas de la segunda. En este caso la tabla resultante tiene las mismas columnas que la primera tabla (que son las mismas que las de la segunda tabla).
    
    ```sql
    SELECT id AS [identificacion], nombre FROM tabla1
    UNION
    SELECT documento, nombre FROM tabla2
    ORDER BY id
    ```
    
    Hay que tener en cuenta lo siguiente:
    
    - Las dos c**onsultas deben tener el mismo número de columnas** pero las columnas pueden llamarse de diferente forma y ser de tipos de datos distintos, aunque **los tipos de datos deben ser compatibles en términos de conversión implícita,** osea que, solo si es del tipo `varchar` a `char`, mas no diferencia muy grandes como `int` a `varchar`, en el ultimo caso se debe de hacer una conversion con `CAST`
    - Las columnas del resultado se llaman como las de la primera consulta.
    - **Por defecto la unión no incluye filas repetidas**, si alguna fila está en las dos tablas, sólo aparece una vez en el resulta. Si se quiere optener todos los registros incluyendo los duplicados se utiliza `UNION ALL`.
    - Se puede unir más de dos tablas, repitiendo la palabra `UNION`
    - Se puede utilizar `ORDER BY`
        
        
- **■** EXCEPT
    
    Devuelve los registros del primer `SELECT` que **no se encuentran** en el segundo `SELECT`.
    
    ```sql
    SELECT ID, Nombre FROM Empleados
    EXCEPT
    SELECT ID, Nombre FROM ExEmpleados;
    -- devuelve las filas de la tabla "Empleados" que no se encuentran en la tabla "ExEmpleados".
    ```
    
- **■** INTERSECT
    
    Devuelve los registros del primer `SELECT` que **se encuentran** en el segundo `SELECT`. y tiene las mismas condiciones que la `UNION`.
    
    ```sql
    SELECT idfab, idproducto FROM productos
    INTERSECT
    SELECT id, producto FROM pedidos
    ```
    

# Views

# Functions and **Stored Procedures**

En T-SQL existen las funciones y los procedimientos almacenados, ambos son muy parecidos ya que comparten el mismo objetivo, que es el de ejecutar un bloque de código para hacer una determinada tarea, pero hay diferencias claves. 

- **■**  Creation
    
    Los bloques BEGIN y END son obligatorios en una función, mientras que el procedimiento almacenado no los requiere si es solo una línea de instrucciones. El valor de retorno de un procedimiento almacenado es opcional, pero una función debe devolver un valor.
    
    **Function:**
    
    ```sql
    CREATE FUNCTION f_NombreFuncion(@param1 int(10), )
    RETURNS varchar(20) -- valores de retorno
    AS
    BEGIN 
    		-- SQL_statements
    	 RETURN 'Hello world' -- retorno
    END
    ```
    
    **Stored Procedures:**
    
    ```sql
    CREATE PROCEDURE sp_NombreProcedimiento @param1 int(10)
    AS
    SELECT * FROM Customers WHERE age = @param1 -- SQL_statements
    ```
    
    Como conclusión los procedimientos almacenados son más flexibles, mientras que las funciones tienen una funcionalidad y estructura más rígida.
    
- **■  Invoke**
    
    
    **Function:**
    
    Para una función es necesario hacer uso de un select y especificar su **esquema** (por lo general es dbo(database owner)):
    
    ```sql
    select dbo.f_NombreFuncion() as [alias] 
    ```
    
    **Stored Procedures:**
    
    ```sql
    exec sp_NombreProcedimiento
    execute sp_NombreProcedimiento
    execute dbo.sp_NombreProcedimiento
    sp_NombreProcedimiento
    ```
    
- **■  Variable**
    
    En un procedimiento almacenado y una función se puede usar variables para hacer operaciones y devolver un valor:
    
    **Function:**
    
    ```sql
    CREATE FUNCTION dbo.f_ConVariable(@variable real)
    RETURNS real
    AS
    BEGIN
    	RETURN  @variable
    END
    ```
    
    **Stored Procedures:**
    
    ```sql
    CREATE PROCEDURE sp_Convariables
    @variable real
    as
    select @variable as [alias]
    ```
    
    La gran diferencia viene con la reusabilidad que tienen cada uno, por un lado para poder utilizar el valor de retorno para concatenar o hacer una operación mediante un procedimiento de almacenado es necesario crear otra variable por fuera y asignarle el valor de retorno, por otra parte la función nos permite utilizar ese valor de retorno.
    
    Una ventaja de los procedimientos almacenados es que puede obtener varios parámetros mientras que, en las funciones, solo se puede devolver una variable (función escalar) o una tabla (funciones con valores de tabla).
    
- **■**  Return tables
    
    
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
    
    **Stored Procedures:**
    
    ```sql
    
    ```
    
- **■  Nesting**
    
    No puede invocar procedimientos dentro de una función. Pero, por otro lado, en un procedimiento se puede invocar funciones y procedimientos almacenados.
    

**Nota:** Existen muchos [procedimientos almacenados](https://learn.microsoft.com/es-es/sql/relational-databases/system-stored-procedures/system-stored-procedures-transact-sql?view=sql-server-ver16) y [funciones](https://learn.microsoft.com/es-es/sql/relational-databases/system-functions/system-functions-category-transact-sql?view=sql-server-ver16) propios del sistema que se pueden utilizar.

# Triggers

- **■  Creation**
    
    ```sql
    CREATE TRIGGER trig_nameTrigger ON {tabla_name | vista_name }
          {FOR|AFTER|INSTEAD OF} {[INSERT][,][UPDATE][,][DELETE]} 
          AS 
          BEGIN
          sentencia_sql  
          END
    ```
    
    Cuando se está haciendo un trigger para un INSERT se guarda la información en una tabla temporal llamada inserted, por otra parte si se está haciendo un trigger para un DELETE se guarda la información de eliminada en una tabla temporal ‘deleted’, en caso de UPDATE no existe una tabla temporal llamada ‘updated’ en este caso el nuevo dato se guarda en inserted y el dato que estaba se guarda en deleted.
    
- **■**  Alter trigger
    
    ```sql
    ALTER TRIGGER trig_nameTrigger ON {tabla_name | vista_name }
          {FOR|AFTER|INSTEAD OF} {[INSERT][,][UPDATE][,][DELETE]} 
          AS 
          BEGIN
          sentencia_sql  
          END
    ```
    
- **■**  Disable and Enable  trigger
    - Un trigger
    
    ```sql
    [DISABLE/ENABLE] TRIGGER trigger_name ON table_name;
    
    ```
    
    - Todos los triggers de una tabla
    
    ```sql
    ALTER TABLE table_name [DISABLE/ENABLE] TRIGGER ALL;
    ```
    
    - Todos los triggers
    
    ```sql
    [DISABLE/ENABLE] TRIGGER ALL ON ALL SERVER;
    ```
    
- **■**  Drop trigger
    
    ```sql
    DROP TRIGGER trigger_name;
    ```
    

**Nota:** Una tabla puede tener un máximo de tres triggers: uno de actualización, uno de inserción y uno de eliminación. además a diferencia de un procedimiento almacenado este no retorna ni recibe parámetros

# Extra

[SGBD](SGBD.md)

[Diagrama E-R](Diagrama%20E-R.md)

[Diagrama fisico](Diagrama%20fisico.md)

[**ACID Properties**](ACID.md)