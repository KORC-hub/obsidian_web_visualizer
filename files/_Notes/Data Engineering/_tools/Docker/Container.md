# Container

Un contenedor es una instancia ejecutable de una imagen.

Puedes conectar un contenedor a una o más redes, adjuntarle almacenamiento o incluso crear uno nuevo imagen basada en su estado actual.

De forma predeterminada, un contenedor está relativamente aislado de otros contenedores y su máquina anfitriona. Se puede controlar qué tan aislada está la red y el almacenamiento de un contenedor u otros subsistemas subyacentes provienen de otros contenedores o de la máquina host.

## Gestión de Contenedores

```docker title:"[COMMAND] "
docker run -d -p hostport:containerport namespace/name:tag
```

- `-d` : Ejecuta el container en detached mode, lo cual no bloque la terminal porque se ejecuta en segundo plano
- `-d` : Permite que el host pueda ver el container por un puerto (`hostport:containerport`)
- `namespace/name` : Es el nombre de la imagen (por lo general en el formato `username/repo`)
- `tag` : Es la version de la imagen (por lo general es `latest`)

otras flags:

- `-e` : Define variables de entorno dentro del contenedor. Ejm: `-e NODE_ENV=development`
- `-v` : Crea o conecta un volumen de Docker para persistir datos.
- `-t` : sirve para ponerle un nombre y una etiqueta a la imagen que se esta construyendo.
- `--network none` : Hace que el container no se pueda conectar a una red externas (offline)
- `--name` : Para darle un nombre a el container, se puede utilizar este nombre en otros comandos como start, stop...
- `--memory` : Limita la memoria a la que tiene acceso el contenedor
- `--cpus` : limita el tiempo de CU que tiene el contenedor

> [!tip] Se pueden juntar las banderas para acortar el comando. Ejm: `-dp` en lugar de `-d -p` 

```docker title:"[COMMAND] Para ver los containers activos"
	docker ps
```

```docker title:"[COMMAND] Para detener un container"
docker stop [CONTAINER_ID] 
```

```docker title:"[COMMAND] Para detener un container de forma forazada, utilizar como ultimo recurso"
docker kill [CONTAINER_ID]
```

```docker title:"[COMMAND] Para detener todos contenedores activos a la vez"
docker stop $(docker ps -a -q)
```

- `-a` : trae todos los contenedores. tambien se ven los apagados
- `-q` : devuelve solo los ID 
- `$(...)`: Pasa esa lista de ID directamente al comando `docker stop`

```docker title:"[COMMAND] Para encender contenedor que ya estaba apagado"
docker start [CONTAINER_ID]
```

```docker title:"[COMMAND] Para eliminar contenedor apagado"
docker rm [CONTAINER_ID]
```

- `-f` : 

> 	[!danger]
> [COMMAND] Para limpiar todo lo que no se use (contenedores apagados, imágenes huérfanas, redes vacías):
> ```
> docker system prune -a
> ```
> 
> 

## Inspección y Diagnóstico


```docker title:"[COMMAND] Para ver los log qué está imprimiendo el contenedor"
docker logs [OPTIONS] [CONTAINER_ID]
```

- `-f` : Hace que terminal se quede abierta escuchando y mostrando registros nuevos en tiempo real
- `--tail [N]` : ver los ultimos n registros

```docker title:"[COMMAND] Para meterse dentro del contenedor corriendo"
docker exec -it [CONTAINER_ID] bash
```

- `-i` : Permite que lo que tú tecleas en tu computadora viaje hacia dentro del contenedor
- `-t` : Simula pantalla de terminal real dentro del contenedor
- -u
- Si `bash` no funciona, probar con `sh`, o `/bin/sh`

```docker title:"[COMMAND] Para ver detalles técnicos completos del contenedor (JSON)"
docker inspect [CONTAINER_ID]
```

```docker title:"[COMMAND] Para ver las estadisticas de los recursos que utiliza el container en tiempo real"
docker stats [OPTIONS] [CONTAINER...]
```

- Si solo ejecutas `docker stats`, te muestra los recursos que gasta todos los containers activos

```docker title:"[COMMAND] Para ver los procesos que se estan ejecutando en el contenedor"
docker top CONTAINER [ps OPTIONS]
```