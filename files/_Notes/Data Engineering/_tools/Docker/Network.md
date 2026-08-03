# Network

```docker title:"[COMMAND] Para ver las redes creadas"
docker network ls
```

```docker title:"[COMMAND] Para crear una red"
docker network create [NETWORK_NAME]
```

## Asignar red

```docker title:"[COMMAND] Para crear una red"
docker run -d --network [NETWORK_NAME] [IMAGE]
```

- Si no se especifican puertos con `-p` el container no puede ser visto desde el host ya que no hay puertos abiertos