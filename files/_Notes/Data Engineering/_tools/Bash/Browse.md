# Browse - ver e inspeccionar contenido

## `cat [file]`

> [!note] Descripción Se utiliza para visualizar, unir y crear archivos.

**`> [file_name]`** — Crear un archivo. Presiona **CTRL + D** para salir del archivo.

**`< [file_name]`** — Mostrar el contenido de un archivo. Si el nombre del documento tiene espacios, se puede encerrar en comillas o poner un backslash al final de cada palabra menos en la última.

```bash
cat "spaces in this filename"
cat spaces\ in\ this\ filename
```

**`source.txt > destination.txt`** — Redirigir la salida a otro archivo. Si el archivo de destino no existe, el comando lo creará; si existe, lo sobrescribirá.

**`source.txt >> destination.txt`** — Agregar el contenido al archivo destino.

**`source1.txt source2.txt > destination.txt`** — Concatenar múltiples archivos en uno solo.

Opciones:

- `-n` : Mostrar números de línea
- `-s` : Suprimir líneas vacías repetidas
- `-b` : Mostrar líneas no vacías con números de línea al inicio de cada una (anula `-n`)

## `file`

> [!note] Descripción Se utiliza para determinar el tipo de un archivo.

```bash
# para un archivo
file file.txt

# para todos los archivos de la carpeta
file ./*
```

## `strings [file]`

> [!note] Descripción Utilizado para buscar y mostrar las cadenas de texto imprimibles en archivos binarios o en archivos de texto que contienen caracteres no imprimibles.
