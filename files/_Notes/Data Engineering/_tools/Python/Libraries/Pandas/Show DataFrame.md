
Status: Idk

Por lo general cuando mostramos el DataFrame en la terminal, nos muestra los primeros y últimos 5 registros, esto se debe a una configuración que tiene pandas y que podemos modificar:

```python
pd.set_option("display.max.rows",235) 
pd.set_option("display.max.columns", 40)
# second parameter is the number of rows or columns that you need
```

```python
df = df.set_index("id")
```

Aunque si solo queremos mostrar las n primeras utilizamos el método `head()`, y para las n ultimas el método `tail()`, en ambos casos reciben como parámetro el numero de registros a mostrar:

```python
df.head(10)
df.tail(10)
```

Si queremos ver una columna en concreto utilizamos el nombre del DataFrame y dentro de corchetes como si fuera un array, ponemos entre comillas el nombre de la columna:

```python
df["column_name"]
```

## `loc[]`

Y para un registro en concreto utilizamos `loc` o `iloc`:

```python
# df.loc[INDEX, COlUMNS]
df.loc[10,"value"]
```

Se puede pasar un conjunto de indices:

```python
df.loc[["a","b","c"]]
```

## Metadata

mediante el método `info` del DataFrame, podemos ver  la cantidad de filas, cantidad de columnas, el tipo de dato de cada columna y el uso en memoria

```python
df.info()
# Example
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 428 entries, 0 to 427
# Data columns (total 4 columns):
#  #   Column          Non-Null Count  Dtype  
# ---  ------          --------------  -----  
#  0   index           428 non-null    int64  
#  1   identificacion  428 non-null    int64  
#  2   nombre_materia  428 non-null    object 
#  3   nota_final      428 non-null    float64
# dtypes: float64(1), int64(2), object(1)
# memory usage: 13.5+ KB

```

Aunque si solo necesito saber la cantidad de filas y columnas puedo utilizar la propiedad `shape` que me da una tupla donde el primer elemento es el numero de filas y el segundo el numero de columnas:

```python
print(df.shape)
# -> (234, 4)
```

## Create new columns

```python
df["new column"] = df["value"] * df["amount"]
```