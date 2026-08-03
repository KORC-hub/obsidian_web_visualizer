# SQL Functions

## Aggregate

- **`SUM()`** — Calcula la **suma** de los valores en una columna numérica.
- **`COUNT()`** — Retorna el número de filas que cumplen con algún criterio específico (los valores `NULL` no se cuentan). `COUNT` en sí nunca devuelve `NULL`, pero si la consulta (`WHERE`) no devuelve filas, el valor final en tu consulta principal sería `NULL`. Se puede solucionar con `ISNULL()`.
- **`MIN()`** — Encuentra el valor mínimo en una columna.
- **`MAX()`** — Encuentra el valor máximo en una columna.
- **`AVG()`** — Calcula el promedio de los valores en una columna numérica.

## Math

- **`ABS(number)`** — Devuelve el valor absoluto de un número.
- **`ROUND(n, #decimal)`** — Redondea un número a una cantidad de decimales específica (si no se le pasa la cantidad de decimales, la toma como 0).
- **`SQRT(number)`** — Devuelve la raíz cuadrada de un número.
- **`POWER(base, exponent)`** — Eleva un número a un exponente en concreto.
- **`CEILING(number)`** — Devuelve el menor número entero mayor o igual.

    ```sql
    CEILING(3.25)
    -- return 4
    ```

- **`FLOOR(number)`** — Devuelve el mayor número entero menor o igual.

    ```sql
    FLOOR(3.25)
    -- return 3
    ```

## Date and time

- **`GETDATE()`** — Consiste tanto en la fecha como en la hora actual.
- **`DATEPART(datepart, date)`**

  | datepart | Abbreviations |
  | --- | --- |
  | `year` | `yy`, `yyyy` |
  | `month` | `mm`, `m` |
  | `day` | `dd`, `d` |
  | `week` | `wk`, `ww` |
  | `Weekday` | `dw`, `w` |
  | `hour` | `hh` |
  | `minute` | `mi`, `n` |
  | `second` | `ss`, `s` |

  - `YEAR(date)` — Devuelve el año correspondiente a una fecha.
  - `MONTH(date)` — Devuelve el mes correspondiente a una fecha.
  - `DAY(date)` — Devuelve el día correspondiente a una fecha.

- **`DATEADD(datepart, number, date)`** — Devuelve la fecha modificada en n periodos. Se le pasa por parámetro el intervalo (`year`, `month` o `day`), un número indicando la cantidad de periodos (funciona con números negativos, dando fechas inferiores), y por último la fecha a modificar.
- **`DATEDIFF(datepart, date, date)`** — Concreta la diferencia entre la fecha o la hora a través de las dos fechas mencionadas.
- **`DATENAME(datepart, date)`** — Devuelve el nombre especificado de la fecha.

## Conversion

- **`CAST(@variable/data AS datatype)`** — Convierte una expresión de un tipo de datos a otro.
- **`CONVERT(datatype, @variable/data)`** — Es la misma función de reparto que `CAST`, solo que la sintaxis es diferente. Es específica de SQL Server.
- **`PARSE(@variable/data AS datatype)`** — Ideal para conversiones que requieren interpretación cultural, aunque puede ser menos eficiente.

    ```sql
    SELECT PARSE('24 juillet 2023' AS DATE USING 'fr-FR');
    -- return 2023-07-24
    ```

- **`ISNULL(ifIsNull, new_value)`**

## String

### Manipulation

- **`LEN(string)`** — Devuelve la longitud de una cadena.
- **`CONCAT(strings)`** — Concatena dos o más cadenas.

    ```sql
    SELECT CONCAT('Learn', ' - ', 'SQL');
    ```

- **`LTRIM()`** — Remueve los espacios en blanco a la izquierda de la cadena.
- **`RTRIM()`** — Remueve los espacios en blanco a la derecha de la cadena.
- **`REPLACE(string, old_string, new_string)`** — Reemplaza todas las ocurrencias de un string en una cadena con un nuevo string.

### Conversion

- **`LOWER(string)`** — Devuelve la cadena en minúsculas.
- **`UPPER(string)`** — Devuelve la cadena en MAYÚSCULAS.

### Substrings

- **`REPLICATE(string, integer)`** — Repite una cadena un número específico de veces.
- **`LEFT(string, integer)`** — Extrae varios caracteres de una cadena empezando desde la izquierda.
- **`RIGHT(string, integer)`** — Extrae varios caracteres de una cadena empezando desde la derecha.
- **`SUBSTRING(string, start, length)`** — Extrae algunos caracteres de una cadena.
