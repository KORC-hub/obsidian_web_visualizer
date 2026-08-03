
> [!info]
> Generation → **Storage** → Ingestion → **Storage** → Transformation → **Storage** → Serving
# # Data Storage

(Algunos autores, como Reis & Housley en _Fundamentals of Data Engineering_, ponen Storage como un eje transversal que atraviesa todas las etapas, no como un paso secuencial. La secuencia lógica de flujo de datos es: Generation → Ingestion → Storage → Transformation → Serving.)

El almacenamiento de datos en el ciclo de vida de la ingeniería se refiere a dónde y cómo se persisten los datos después de ser generados, ingeridos o transformados. La elección del sistema de almacenamiento depende de los patrones de acceso, el volumen de datos, los requisitos de latencia y el coste. Las opciones van desde bases de datos relacionales hasta almacenamiento de objetos, lagos de datos y almacenes columnares.


Star schema
Snow schema

OLAP


- **S3**:
    - Formatos de archivo: Parquet/ORC (columnar) vs CSV/JSON (row-based) — por qué Parquet es el estándar en DE
    - Particionamiento (organizar S3 por fecha/categoría para performance y costo)
    - Ciclo de vida de objetos (lifecycle policies, storage tiers)

- **NoSQL**:
    - Mongo
    - DynamoDB 

- Data Lake vs Data Warehouse vs Lakehouse (concepto que conecta storage con serving)
    - Table formats modernos: Iceberg / Delta Lake / Hudi (permiten "lakehouse" sobre S3)

- RDS/Aurora (esto es OLTP, técnicamente pertenece más a `01-generation` como fuente, pero se documenta aquí como tipo de storage relacional gestionado)