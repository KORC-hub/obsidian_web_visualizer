
Esta estructura corresponde a la metodología **CRISP-DM**, el estándar más utilizado para ejecutar proyectos de ciencia de datos.

## Fase 1: Comprensión del Negocio (Business Understanding)

Esta fase se centra en entender los objetivos y requisitos del proyecto desde una perspectiva comercial.
### Metas Comerciales y Analíticas

- Se identifica qué desea lograr el cliente realmente. _Ejemplo:_ Reducir la fuga de clientes.
- Este objetivo se traduce a metas analíticas técnicas.  _Ejemplo:_ Predecir la probabilidad de abandono basándose en el historial de transacciones.
### Entrega de Métricas

Se deben definir:

- **Criterios de Éxito del Negocio**
    - Métricas medibles.  _Ejemplo:_ Incrementar ventas en un 15%.

- **Criterios de Éxito de Minería de Datos**
    - Métricas técnicas.  _Ejemplo:_ Alcanzar un 90% de precisión.

---
## Fase 2: Comprensión de los Datos (Data Understanding)

El objetivo es familiarizarse con los datos, identificar problemas de calidad y descubrir hallazgos preliminares.
### Reunir Fuentes

- Adquisición de los datos necesarios.
- Documentación de:
    - Ubicación de las fuentes.
    - Métodos de recolección.
    - Problemas de acceso detectados.

### Quality Check (Verificación de Calidad)

Auditoría del dataset para evaluar:

- **Completitud:** valores faltantes.
- **Exactitud:** errores de entrada.
- **Consistencia:** formatos o códigos inconsistentes.
- **Ruido y outliers:** valores atípicos.

---

## Fase 3: Preparación de los Datos (Data Preparation)

Suele representar entre el **50% y 80% del esfuerzo total** del proyecto. Genera el dataset final para el modelo.
### Selección

- Definición de:
    - Tablas a incluir/excluir.
    - Registros relevantes.
    - Atributos útiles.

- Basado en:
    - Relevancia para las metas.
    - Calidad técnica.

### Limpieza

Mejora de la calidad del dato mediante:

- Imputación de valores faltantes:
    - Media
    - Modelos predictivos
    - Constantes

- Eliminación de ruido.
- Corrección de inconsistencias.

### Integración

- Unión de múltiples fuentes de datos.
- Agregaciones y consolidación.
- **Feature Engineering:**
    - Creación de variables derivadas. _Ejemplo:_ Calcular IMC a partir de peso y altura.

---

## Fase 4: Modelación (Modeling)

Se seleccionan y aplican técnicas de minería de datos, calibrando sus parámetros.
### Tareas Clave

- Selección de algoritmos:
    - Árboles de decisión
    - Redes neuronales
    - Regresión
    - SVM, etc.

- Diseño experimental:
    - División en conjunto de entrenamiento y test.

- Construcción y ajuste del modelo:
    - Optimización de hiperparámetros.

- Evaluación técnica:
    - Precisión
    - Robustez
    - Generalización

---

## Fase 5: Evaluación (Evaluation)

Se valida que el modelo sea útil para el negocio, no solo técnicamente correcto.
### Verificación de Supuestos y Objetivos

- Validación contra los criterios definidos en la Fase 1.

- Verificación de supuestos técnicos. _Ejemplo:_ Normalidad de residuos.

- Identificación de:
    - Datos omitidos.
    - Factores de negocio no considerados.
    - Posibles sesgos.

### Decisión Final

- Proceder al despliegue.
- Repetir fases anteriores.
- Cancelar el proyecto.

---

## Fase 6: Despliegue (Deployment)

El conocimiento generado se organiza e integra para su uso operativo.
### Integrar el Modelo

Puede implicar:

- Generación de un reporte final.

- Implementación en producción:
    - Servicio web.
    - API.
    - Sistema en tiempo real.

### Monitoreo del Drift (Deterioro)

Planificación de monitoreo para detectar:
- **Data Drift:** cambios en la distribución de variables de entrada.
- **Concept Drift:** cambios en la relación entre variables y el objetivo.

Permite:
- Recalibración periódica.
- Re-entrenamiento del modelo.
- Activación de alertas cuando el rendimiento cae bajo un umbral.

### Reporte Final

Incluye:
- Resultados obtenidos.
- Costos del proyecto.
- Lecciones aprendidas.
- Documentación técnica completa.









# Tu Turno: El Caso de la Cafetería

## Desafío: Una cafetería desea predecir qué clientes compran café + postre.
**Reflexiona**: ¿Cómo aplicarías las fases?
- **1. Negocio: ¿Cuál es el objetivo?** (Pista: Aumentar ticket promedio / ventas complementarias)
- **2. Datos: ¿Qué necesitas?** (Pista: Tickets de caja, hora, clima)
- **3. Prep: ¿Qué variable crearías?** (Pista: 'Frecuencia de compra semanal')
- **4. Modelo: ¿Qué usarías?** (Pista: Clasificador Binario / Asociación)

## Planteamiento

### Fase 1

Applicando la metodologia CRISP-DM la primera fase seria comprender el negocio para eso lo primero es entender el producto, el servicio, los clientes.
- La mayor ganancia viene del café o del postre?
- Los postres tienen mayor margen de ganancia en comparacion con el cafe?
- El cliente escoge todo por su cuenta (autoservicio)  o es atendido por una persona?
- Hay actualmente sugerencia activa del personal?
- Existen otros combos actualmente y cuales son sus precios?
- Se caracteriza por tener clientes frecuentes o compras aisladas?
- esta ubicada en una zona turistica?
- Hay horarios/dias en los que se registres mas compras que lo avitual?

tambien es importante entender el problema que se quiere solucionar para que el modelo que desarrollemos en etapas posteriores no resuelva algo que no es prioritario.
- *Problema*:  La tasa de compra del combo "cafe y postre" es muy baja, lo que genera una perdida de posibles ingresos.
- *Solucion planteada*: Crear un modelo que pueda predecir que tipo de clientes compran el combo "cafe y postre"
- *Metricas definidas*: con la aplicacion del modelo se busca.
	- aumentar la cantidad de combos "cafe + postre" en un 25% en tres meses
	- Aumentar la ganacia por venta en un 10% en un mes

### Fase 2: 

En esta face se busca entender qué datos existen, su calidad y qué patrones iniciales aparecen. para empezar necesitariamos los siguiente datos:

-  **Factura de venta** 
	- ID de ticket
	- Fecha
	- Hora
	- Productos comprados
	- Precio
	- Total

- **Información del cliente**
	- ID cliente
	- Frecuencia de visita
	- Historial de compras

- **Variables externas**
	- Clima
	- Día de la semana
	- Festivos

A estos datos se les realizaria una verificación de calidad donde se revisa si los datos son confiables. Se busca:
- **Valores faltante**s: compras sin hora o Productos mal registrados.
- **Inconsistencias**: Un mismo producto con nombres distintos ("Cheesecak", "Chesse cake", "Cake queso").
- **Duplicados**

para finalizar la fase 2, con estos datos podriamos realizar una exploracion inicial para entender el estado actual del negocio:
- **Distribuciones**
- **Outliers**
- **ganancias actuales**

### Fase 3

En esta fase ya contruiria el data set final para el modelo, en esta se hace procesos de selccion de variables importantes, limpieza de datos y la creacion de nuevas variables. 

En la etapa de seleccion podriamos tener las siguiente variables:
- Hora de compra
- Día de la semana
- compras totales
- Tipo de cliente (frecuente / nuevo)
- Número de productos comprados

En las parte de limpieza puede confundirse con la ya realizada en la fase dos, pero esta enfoca en evitar sesgo en entrenamiento del modelos.

para terminar la fase 3 se crean nuevas variables que le permirtan al modelo entender mucho mejor los datos, por ejemplo:
- Convertir hora en categorías (Mañana, Tarde, Noche)
- Crear variable binaria.
- Promedio de gasto por cliente.
- Cantidad total de productos.

### Fase 4:

Para este caso en particular escogeria la **regresión logística**, dado que es un modelo estadístico de clasificación que estima la **probabilidad** de que ocurra un evento binario, en este caso si se compra o no el combo "cafe  postre", ademas me permite entender qué variables influyen más, por ejemplo:

- El fin de semana aumenta la probabilidad? 
- Los clientes frecuentes compran más? 
- La franja horaria influye




