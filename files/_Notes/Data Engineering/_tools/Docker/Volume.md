# Volume

```docker title:"[COMMAND] Para ver los volumenes creados"
docker volume ls
```

```docker title:"[COMMAND] Para crear un volumen"
docker volume create [VOLUME_NAME]
```

```docker title:"[COMMAND] Para ver los detalles del volumen (JSON)"
docker volume inspect [VOLUME_NAME]
```

## Asignar Volumen

El flag `-v` permite persistir o compartir datos entre el Host (tu máquina) y el Contenedor. Docker decide qué hacer según cómo indiques el origen.

```docker title:"[COMMAND] Para asignar un valumen ya creado"
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -v [VOLUME_NAME] [IMAGE]
```

### Volúmenes Anónimos

Si solo especificas la ruta interna del contenedor, Docker crea un volumen automático con un nombre aleatorio.

```docker title:"[COMMAND] Para asignar un valumen a una ruta especifica"
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -v /[RUTA_CONTENEDOR] [IMAGE]
```

### Volúmenes Nombrados

Si especificas un nombre seguido de la ruta interna, Docker busca ese volumen en su sistema. Si no existe, lo crea.

La carpeta del contenedor se conecta directamente a ese espacio gestionado por Docker.

```docker title:"[COMMAND] Para asignar un valumen ya creado a una ruta especifica"
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -v [VOLUME_NAME]:/[RUTA_CONTENEDOR] [IMAGE]
```

## Bind Mounts

Si en lugar de un nombre especificas una ruta absoluta (usando `$PWD` o rutas como `/home/...`), Docker conecta un archivo o carpeta de tu máquina local directamente con el contenedor.

```docker title:"[COMMAND] Para asignar un archivo o carpeta a una ruta especifica"
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -v $PWD/[ARCHIVO_O_CARPETA_LOCAL]:/[RUTA_CONTENEDOR] [IMAGE]
```

> [!note] 
> Si usas una ruta absoluta (`/` o `$PWD`), es un Bind Mount, ya que usa tu disco duro. Si usas texto plano, es un Volumen (lo gestiona Docker de forma interna).

