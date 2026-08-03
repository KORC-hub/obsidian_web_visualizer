
Status: Idk

# Filtering

 
Para filtrar un DataFrame por una condición (`>`, `<`, `=`, `>=`, `<=`), usamos corchetes indicando la columna y la condición:

```python
df[df["age"] <= 10]
```

Tambien podemos utilizar un método llamado `isin()` y le podemos pasar una lista de datos:

```python
specific_countries = ["Colombia","Brazil"]
df[df["Country"].isin(specific_countries)] 
```

```python
df[df["Country"].str.contains("united")]
```

## `loc[]`

Se puede pasar a `loc` un condición en lugar de un índice, y este traerá todas las filas que cumplen con esta condición:

```python
# df.loc[CONDITION, COlUMNS]
df.loc[df["value"] == 10, "value"]
```

## `filter()`

```python
df.filter(items=[], axis=0) # rows
df.filter(items=[], axis=1) # columns (default)
```

con el parámetro `like` podemos lograr lo mismo que nos da la propiedad `str.contains`

```python
df.filter(like="United", axis=0)
```

## `query()`

```python
df.query("'value' == 10")

mean_value = df["value"].mean()
df.query("'value' > @mean_value")
```

## `value_count()`

- `sort` : default True.
- `ascending`: default False.
- `dropna` : default True, si es false tiene en cuenta los valores `NaN`

# Ordering

`sort_values()` 

- `by` un string o una array de strings
- `ascending` (default) un boolean o un array para  cada valor especificado anteriormente en `by`