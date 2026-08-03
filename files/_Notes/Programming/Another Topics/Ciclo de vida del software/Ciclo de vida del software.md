
El ciclo de vida del software es un término que se utiliza en ingeniería de software para describir el **proceso completo de desarrollo, mantenimiento y eventual retirada de un producto de software**, desde su concepción inicial hasta su finalización y más allá, determinando una metodología en común entre el cliente y la compañía de software. Este ciclo se compone de diferentes **etapas** interconectadas que guían el desarrollo y la gestión eficiente del software a lo largo de su existencia. 

![Untitled-2025-01-10-1738.png](Untitled-2025-01-10-1738.png)

# Etapas

| # | Etapa | Descripción |
| --- | --- | --- |
| 1 | Definición de **objetivos y necesidades** | Se trabaja en **comprender los problemas** que el software resolverá y se **establece una base clara** para el proyecto. |
| 2 | Análisis de los **requisitos y su viabilidad** | Se lleva a cabo un análisis exhaustivo de los **requisitos funcionales y no funcionales** del software. Se examinan las **limitaciones y posibilidades técnicas**, así como los recursos disponibles. También se evalúa la **viabilidad económica y técnica** del proyecto. |
| 3 | **Diseño general** | Se definen los **componentes principales**, las **relaciones** entre ellos y la estructura general del sistema. |
| 4 | Diseño en detalle/**codificación** | Especifica cómo se **implementarán cada uno de los componentes** del sistema. Posteriormente, se traduce este diseño en **código fuente** mediante la codificación. Es la fase en la que los programadores escriben el software real. |
| 5 | **Pruebas**/Programación e implementación | Se realizan pruebas exhaustivas en el software para **identificar y corregir errores**, defectos y problemas de funcionamiento. Al mismo tiempo, se lleva a cabo la **implementación final del software en el entorno de producción**. |
| 6 | **Validación y Despliegue** | Se asegura de que el software **cumple con los requisitos definidos** y que funciona correctamente en el entorno real. |
| 7 | **Mantenimiento**/Integración | Se realizan **actualizaciones, correcciones de errores y mejoras** en respuesta a las necesidades cambiantes del usuario o el entorno. |

**Nota:** es importante tener en cuenta que cada etapa del ciclo se debe validar antes de pasar a la siguiente etapa y al finalizar cada etapa se debe de verificar las correcciones sugeridas.

# Tipos de ciclo de vida

| Enfoque | Requisitos | Actividades | Entrega | Meta |
| --- | --- | --- | --- | --- |
| predictivo | Fijos | Realizadas una vez para todo el proyecto | Entrega única | Gestionar costos |
| Iterativo | Dinámicos | Repetidas hasta que esté correcto | Entrega única | Corrección de la solución |
| Incremental | Dinámicos | Realizadas una vez por cada incremento dado | Entregas frecuentes más pequeñas | Velocidad |
| Ágil | Dinámicos | Repetidas hasta que esté correcto | Entregas pequeñas frecuentes | Valor para el cliente mediante entregas frecuentes y retroalimentación |

# Modelos

Existen diferentes modelos a seguir para el establecimiento de este proceso, cada uno describe un **enfoque diferente para las actividades** que se tienen planteadas, su objetivo primordial es **facilitar una metodología** común entre el cliente y la compañía de software.

| Traiciónales | Agiles |
| --- | --- |
| Waterfall | Lean |
| V Model | Kanban |
| Spiral Model | Scrum |
| Evolutionary Prototyping | Extreme Programing (XP) |
| Incremental | Feature Drive Development (FDD |
| Rapid Application Development (RAD) |  |

# Traiciónales

## Predictivo

### Waterfall

Es uno de los modelos SDLC más antiguos y conocidos. Sigue un **proceso secuencial** paso a paso desde el análisis de requisitos hasta el mantenimiento, es muy recomendado para **proyectos pequeños** o en los que se tenga bien definidos y entendidos los requisitos.

![waterfall.png](waterfall.png)

| Ventajas | desventajas |
| --- | --- |
| Fácil de entender, fácil de usar | No sirve para proyecto donde los requisitos están cambiando. |
| Recomendada cuando se conoce bien el poryecto, el equipo es estable y los riesgos son bajos | Es deficiente para proyectos largos y continuos |
| Funciona bien cuando la calidad es más importante que el costo o el cronograma | Puede dar una falsa impresión de progreso |
|  | Pocas oportunidades para que el cliente obtenga una vista previa del sistema |

### V Model

![Pasted image 20230909194513.png](Pasted_image_20230909194513.png)

## Iterativo

### Spiral Model

Se basa en la idea de que el desarrollo de software es un **proceso evolutivo y cíclico** que involucra evaluaciones constantes y ajustes a lo largo del tiempo. Es recomendada para situaciones en las que **evaluar el costo y riesgo** es importante o cuando **los usuarios no están seguros de sus necesidades**.

![espiral.png](espiral.png)

| Ventajas | Desventajas |
| --- | --- |
| El monitoreo del proyecto es muy efectivo. Cada fase requiere una revisión de las personas interesadas | El modelo es complejo |
| Los usuarios pueden estar estrechamente vinculados a todos los pasos del ciclo de vida | La espiral puede continuar indefinidamente |
| Las estimaciones como el presupuesto y el cronograma se vuelven más realistas a medida que avanza el trabajo | Alto costo y tiempo para llegar al producto final. |

### Evolutionary Prototyping

Este modelo tambien se basa en un **desarrollo evolutivo**, donde el prototipo debe de ser construido en poco tiempo, usando programas adecuados y pocos recursos. El diseño rápido se centra en aquellos **aspectos del software visibles para el cliente**, el diseño conduce a la creación de un prototipo que es evaluado por el cliente para recibir una **retroalimentación**, lo que permite que el desarrollador **entienda mejor lo que se quiere** y el cliente vea **resultados a corto plazo.**

![Dibujo sin título (2).png](Dibujo_sin_ttulo_(2).png)

| Ventajas | Desventajas |
| --- | --- |
| Facilita la comunicación con los clientes y usuarios, permitiéndoles ver y "tocar" un **prototipo funcional**. | Puede **requerir tiempo y recursos adicionales** para desarrollar múltiples prototipos. |
| Permite la **identificación temprana de requisitos y cambios necesarios.** | Puede ser **inadecuado para proyectos muy grandes o complejos.** |
| Facilita la **retroalimentación y la iteración rápida**, lo que conduce a un **diseño más preciso y adaptado** a las necesidades del usuario. | Puede ser **difícil mantener el prototipo actualizado** conforme se realizan cambios. |

### Incremental

Proporciona entregables terminados que el cliente puede utilizar de inmediato sin ser esto el proyecto completo.

![Pasted image 20230909195058.png](Pasted_image_20230909195058.png)

# Agiles

### Lean

### Extreme Programing (XP)

### Kanban

### Scrum

- Roles
- Sprint
- Backlog
- Etapas
- Planificacion de sprint
- Daily
- Sprint Review
- Sprint Retrospective

### Feature Drive Development (FDD)

[Ingenieria de requerimientos](Ingenieria%20de%20requerimientos.md)