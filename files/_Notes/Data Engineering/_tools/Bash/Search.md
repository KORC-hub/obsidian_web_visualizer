# Search - buscar y filtrar

## `find [file]`

> [!note] Descripción Buscar archivos en una jerarquía de directorios.

> [!tip] Para ocultar errores, como _Permission denied_, se puede añadir al final del comando: `2>/dev/null`

- `-type` : Tipo de archivo a buscar. `f` para archivos y `d` para directorios
- `-name` : Buscar archivos y directorios por su nombre
- `-iname` : No distingue entre mayúsculas y minúsculas
- `-name "*.[extension]"` : Buscar archivos y directorios por su extensión
- `-empty` : Encontrar todos los archivos y directorios vacíos en el directorio actual
- `-user` : Se puede especificar el propietario del archivo
- `-group` : Se puede especificar el grupo al que pertenece el archivo

**`-size [+/-][N]`** — `[+]` para un tamaño mayor que N y `[-]` para un tamaño menor que N.

```bash
find . -size 50k
find . -size +1G
find . -size -20c
```

|Sufijo|Unidad|
|---|---|
|c|bytes|
|k|kilobytes|
|M|Megabytes|
|G|Gigabytes|

**`-[mtime, ctime, atime] [+/-] [N_days]`**

|Opción|Significado|
|---|---|
|mtime|hora de última modificación del archivo|
|ctime|hora de creación del archivo|
|atime|hora de último acceso al fichero|

```bash
# todos los archivos modificados en un
# plazo de 3 días
find . -type f -mtime -3
```

**`-[mmin, cmin, amin] [+/-] [N_minutes]`**

```bash
# todos los archivos que fueron
# modificados en los últimos 5 minutos
find . -type f -mmin -5

# se pueden especificar los límites superior e
# inferior juntos
find . -type f -mmin +20 -mmin -30
```

## `grep -[options] "pattern" [file/directory]`

> [!note] Descripción Se utiliza para buscar patrones específicos dentro de archivos o la salida de otros comandos.

- `grep "pattern" file.txt` : Busca el "pattern" en file.txt y muestra las líneas que coinciden
- `-r` : Busca en todos los archivos dentro de directory/ y subdirectorios
- `-i` : Realiza una búsqueda sin distinguir entre mayúsculas y minúsculas
- `-n` : Muestra el número de línea junto con la línea que coincide
- `-v` : Muestra las líneas que **no** coinciden con el "pattern"
- `-c` : Muestra el número de líneas que coinciden con el "pattern"

## `sort -[options]`

> [!note] Descripción Utilizado para ordenar líneas de texto en archivos o la salida de otros comandos.

- `sort file.txt` : Ordenar un archivo de texto de forma ascendente (default)
- `-r` : Ordenar en orden descendente
- `-n` : Ordenar numéricamente
- `-k [n]` : Ordenar por una columna específica
- `-f` : Ignorar las diferencias entre mayúsculas y minúsculas
- `-u` : Ordena y elimina líneas duplicadas

## `| uniq -[options]`

> [!note] Descripción Utilizado para eliminar líneas duplicadas consecutivas de un archivo o entrada estándar.

> [!tip] Se utiliza en conjunto con otro comando como `cat` o `sort`. Para esto se hace _piping_ con el operador `|`, que permite enviar datos de un programa a otro, donde la salida del programa de la izquierda es la entrada al programa de la derecha.

```bash
cat file.txt | uniq
```

- `-c` : Mostrar cuántas veces aparece cada línea (consecutivas)
- `-d` : Mostrar únicamente las líneas que aparecen más de una vez
- `-u` : Mostrar solo las líneas que no tienen duplicados
- `-i` : Ignorar diferencias entre mayúsculas y minúsculas