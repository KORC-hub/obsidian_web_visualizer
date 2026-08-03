# Zip and unzip

## `gzip`

Utiliza el algoritmo de compresión DEFLATE, que combina dos técnicas de compresión: **LZ77** y **Huffman coding**.

|Técnica|Descripción|
|---|---|
|LZ77|Busca cadenas repetidas en el texto de entrada y las reemplaza con referencias a la aparición anterior de la cadena|
|Huffman coding|Codificación que asigna cadenas de bits más cortas a los caracteres más frecuentes y cadenas más largas a los menos frecuentes|

```bash
gzip file.txt # Compress
gunzip file.txt.gz # uncompress
gzip -d file.txt.gz # uncompress
```

## `bzip2`

Utiliza el algoritmo de compresión Burrows-Wheeler Transform (BWT), más eficiente en compresión que `gzip`, pero más lento. No realiza la compresión en sí misma, por lo que se suele utilizar junto con otros algoritmos como la codificación de Huffman o Run-Length Encoding.

```bash
bzip2 file.txt # Compress
bunzip2 file.txt.bz2 # uncompress
bzip2 -d file.bz2 # uncompress
```
