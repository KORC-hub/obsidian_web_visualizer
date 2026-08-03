
> [!info]
> Generation → Storage → **Ingestion** → Storage → Transformation → Storage → Serving

# Data Ingestion

La ingestion tiene como responsabilidad mover los datos de forma confiable, con integridad y con la menor pérdida o duplicación posible. No incluye limpieza de los datos; puede incluir validación estructural, como verificar que el formato o schema del dato entrante sea el esperado, pero no la corrección del contenido según reglas de negocio.

## Alcance de la ingesta

Existen dos paradigmas principales sobre cuándo ocurre la transformación respecto a la carga que pueden cambiar el alcance del como se aplica esta ingesta:

- [[ETL]] -> La ingesta y la transformación están fusionadas en un mismo proceso.
- [[ELT]] -> La ingesta queda desacoplada de cualquier lógica de negocio.

Esta segunda aproximación es la dominante en arquitecturas modernas de warehouse, por lo siguinte:

- El proceso de ingesta np necesita conocer las reglas de negocio, lo cual lo puede hacer más frágil. En cambio, la ingesta solo mueve bytes, nunca falla por razones de negocio.

- Si cargas crudo primero, ya tienes el dato guardados y puedes reintentar la transformación sin re-ingerir por algun error.

---
## Fechas de ingestion





La estrategia de ingesta depende del tipo de origen de los datos que se analizaron en la etapa anterior ([[01-generation|generacion]])
## Pull vs Push


| **PULL**                                                                                                                                                                                                                                                                                                                                                                                                        | **PUSH**                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el sistema de ingesta solicita activamente los datos a la fuente, controlando el momento y la frecuencia de la extracción.                                                                                                                                                                                                                                                                                      | la fuente envía los datos hacia el sistema de ingesta en el momento en que se generan.                                                                                                                                                                                             |
| **Cuando utilizar**:<br><br>- No se tienes control sobre el sistema fuente para que te notifique activamente.<br><br>- Se necesitas controlar la carga que ejerces sobre la fuente.<br><br>- El origen es un repositorio de datos en reposo (base de datos, archivos)<br><br>**Cuando NO utilizar**:<br><br>- Cambia con la frecuencia suficiente como para justificar que alguien te avise en cada cambio.<br> | **Cuando utilizar**:<br><br>- Se necesita reaccionar al dato en el momento en que ocurre<br><br>- Consultar periódicamente es ineficiente<br><br>- La fuente tiene la capacidad técnica de notificar<br><br>**Cuando NO utilizar**:<br><br>- Los dato de origen cambian lentamente |

Para escoger uno u otro se tendria que hacer la pregunta: ==¿el dato se define mejor como un estado que puedes consultar en cualquier momento, o como un evento que ocurre en un instante específico? ==


## Batch vs Streaming

### Batch

Los datos se mueven en bloques, de forma periódica o programada.

- Ventajas: menor complejidad de implementación y operación, menor costo computacional, mayor facilidad para depurar y reprocesar un lote completo ante un fallo.
- Desventajas: latencia alta entre la generación del dato y su disponibilidad en el destino.

### Streaming

Los datos se mueven de forma continua, procesados evento por evento o en intervalos muy cortos.

- Ventajas: baja latencia entre generación y disponibilidad del dato.
- Desventajas: mayor complejidad operativa, requiere manejo explícito de orden, particionamiento, estado y control de flujo; mayor costo de mantenimiento.

### Micro-batching

Aproximación intermedia donde un flujo continuo se procesa en lotes muy pequeños y frecuentes, combinando características de ambos enfoques.

La elección entre batch y streaming no debe basarse en preferencia tecnológica, sino en si la reducción de latencia genera un valor medible para el caso de uso. Si la latencia tolerable por el negocio es de horas, un enfoque batch suele ser preferible por su menor complejidad y costo.

## 5. Full snapshot vs incremental (CDC)

### Full snapshot

Se copia la totalidad de la fuente en cada ejecución. Es simple de implementar, pero su costo y tiempo de ejecución crecen junto con el tamaño de la fuente, por lo que resulta ineficiente para fuentes grandes o de alta frecuencia de cambio.

### Change Data Capture (CDC)

Patrón mediante el cual se capturan únicamente los cambios ocurridos en la fuente (inserciones, actualizaciones, eliminaciones) desde la última ingesta, en lugar de recargar la totalidad de los datos. Existen distintas formas de implementarlo:

- **Basado en logs de transacciones**: se leen los registros que la base de datos ya escribe internamente para garantizar durabilidad de sus transacciones. No requiere modificar la fuente ni generar carga adicional sobre ella, y permite capturar eliminaciones de forma confiable.
- **Basado en triggers**: se configuran disparadores en la base de datos que registran cada cambio en una tabla auxiliar de auditoría. Introduce carga adicional sobre el sistema transaccional en cada operación de escritura.
- **Basado en consultas por marca de tiempo**: se consultan únicamente los registros modificados después de la última ejecución, según una columna de fecha de actualización. No captura eliminaciones de forma nativa y depende de que dicha columna se mantenga correctamente en la fuente.

El método basado en logs de transacciones es generalmente considerado el más robusto, aunque requiere acceso a nivel de infraestructura de la base de datos, lo cual no siempre está disponible.

## 6. Patrones de confiabilidad

### Idempotencia

Propiedad de una operación por la cual ejecutarla múltiples veces produce el mismo resultado que ejecutarla una sola vez. Es relevante en ingestion porque los reintentos ante fallos son inevitables, y sin idempotencia, un reintento puede generar duplicación de datos.

### Garantías de entrega

- **At-most-once**: un mensaje se entrega como máximo una vez; puede perderse, pero nunca se duplica.
- **At-least-once**: un mensaje se entrega una o más veces; nunca se pierde, pero puede duplicarse. Es la garantía más común en sistemas distribuidos.
- **Exactly-once**: un mensaje se procesa exactamente una vez. Es la garantía más deseable pero también la más difícil de sostener de extremo a extremo.

En la práctica, la combinación de entrega at-least-once junto con idempotencia en el consumidor suele utilizarse para obtener el efecto de exactly-once sin la complejidad de garantizarlo a nivel de infraestructura.

### Dead-letter queue

Mecanismo mediante el cual los mensajes que fallan reiteradamente su procesamiento se desvían a una cola separada, en lugar de bloquear el flujo principal con reintentos indefinidos, permitiendo su inspección o reprocesamiento posterior.

### Backpressure

Situación en la que un consumidor no puede procesar los datos a la misma velocidad en que el productor los genera. Requiere mecanismos de control de flujo para evitar acumulación descontrolada o pérdida de datos.

### Checkpointing

Registro periódico del progreso de procesamiento (por ejemplo, la posición hasta la cual se ha consumido un flujo de datos), que permite reanudar el procesamiento desde ese punto ante un fallo, sin reprocesar todo el flujo desde el inicio.

## 7. Schema evolution y schema drift

- **Schema evolution**: cambios controlados y esperados en la estructura de los datos con el paso del tiempo, que un sistema de ingesta bien diseñado debe poder tolerar sin interrumpir su funcionamiento.
- **Schema drift**: cambios no controlados o inesperados en la estructura de los datos de la fuente, que representan un riesgo para la calidad e integridad del dato y deben ser detectados y alertados, no tolerados silenciosamente.

## 8. Frecuencia e implicaciones de latencia

La frecuencia de ingesta debe alinearse con la latencia que el caso de uso realmente requiere:

- Ingesta en tiempo real: adecuada cuando existe valor de negocio directo en la disponibilidad inmediata del dato.
- Ingesta near real-time: un punto intermedio entre latencia y complejidad operativa.
- Ingesta batch periódica: adecuada cuando el negocio tolera un retraso de horas, priorizando simplicidad y menor costo.

---

## Diccionario

- **Batch**: procesamiento o ingesta de datos en bloques periódicos.
- **Streaming**: procesamiento o ingesta continua de datos, en tiempo real o casi real.
- **Micro-batching**: procesamiento de un flujo continuo en lotes muy pequeños y frecuentes.
- **Pull**: patrón en el que el consumidor solicita activamente los datos a la fuente.
- **Push**: patrón en el que la fuente envía activamente los datos al consumidor.
- **Full snapshot / full load**: copia completa de una fuente de datos en cada ejecución.
- **CDC (Change Data Capture)**: patrón para capturar únicamente los cambios de una fuente desde la última ingesta.
- **CDC basado en logs**: implementación de CDC que lee el registro de transacciones interno de la base de datos.
- **CDC basado en triggers**: implementación de CDC mediante disparadores que registran cambios en una tabla auxiliar.
- **CDC basado en marca de tiempo**: implementación de CDC mediante consultas filtradas por fecha de última modificación.
- **Log de transacciones**: registro que una base de datos mantiene internamente para garantizar durabilidad de sus operaciones.
- **Idempotencia**: propiedad de una operación cuyo resultado no cambia al ejecutarse múltiples veces.
- **At-most-once**: garantía de entrega en la que un mensaje puede perderse pero nunca duplicarse.
- **At-least-once**: garantía de entrega en la que un mensaje puede duplicarse pero nunca perderse.
- **Exactly-once**: garantía de entrega en la que un mensaje se procesa exactamente una vez.
- **Dead-letter queue**: cola donde se desvían los mensajes que fallan reiteradamente su procesamiento.
- **Backpressure**: desequilibrio entre la velocidad de generación y de procesamiento de datos que requiere control de flujo.
- **Checkpointing**: registro periódico del progreso de procesamiento para permitir reanudación ante fallos.
- **Offset**: posición que marca hasta dónde se ha consumido un flujo de datos.
- **Schema evolution**: cambios controlados y esperados en la estructura de los datos.
- **Schema drift**: cambios no controlados o inesperados en la estructura de los datos.
- **Data contract**: acuerdo explícito entre el equipo generador de datos y el consumidor sobre la estructura y semántica de los datos.
- **OLTP (Online Transaction Processing)**: sistemas optimizados para transacciones frecuentes de bajo volumen individual.
- **OLAP (Online Analytical Processing)**: sistemas optimizados para consultas analíticas sobre grandes volúmenes de datos.
- **Data lake**: repositorio de almacenamiento de datos crudos sin estructura forzada previa.
- **Data warehouse**: repositorio de datos estructurados optimizado para consultas analíticas.
- **Data catalog**: metadatos centralizados que describen qué datos existen, su estructura y ubicación.
- **Message queue**: sistema que almacena mensajes temporalmente entre productor y consumidor.
- **Message broker / streaming platform**: sistema que gestiona flujos de eventos entre múltiples productores y consumidores.
- **Rate limit**: restricción sobre la cantidad de solicitudes permitidas en un periodo de tiempo.
- **Reverse ETL**: proceso de mover datos desde el warehouse de vuelta hacia sistemas operacionales.