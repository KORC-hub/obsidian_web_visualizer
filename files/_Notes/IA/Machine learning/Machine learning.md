
# Dictionary

- **Clustering (Agrupamiento)**: El proceso donde se reciben datos "sueltos"y se intenta descubrir qué grupos hay. Es como si te dieran un cubo lleno de piezas de LEGO y tú las separas por color sin que nadie te diga qué colores existe.

- Aprendizaje supervisado
- Aprendizaje NO supervisado
- Aprendizaje por refuerzo 
- Aprendizaje profundo

# Modelos 

### SVM: 

Imagina que tienes dos grupos de datos mezclados. Este modelo traza la **línea perfecta** (hiperplano) para separarlos, dejando el mayor espacio posible entre ambos grupos para no equivocarse. El modelo ya conoce los dos grupos por lo que su trabajo no es descubrir los grupos, sino trazar la frontera perfecta para que, cuando llegue un dato nuevo, sepa inmediatamente a qué grupo pertenece.

El proceso comienza estableciendo una **condición matemática estricta** donde el modelo impone que los datos de la clase A deben dar un resultado $\ge 1$ y los de la clase B un resultado $\le -1$. Esta regla obliga a que exista un espacio vacío entre ambos grupos, lo que divide el plano en tres secciones distintas y define el punto de partida para la separación.

A partir de esta base, el modelo utiliza el **gradiente** para no conformarse con la primera línea divisoria; mediante este cálculo, rota y desplaza las fronteras de manera continua. El objetivo principal de este movimiento es **maximizar la distancia geométrica** o el ancho de la sección central, buscando el camino más despejado posible entre los datos.

Este ensanchamiento progresivo se detiene únicamente cuando las fronteras "chocan" con los puntos más próximos de cada grupo. Estos puntos específicos se denominan **vectores de soporte**, ya que son los únicos elementos que mantienen las fronteras en su lugar y limitan la expansión del margen. Finalmente, con estas fronteras fijas y la distancia optimizada, se establece el **hiperplano de decisión** en el centro exacto de la separación, sirviendo como el límite definitivo para clasificar futuros datos con la mayor seguridad posible.

| ![[1_vdQGC2L6sJWfNVtHxyHWQ.gif  \| 450]] | ![[Pasted image 20260209174722.png \| 450 ]] |
| ---------------------------------------- | -------------------------------------------- |

las SVM, por naturaleza, son ==. binarias .==. Esto significa que solo saben distinguir entre dos grupos. Para manejar varios grupos, el modelo tiene dos formas de comparar: compara un grupo con todos los demas **(one-vs-all)** o compara uno con otro **(one-vs-one)**. En algunos graficos podemos ver qwue define varias lineas pero realmente es la suma de la comparacion entre todos los hiperplanos que encontro.

### Naive Bayes:

### K-Nearest Neighbors (KNN)

Es un modelo de clasificación y regresión cuya importancia radica en su **simplicidad y versatilidad**, ya que no asume nada sobre la distribución de los datos. Se utiliza principalmente cuando los datos son difíciles de separar con una línea recta, con formulas, o cuando la relación entre ellos es muy local. Su premisa es básica: para clasificar un punto nuevo, el modelo mira a sus **$k$ vecinos más cercanos** y le asigna la categoría más común entre ellos.

![[kNN_classificationA-498851771.gif | 800]]


El proceso comienza sin una etapa de "entrenamiento" real, ya que el modelo simplemente **almacena todos los datos disponibles** en la memoria. No intenta generar una fórmula ni trazar fronteras de antemano; en su lugar, espera hasta que se le presenta un dato nuevo para empezar a trabajar. Por esta razón, se dice que es un algoritmo "perezoso" (_lazy learner_), pues solo actúa cuando es estrictamente necesario.

Cuando aparece un dato desconocido, el modelo calcula la **distancia geométrica** (normalmente usando la distancia euclidiana, como una regla en línea recta) entre ese nuevo punto y cada uno de los puntos que ya tiene guardados. El objetivo es identificar cuáles son los **$k$ puntos más cercanos** en el plano, donde "$k$" es un número entero definido por el usuario (por ejemplo, los 3 o 5 vecinos más próximos).

Finalmente, una vez identificados los vecinos más cercanos, el modelo realiza una **votación mayoritaria**. El dato nuevo es asignado a la categoría que tenga más representantes dentro de ese grupo selecto de vecinos. Si la mayoría de los 5 vecinos más cercanos son del "Grupo A", el nuevo dato se clasifica automáticamente como "Grupo A", basándose puramente en la similitud por cercanía.

A medida que añades más variables (columnas) a tus datos, el "espacio" se vuelve inmenso y los puntos empiezan a quedar muy lejos unos de otros. En un espacio de muchas dimensiones, la idea de "cercanía" deja de tener sentido porque todos los puntos parecen estar a la misma distancia. KNN es excelente con 5 o 10 variables, pero sufre mucho si intentas usarlo con cientos de variables sin antes filtrarlas.

Para que KNN funcione, tienes que **normalizar o escalar** los datos (poner todo en una escala de 0 a 1), para que el modelo no crea que el precio es más importante que el peso solo porque el número es más alto.

