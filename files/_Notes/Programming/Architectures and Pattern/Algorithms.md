# Algorithms

# Notación BigO (Cota Superior)

la **notación BigO es un tipo de notación asintótica** que nos permite representar la complejidad de un algoritmo en el peor de los casos.

Para realizar esta representación se toma en cuenta el **tiempo y espacio requeridos** para la ejecución del algoritmo, aunque este depende de muchas variables, en lugar de definir un tiempo o espacio específicos se utiliza una notación que describa cómo crecerán esos requerimientos de espacio y tiempo, del mismo modo que una **asíntota** describe el límite hacia el que una curva se acerca.

![image.png|703](2cabeec4-d96d-4a9f-97cf-d69ad115ecda.png)

DFS

BFS

# Greedy Algorithms

es una técnica de diseño de algoritmos que construye una solución paso a paso, seleccionando en cada paso la opción que parece ser la mejor en ese momento, sin considerar las consecuencias futuras.

- Cada decisión se toma con el objetivo de optimizar
- Una vez que se toma una decisión, no se reconsidera en pasos posteriores.

### Componentes:

- **Conjunto de candidatos:** Es el conjunto de elementos o opciones disponibles para construir la solución.
- **Función de selección:** Determina cuál es el mejor candidato en cada paso.
- **Función de factibilidad:** Verifica si un candidato puede ser parte de la solución.
- **Función objetivo:** Es la función que se desea optimizar (maximizar o minimizar).

### Pasos:

1. **Inicialización:** Comienza con un conjunto vacío o una solución parcial.
2. **Selección:** En cada paso, selecciona el mejor candidato disponible según la función de selección.
3. **Verificación**: Comprueba si el candidato seleccionado es factible (es decir, si puede formar parte de la solución).
4. **Inclusión**: Si es factible, agrega el candidato a la solución.
5. **Terminación**: Repite los pasos 2-4 hasta que se construya una solución completa o no queden más candidatos.

Estos algoritmos son fáciles de implementar y suelen ser eficientes, pero no siempre garantiza una solución optima y dependen en gran medida de la función de selección y la estructura del problema.

# Algoritmos

[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
