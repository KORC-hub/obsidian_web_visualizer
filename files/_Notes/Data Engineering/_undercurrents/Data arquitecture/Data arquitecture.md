

## Entornos que normalmente arma un Data Engineer (contexto, no solo Dockerfile)

|Entorno|Stack típico|Contenedores involucrados|
|---|---|---|
|Orquestación|Airflow / Prefect / Dagster|webserver, scheduler, worker, postgres (metadata)|
|Procesamiento batch|Spark / PySpark|driver + workers, a veces con Hadoop/HDFS|
|Transformación|dbt sobre warehouse (Snowflake, BigQuery, Redshift)|1 contenedor dbt, no necesita cluster propio|
|Streaming|Kafka + consumers en Python|kafka, zookeeper, schema-registry, consumer app|
|Exploración/desarrollo|Jupyter + Pandas/PySpark|1 contenedor notebook, normalmente no va a producción|
|Base de datos local|Postgres / MySQL|imagen oficial sin build custom, solo `.env`|

