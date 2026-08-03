
> [!info]
> **Generation** → Storage → Ingestion → Storage → Transformation → Storage → Serving

# Data Generation

La generación de datos se refiere a cómo se producen y se originan los datos en bruto en un sistema. Los datos pueden provenir de interacciones con usuarios, registros de aplicaciones ([[Files]]), sensores IoT ([[Events]]), bases de datos ([[OLTP]]), [[_Notes/Data Engineering/01-generation/Source/API]]s y muchas otras fuentes. Entender de dónde provienen los datos y cómo se estructuran en la fuente es el punto de partida para cualquier diseño de pipeline de datos.

En esta etapa no se busca construir algo, si no que es entender el sistema fuente de los datos: qué modelo de datos tiene, qué formato usa, con qué frecuencia genera, si es mutable o append-only, si tiene garantías de orden, etc. Si esto no se entiende bien, todo lo que construyas después (ingestion, transformación) puede fallar.


- Tipos de fuentes de datos:
    - [[OLTP]] (bases transaccionales — la fuente más común)
    - [[_Notes/Data Engineering/01-generation/Source/API]]s (REST, paginación, rate limits)
    - Archivos ([[Files]]) (CSV, JSON, logs)
    - Eventos ([[Events]]) (clickstream, IoT, sensores)

- **CDC ([[Change Data Capture]])** — cómo capturar cambios de una base sin hacer polling completo

- Contratos de datos ([[data contracts]]) — qué garantiza el productor de los datos al consumidor

# Diccionario

### append-only

