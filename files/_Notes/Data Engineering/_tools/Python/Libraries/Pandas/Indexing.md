
Status: Idk

Cuando creamos un DataFrame y lo mostramos por consola, vemos que tenemos una columna de mas que es el index, podemos especificar que columna queremos que sea ese index:

```python
df.set_index("")
df.set_index(["",""])
```

```python
df.reset_index(inplace=True)
```

```python
df.sort_index(ascending=True) # default
```