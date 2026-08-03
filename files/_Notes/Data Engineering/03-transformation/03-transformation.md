
> [!info]
> Generation → Storage → Ingestion → Storage → **Transformation** → Storage → Serving
# Data Transformation

a

- **ETL vs ELT** 
- Motores de transformación en AWS:
    - AWS Glue (Spark serverless)
    - EMR (Spark/Hadoop gestionado, para cargas pesadas)
    - Athena (SQL directo sobre S3, transformaciones ligeras)
- **Modelado de datos**:
    - Modelado dimensional (Kimball): star schema, tablas de hechos y dimensiones
    - Slowly Changing Dimensions (SCD tipo 1 y 2)
- dbt (herramienta de transformación tipo SQL, muy usada sobre Redshift/Athena)
- Calidad de datos: validaciones, deduplicación, manejo de nulos