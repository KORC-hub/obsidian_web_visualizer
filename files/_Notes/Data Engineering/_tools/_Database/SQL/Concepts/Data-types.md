# Comparativa de tipos de datos (Data types)

> [!info]
> Todas las descripciones están basadas en datos de SQL Server. "✅" solo indica que hay tipos similares en esos SGBD. Para más información sobre cómo se implementan en cada uno, consultar: [MySQL](https://www.databasestar.com/sql-data-types/), [PostgreSQL](https://www.databasestar.com/sql-data-types/), [MariaDB](https://mariadb.com/kb/en/sql-server-and-mariadb-types-comparison/), [SQLite](https://sqlite.org/datatype3.html).

## Numeric

| Data type (SQL Server) | Descripción | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| --- | --- | --- | --- | --- | --- | --- |
| `BIT` | Tipo de dato entero, puede tomar 1, 0 o NULL. A menudo se utiliza como booleano. | 1 | ✅ | | | |
| `TINYINT` | Integer value | 1 | ✅ | | ✅ | |
| `SMALLINT` | Valor entero | 2 | ✅ | ✅ | ✅ | |
| `INT` / `INTEGER` | Valor entero | 4 | ✅ | ✅ | ✅ | ✅ |
| `SMALLMONEY` | Representa valores monetarios | 4 | | | | |
| `REAL` | Synonym for FLOAT(24) | 4 | ✅ | ✅ | | ✅ |
| `FLOAT(n)` | Approximate number, con "n" como el número de bits usados para almacenar el valor. Default es 53. | 4-8 | ✅ | | ✅ | |
| `BIGINT` | Valor entero | 8 | ✅ | ✅ | ✅ | |
| `MONEY` | Representa valores monetarios | 8 | | ✅ | | |
| `DECIMAL(p,s)` / `NUMERIC(p,s)` / `DEC` | Utiliza la precisión "p", que es el número total de dígitos decimales | 5-17 | ✅ | ✅ | ✅ | |

## Character

> [!info]
> La N en `NCHAR`, `NVARCHAR` y `NTEXT` significa National, dado que estos pueden almacenar caracteres de múltiples alfabetos, usando codificación Unicode. También VAR ⇒ Tamaño variable.

| Data type (SQL Server) | Descripción | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| --- | --- | --- | --- | --- | --- | --- |
| `CHAR(n)` | "n" es el número de bytes entre 1 y 8,000. Caracteres específicos (ej. latin1, utf8). | n | ✅ | ✅ | ✅ | |
| `BINARY(n)` | Datos binarios de longitud fija con una longitud de "n" bytes. | n | ✅ | | | |
| `VARCHAR(n)` / `CHARACTER VARYING` | Cadena de tamaño variable. Caracteres específicos (ej. latin1, utf8). | n + 2B | ✅ | ✅ | ✅ | |
| `VARBINARY` / `BINARY VARYING` | Datos binarios de longitud variable con una longitud de "n" bytes. | n + 2B | ✅ | | | |
| `NCHAR(n)` | Usa UTF-16, por lo que usa dos bytes por carácter | 2n | | | ✅ | |
| `NVARCHAR(n)` | Usa UTF-16, por lo que usa dos bytes por carácter | 2n + 2B | | | ✅ | |
| `TEXT` | Datos no Unicode de longitud variable. Está en desuso; en su lugar `VARCHAR(MAX)`. | | ✅ | ✅ | ✅ | ✅ |
| `NTEXT` | Está en desuso; en su lugar `NVARCHAR(MAX)`. | | | | ✅ | |

## Date

| Data type (SQL Server) | Descripción | Bytes | MySQL | PostgreSQL | MariaDB | SQLite |
| --- | --- | --- | --- | --- | --- | --- |
| `DATE` | Define y almacena un valor de fecha | 3 | ✅ | ✅ | ✅ | |
| `TIME(s)` | Hora del día, sin zona horaria. "s" ⇒ # dígitos para la fracción de segundos | 3-5 | ✅ | ✅ | ✅ | |
| `SMALLDATETIME` | Fecha y hora. Los segundos son siempre 0, y no hay segundos fraccionarios. | 4 | | | ✅ | |
| `DATETIME2(s)` | Fecha y hora, mayor rango que `DATETIME`. "s" ⇒ # dígitos para la fracción de segundos | 6-8 | | | ✅ | |
| `DATETIME` | Fecha y hora, con segundos fraccionarios. | 8 | ✅ | | ✅ | |
| `DATETIMEOFFSET(s)` | Fecha y hora, con zona horaria. "s" ⇒ # dígitos para la fracción de segundos | 8-10 | | | ✅ | |
