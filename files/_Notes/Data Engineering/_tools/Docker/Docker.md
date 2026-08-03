# Docker

Docker agiliza el ciclo de vida del desarrollo al permitir que los desarrolladores trabajen en entornos estandarizados que utilizan contenedores locales que proporcionan sus aplicaciones y servicios.

Docker está escrito en el lenguaje de programación Goy toma ventaja de varias características del kernel de Linux para ofrecer su funcionalidad. Docker utiliza una tecnología llamada `namespaces` para proporcionar el espacio de trabajo aislado llamado el contenedor. 

## Arquitectura Docker

![[Pasted image 20260709011325.png|735]]


- <u>Docker daemon</u> (`dockerd`) escucha las solicitudes de API de Docker y administra Docker objetos como imágenes, contenedores, redes y volúmenes.

> [!note]
> "daemon" es un término general de sistemas operativos, que es un proceso que se ejecuta en segundo plano, normalmente esperando solicitudes o realizando tareas de forma continua, sin que un usuario interactúe directamente con él.


- <u>Docker client</u> (`docker`) es la forma en que interactúan los usuarios con Docker. Cuando utiliza comandos como `docker run` , el cliente los envía órdenes a dockerd, que las ejecuta.

- <u>Registros de Docker</u> almacena imágenes de Docker. Docker Hub es un registro público que cualquiera puede usar, ademas Docker busca imágenes en Docker Hub de forma predeterminada. 

## Objetos Docker

- [[Image]]
- [[Container]]
- [[Volume]]
- [[Network]]

## Ejemplos interesantes


### Crear una maquina con Ubuntu utilizando un solo comando

Ejecuta un `ubuntu` contenedor y se conecta de forma interactiva a su sesión de línea de comandos local, en la que se puede utilizar comando de [[Bash]]

```bash
docker run -i -t ubuntu /bin/bash
```


## Temas Avanzados

- [[Dockerfile]]
- [[docker-compose]]
- [[Publishing]]