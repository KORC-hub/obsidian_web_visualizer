# Dockerfile

## Partes de un Dockerfile

### Imagen base

```dockerfile title="Fija la versión exacta de la imagen base"
FROM 3.14.6-slim-bookworm
```

Lista de Imagenes recurrentes:

| Imagen                                                                                              | Cuándo se usa                                            |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `debian:bookworm-slim` / `ubuntu:22.04`                                                             | Base custom cuando necesitas control total               |
| `3.14.6-slim-bookworm`                                                                              | Scripts ETL, servicios ligeros                           |
| `apache/airflow:2.9.3`                                                                              | Orquestación de pipelines (DAGs)                         |
| `apache/spark:3.5.1`                                                                                | Procesamiento distribuido (Spark standalone)             |
| `bitnami/spark:3.5`                                                                                 | Alternativa a la oficial de Spark                        |
| `jupyter/pyspark-notebook`                                                                          | Notebooks con PySpark + Pandas preinstalado              |
| `jupyter/scipy-notebook`                                                                            | Notebooks con stack científico (numpy, pandas, scipy)    |
| `ghcr.io/dbt-labs/dbt-[Next_options]`<br><br>- `postgres` <br>- `snowflake`<br>- `bigquery`<br><br> | Transformaciones con dbt                                 |
| `confluentinc/cp-kafka`                                                                             | Streaming / mensajería con Kafka                         |
| `postgres:18-bookworm`                                                                              | Base de datos local para desarrollo/testing de pipelines |
|                                                                                                     |                                                          |
 
### Configuracion del contenedor
 
```dockerfile title="Define o crea el directorio de trabajo dentro del contenedor"
WORKDIR /app
```

```dockerfile title="Copia archivos del host al contenedor"
# un solo archivo
COPY requirements.txt .
# todos los archivos
COPY . .
```

```dockerfile title="Variable de entorno"
# fija dentro de la imagen (visible en runtime)
ENV DB_PASSWORD=1
# variable de entorno solo disponible durante el build (no persiste en la imagen final)
ARG PYTHON_VERSION=3.11
```

```dockerfile title="Documenta qué puerto expone el contenedor (No sustituye -p en docker run)"
EXPOSE 8080
```

```dockerfile title="Declara un punto de montaje para datos persistentes"
VOLUME ["/app/data"]
```

```dockerfile title="Comando fijo que siempre corre"
# Fija el script que siempre corre
ENTRYPOINT ["python", "main.py"]
```

```dockerfile title="Da los argumentos por defecto que puedes overridear."
# `CMD` pasa como argumentos a `ENTRYPOINT`
CMD ["--env", "production"]
```

### Otros

```dockerfile title="Corre el contenedor con un usuario sin privilegios de root"
USER appuser
```

```dockerfile title="Verifica periódicamente si el contenedor sigue "sano""
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8080/health || exit 1
```



## `.dockerignore`

```text title="ejemplos"
__pycache__/
*.pyc
.venv/
.env
data/raw/
*.csv
*.parquet
.git/
notebooks/.ipynb_checkpoints/
```



## Docker build

```docker title:"[COMMAND] Para construir imagen propia usando un archivo Dockerfile"
docker build -t [nombre_personalizado] .
```

- `-t` : Para especificar la etiqueta que le queremos poner. Ejm: mi-api:v1 
	- `mi-api` : es el nombre del repositorio
	- `v1` : es la etiqueta (tag)

```dockerfile
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*
```

**Por qué importa en Data Engineering específicamente:** es común tener datasets de prueba (`.csv`, `.parquet`) en el repo local. Si no los excluyes, terminan copiados dentro de la imagen Docker, infla el tamaño de build y puede filtrar datos que no deberían estar en un registry de imágenes.

## Ejemplos completos por caso de uso

### Script ETL simple

```dockerfile title="Python"
FROM python:3.13-slim-bookworm
WORKDIR /app
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "main.py"]
```

```dockerfile title="Postgres"
FROM postgres:18-bookworm 
VOLUME ["/var/lib/postgresql/data"] 
EXPOSE 5432
```

### 5.2 Imagen custom de Airflow con DAGs propios

```dockerfile
FROM apache/airflow:2.9.3

USER root
RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*
USER airflow

COPY requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt \
    --constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.9.3/constraints-3.11.txt"

COPY dags/ /opt/airflow/dags/
```

**Nota:** las imágenes de Airflow corren por defecto con usuario `airflow`, no `root`. Si necesitas instalar paquetes de sistema (`apt-get`), tienes que cambiar a `USER root` temporalmente y volver a `USER airflow` después — dejar el contenedor corriendo como root es un hallazgo típico en revisiones de seguridad.

### 5.3 Job de PySpark

```dockerfile
FROM apache/spark:3.5.1

USER root
RUN pip install --no-cache-dir pyspark pandas pyarrow

COPY jobs/ /opt/spark-jobs/
WORKDIR /opt/spark-jobs

ENTRYPOINT ["spark-submit", "--master", "local[*]", "main.py"]
```

### 5.4 Proyecto dbt

```dockerfile
FROM ghcr.io/dbt-labs/dbt-postgres:1.8.0

WORKDIR /usr/app

COPY . .

ENTRYPOINT ["dbt"]
CMD ["run"]
```

**Nota sobre `ENTRYPOINT` + `CMD` aquí:** con este patrón, `docker run <imagen>` ejecuta `dbt run` por defecto, pero puedes overridearlo con `docker run <imagen> test` para correr `dbt test` sin tocar el Dockerfile.


