# **Integracion de datos**

Combinar y armonizar datos de múltiples fuentes

## 1.Identificación de fuentes de datos


## 2. Extracción de datos
## 3. Mapeo de datos

creación de un esquema de mapeo que defina cómo se corresponden entre sí los elementos de datos de diferentes sistemas garantiza una alineación adecuada de los datos durante la integración.
## 4. Validación de datos y garantía de calidad 

(buscar procesos de garantía de calidad)
## 5. Transformación de datos: 

limpieza de datos, enriquecimiento de datos y normalización de datos.
## 6. Carga de datos


La carga de datos es cuando los datos transformados se cargan en un almacén de datos (data [[warehouse]]) o en cualquier otro destino deseado para su posterior análisis o generación de informes. El proceso de carga se puede realizar mediante carga por lotes ([[batch loading]]) o carga en tiempo real ([[real-time loading]]), según los requisitos.

## 7. Sincronización de datos


Actualizaciones periódicas o sincronización en tiempo real

## 8. Gobernanza y seguridad de datos


al integrar datos confidenciales o regulados, las prácticas de gobernanza de datos garantizan que los datos se manejen de conformidad con las regulaciones y los requisitos de privacidad. Se implementan medidas de seguridad adicionales para salvaguardar los datos durante la integración y el almacenamiento.

## 9. Gestión de metadatos

## 10. Acceso y análisis de datos




[[ELT]] 

[Extraer, cargar y transformar](https://www.ibm.com/think/topics/elt)

se utilizan comúnmente en proyectos de big data y procesamiento en tiempo real donde la velocidad y la escalabilidad son fundamentales.


[[ETL]]

[extraer, transformar, cargar (ETL)](https://www.ibm.com/think/topics/etl)

ELT suele tener la ventaja, ya que aprovecha el poder de los sistemas de almacenamiento de datos modernos. Por otro lado, las canalizaciones de datos ETL pueden ser una mejor opción en escenarios donde la calidad y la consistencia de los datos son primordiales


**La integración de datos en tiempo real**: la captura de datos modificados (change data capture -> CDC) 

**La integración de aplicaciones (API)*

**La virtualización de datos** implica la creación de una capa virtual que proporciona una vista unificada de los datos de diferentes fuentes, independientemente de dónde residan físicamente los datos.

**Con la integración de datos federados**, los datos permanecen en sus sistemas fuente originales y las consultas se ejecutan en estos sistemas dispares en tiempo real para recuperar la información requerida.



## data integration tools

**Enterprise service bus (ESB) and middleware**

**Data replication tools**

Data integration platforms as a service [iPaaS](https://www.ibm.com/think/topics/ipaas)

**Data quality and data governance tools**

**Herramientas CDC**



[[_Notes/Data Engineering/_tools/Python/Python|Python]]
[[_Notes/Data Engineering/_tools/_Database/SQL/SQL|SQL]]