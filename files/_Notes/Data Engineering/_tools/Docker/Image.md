# Image

Una imagen es una plantilla de solo lectura con instrucciones para crear un contenedor. A menudo, una imagen se basa en otra imagen, con algunos datos adicionales personalización.

Para crear tu propia imagen, creas un Dockerfile con una sintaxis sencilla para definir los pasos necesarios para crear la imagen y ejecutarla eso. Cada instrucción en un Dockerfile crea una capa en la imagen.


```docker title:"[COMMAND] Para ver las imagenes creadas"
docker images
```

https://hub.docker.com/

```docker title:"[COMMAND] Para descargar una imagen desde el registro (Docker Hub)"
docker pull [image name from registry]
```

```docker title:"[COMMAND] Para borrar una imagen que no se esté usando"
docker rmi [ID]
```

