
Status: Idk

<aside>
📖

Si se coloca una **`r`** antes de una cadena, se indica que se trata de una **cadena cruda** o **raw string**. Los caracteres especiales dentro de la cadena, como la barra invertida (**`\`**), no se interpretan sino que se toman literalmente.

</aside>

<aside>
💡

Un DataFrame es una estructura de datos compuesta por filas y columnas

</aside>

## CSV and TEXT

```python
csv = pd.read_csv(r"data.csv") # read data from csv file
table = pd.read_table(r"data.txt") # read text and csv files 
```

`sep` es un parámetro en la función `read_csv()` y `read_table()` que especifica el carácter utilizado para separar los campos en el archivo. 

Por defecto, `read_csv()` asume que el separador es una coma `(,)`, pero puedes cambiarlo según el formato del archivo que estás leyendo, por ejemplo puede estar separado por tabuladores `(\t)`. 

Otros separadores comunes incluyen espacios en blanco `(\s)`, puntos y comas `(;)`, o dos puntos `(:)`, dependiendo del formato del archivo.

## JSON

```python
json = pd.read_json(r"data.json")
```

## Excel

```python
excel = pd.read_excel(r"data.xlsx")
```

podemos especificar que hoja del archivo de excel queremos traer con el parametro `sheet_name =””`