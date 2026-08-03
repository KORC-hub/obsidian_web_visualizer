
¿Qué es el ISO/IEC/IEEE 29119?

Es un estandar internacional dado que esta soportado tanto por organismos internacionales de estandarizacion como lo es el ISO y el IEC, y por el IEEE (Instituto de Ingenieros Eléctricos y Electrónicos), pero realmente sabemos que es un estandar, ISO lo define como "Documentación que refleja acuerdos sobre productos, prácticas u operaciones por parte de organismos reconocidos a nivel nacional o internacional"

--- 

ISO/IEC/IEEE 29119 no es el único ni el primer estándar para pruebas de software, antes de este estándar  ya existían muchos estándares que tocan las pruebas de software. Como **Informacion en la diapositiva**

Pero muchos de estos estándares se superponen y contienen lo que parecen ser requisitos contradictorios con conflictos en definiciones, procesos y procedimientos.

A vista de esto no parece una mala idea realizar un estándar general y más actualizado, el cual no reinventará la rueda, sino que se basaría en lo mejor de las normas disponibles

---

En base a lo anterior se creo el estandar y se dividio en 4 partes inicialmente, aunque luego se le añadio la parte 5 que como vemos en el grafico no esta directamente relacionada con las 4 anteriores.

En la parte uno tenemos los conceptos y el vocabulario utilizo por lo general en las pruebas de software (las bases teoricas)

Despues tenemos la parte 2 que es la de procesos y es la mas importante y por eso esta en el centro del grafico, en diapositivas posteriores se vera el porque.

 La parte 3 es completamente de documentacion y define que documentos se debe de general, esta parte esta muy ligada a la Parte dos, dado que los resultados o actividades realizadas en este se clasifica y organiza en estos documentos.

La parte 4 nos plantea las tecnicas para realizar pruebas efectivas, mas adelante veremos algunas.

Introduce las pruebas automaticas basadas en palabras claves

---

No significa que solo incluya una lista de términos. Más bien, establece las bases conceptuales necesarias para entender y aplicar el estándar en su totalidad.

- Explica conceptos clave sobre pruebas de software:
	- Verificación: cumple requisitos especificados correctamente
	- Validación: satisface necesidades y expectativas del usuario 
	- Exhaustivas: Evaluación completa probando todas combinaciones posibles de entradas y escenarios.
	- Heurísticas: Estrategia basada en experiencia

- Relaciona las pruebas con modelos de ciclo de vida del software. (Waterfall, Incremental,  SCRUM o XP (Extreme Programming))

- Describe procesos detallados en otras partes del estándar: 
	- Planificación de pruebas (objetivos, alcance y estrategia)
    - Diseño de pruebas (casos de prueba en base a requerimientos)
    
- Pruebas basadas en riesgo (priorizan los casos segun la probabilidad y criticidad de un fallo)


¿Que beneficios nos da definir todo esto?

Definir claramente estos términos y procesos aporta múltiples beneficios. Asegura que todos, independientemente de su experiencia, comprendan el enfoque de las pruebas y puedan interpretar los resultados y llevar a cabo las pruebas sin dificultades, agilizando el proceso y la calidad del proceso de pruebas. Que de hecho es el siguiente tema 

---

Como vemos el proceso se divide en 3 partes:  **Proceso de pruebas organizacionales**, **Procesos de gestion de pruebas**, **Procesos de pruebas dinamicas**, en la siguiente diapositiva se ve mucho mejor que las componen:

---

- **Proceso de pruebas organizacionales**: Desarrollo del plan de pruebas, identificación de riesgos, diseño de la estrategia de pruebas, determinar el personal y la programación, etc.

- **Procesos de gestion de pruebas**: Supervisión de las pruebas. Como vemos va desde la planificacion, el monitoreo y control hasta la entrega final de un informe.

- **Procesos de pruebas dinamicas**: En esta parte es donde se llevan a cabo las pruebas como tal, dado que las **pruebas dinámicas** son aquellas en las que se ejecuta el software para validar su comportamiento en tiempo de ejecución. por eso es importante definir el diseño de la prueba, esto esta muy relacionado con la etapa 4, configurar el entorno de las pruebas, ejecutar la prueba y hacer un reporte de los incidentes. 
  
  Por cierto, ademas de las pruebas dinamicas existen las pruebas estaticas que no requieren ejecutar el software; en su lugar, se analizan los artefactos del desarrollo (código, documentación, diseños) para encontrar errores antes de la ejecución.

--- 

En este grafico se puede ver con mas claridad como interactuan cada una de las capas, la capa de gestion utiliza las estrategias y politicas ya definidas en la capa organizacional, pero como vemos esta puede cambiar dado que obtiene una retroalimentacion de la capa de gestion.

vemos que la capa de gestion se repite dos veces esto se da porque hay una parte que es a 

- **Nivel General (Macro)**: abarcan la planificación general, el control y el seguimiento, y la finalización. 

Pero en esta segunda parte es un 

- **Nivel Específico (Micro)** estos procesos deben ser instanciados en cada fase o tipo de prueba específica (por ejemplo, pruebas unitarias, de integración o de aceptación). Cada una de estas fases tiene su propio **plan de pruebas**, métricas y directrices de control, alineados con el plan general.

---

- **Técnicas de prueba basadas en especificaciones**: Se centran en los **requisitos y la funcionalidad**,  lo que el usuario espera que haga el sistema.

| Tecnica                             | Descripcion                                                                                                         | Ejemplo                                                                                                                                                                                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Partición de Equivalencia**       | Se divide el conjunto de datos en clases representativas. Se prueba un caso por cada clase, reduciendo redundancia. | un formulario que solo acepta edades entre **18 y 65 años**<br><br>- **Menos de 18** (inválido) → Se prueba con 17.<br>    <br>- **Entre 18 y 65** (válido) → Se prueban valores como 18, 30 y 65.<br>    <br>- **Más de 65** (inválido) → Se prueba con 66. |
| **Análisis de Valores Límite**      | Evalúa los extremos del rango de entrada, donde suelen ocurrir errores. Útil                                        | Para un campo de contraseña de 8-16 caracteres, se prueban 7 (inválido), 8 (válido), 16 (válido), 17 (inválido).                                                                                                                                             |
| **Prueba de Transición de Estados** | Evalúa cómo un sistema cambia entre estados según entradas previas, útil para flujos complejos.                     | Un cajero automático: ingresar tarjeta → ingresar PIN → seleccionar monto → recibir dinero → retirar tarjeta.                                                                                                                                                |
- **Técnicas de prueba basadas en la estructura**: Se enfocan en **cómo está construido el software**

| Tecnica                                          | Descripcion                                                                                                  | Ejemplo                                                                                                                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prueba de Cobertura de Decisión de Condición** | Garantiza que cada decisión lógica en el código (if, else) sea evaluada en todas sus combinaciones posibles. | Si es un if con una condicion `and` se prueban cada uno de escenarios, cuando ambos son `True`, `True` y `False`, `False` y `True`, cuando ambos son `False`                                                                                 |
| Prueba de Flujo de Datos                         | analiza cómo las **variables** se **declaran, modifican y usan** en el código.                               | Por ejemplo las personas que han programado alguna aplicacion con Eslint (es una herramienta que revisa y "observa" tu código en busca de errores), muy seguramente le a saltado algun error por declarar una variable pero nunca utilizarla |
-  **Técnicas de prueba basadas en la experiencia**: Conocimiento e intuicion, como tal no se analiza el codigo ni los requisitos

| Tecnica                   | Descripcion                                                                                             | Ejemplo                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Advinación de Errores** | Se basa en la experiencia del tester para detectar posibles fallos comunes sin seguir un diseño formal. | En un formulario de login, se prueban entradas con caracteres especiales como `'; DROP TABLE users;` buscando vulnerabilidades. |



--- 

### ¿Cuál es el objetivo de la norma ISO 29119?

El objetivo de la norma ISO 29119 es establecer los estándares y requisitos para llevar a cabo pruebas de software efectivas y garantizar la calidad del producto final.

### ¿Qué alcance tiene la norma ISO 29119?

La norma ISO 29119 se aplica a todas las actividades relacionadas con las pruebas de software, incluyendo la planificación hasta la evaluación de criterios de aceptación y el reporte de resultados

### ¿Qué riesgos puede haber si solo se utilizan pruebas basadas en la experiencia?

Las pruebas basadas en la experiencia pueden ser útiles para detectar errores comunes, deben complementarse con técnicas estructuradas para garantizar una mejor cobertura y fiabilidad.

### ¿Porque es importante realizar pruebas dinámicas a nivel general?

Las pruebas dinámicas detectan fallos en interacciones y dependencias entre componentes, optimizando rendimiento, seguridad y experiencia de usuario al simular condiciones reales, revelando errores que pruebas aisladas no descubren eficazmente."