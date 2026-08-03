# Docker Compose — Apuntes de Estructura


## Comandos 

### Managment

```bash title="Muestra qué servicios están corriendo"
docker-compose ps
```

### up

```bash title="Crea y arranca los contenedores. Si ya existen y nada cambió, los reutiliza tal cual"
docker-compose up -d
```

```bash title="Fuerza docker build en los servicios que usan build:"
docker-compose up -d --build
```

```bash title="Destruye y vuelve a crear los contenedores desde cero"
docker-compose up -d --force-recreate
```

### down

```bash title="Apaga todo lo que estaba corriendo y borra los contenedores y la red creada. Los volúmenes con nombre persisten"
docker-compose down
```

```bash title="Apaga todo lo que estaba corriendo, ademas borra los contenedores, la red creada y los volúmenes con nombre"
docker-compose down -v
```


## Estructura general 

```yaml title="Estructura general"
services:
  # contenedores
volumes:
  # los volúmenes con nombre que declaraste en los servicios
networks:
 # red local en la que se comunican los contenedores, si no se especifica toma la red del host
```

## Plantillas de Servicios

### servicio propio (dockerfile como base)

```yaml
services:
  api:
    build:
      context: ./api            # carpeta que se envía a Docker para el build 
      dockerfile: Dockerfile    # nombre del archivo (opcional si se llama "Dockerfile")
    container_name: api
    ports:
      - "8000:8000"             # [host]:[contenedor]
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/appdb
    volumes:
      - ./api:/app              # bind mount = [Host_dir]:[Container_dir]
    depends_on:                 # espera a que esos contenedores existan
      - postgres                 
    restart: unless-stopped     # reinicia el contenedor si se cae
```

### Postgres (`image`)

```yaml
services:
  postgres:
    image: postgres:18-bookworm                # Image
    container_name: postgres
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=appdb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data  # [Volume_name]:[Container_dir]
    restart: unless-stopped
```

### Redis (cache)

```yaml
services:
  redis:
    image: redis:7-alpine
    container_name: redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data # [Volume_name]:[Container_dir]
    restart: unless-stopped
```

### Kafka (streaming)

```yaml
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      - ZOOKEEPER_CLIENT_PORT=2181

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
    volumes:
      - kafka_data:/var/lib/kafka/data # [Volume_name]:[Container_dir]
```

## volumes

Regla práctica: `<servicio>_data` como convención, así se identifica de un vistazo a qué pertenece cada uno.

```yaml
volumes:
  postgres_data:
  redis_data:
  pgadmin_data:
  kafka_data:
```

los volúmenes con nombre (`postgres_data:`) los gestiona Docker y persisten aunque se borre el contenedor. Los _bind mounts_ (`./api:/app`) mapean una carpeta real de tu disco.
