
> [!info]
> Generation → Storage → Ingestion → Storage → Transformation → Storage → **Serving**
# Data Serving

El servicio de datos es el último paso en el proceso de ingeniería de datos. Una vez que los datos se almacenan en tus arquitecturas de datos y se transforman en un formato coherente y útil, es hora de sacarles provecho. El servicio de datos se refiere a las diferentes formas en que los datos son utilizados por las aplicaciones y usuarios posteriores para crear valor. Existen muchas formas en que las empresas pueden extraer valor de los datos, incluyendo el entrenamiento de modelos de aprendizaje automático, análisis de BI y ETL inverso.

- **Data Warehouse:**
    - Amazon Redshift (y Redshift Serverless)
- **Query engines serverless:**
    - Athena (consultas SQL directas sobre S3)
- **BI / Visualización:**
    - QuickSight
- Reverse ETL (concepto: llevar datos ya procesados de vuelta a herramientas operativas, ej. CRM)