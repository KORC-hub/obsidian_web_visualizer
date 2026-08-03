# Diagrama fisico

Es la **representación visual** de la estructura de una base de datos en funcion de cómo se implementa físicamente en un sistema de gestión de Data Base (SGBD). Un diagrama físico **muestra cómo se organizan y almacenan los datos** en las Tablas de la base de datos en el nivel de almacenamiento físico, incluyendo detalles como los **tipos de datos**, las **restricciones**, los **índices** y las **relaciones entre las tablas**.

## Tablas

una tabla en un diagrama físico se refiere a una **estructura organizada que almacena información de manera tabular**. Las tablas son componentes fundamentales de las bases de datos **relacionales** y se utilizan para almacenar y gestionar conjuntos de datos estructurados.

![Pasted image 20230814104848.png|400](Pasted_image_20230814104848.png)

### Claves primarias y externa

| Primaria | Externa |
| --- | --- |
| se utiliza para identificar de manera **única** cada fila o registro en esa tabla | Establece una **relación** entre esa tabla y otra tabla en la base de datos. |

![Pasted image 20230814104932.png|700](Pasted_image_20230814104932.png)

# Normalizacion

la normalización es el proceso de organizar los datos en una base de datos para minimizar redundancias y mantener la integridad de los datos, lo que conduce a una estructura más eficiente y fácil de mantener.

| Formas Normales | Ejemplos |
| --- | --- |
| 1 | Supongamos que tienes una tabla de `Clientes` con una columna llamada `Teléfonos` que contiene varios números de teléfono separados por comas en una misma celda. Para llevarlo a 1FN, dividirías los números de teléfono en filas separadas, **creando una nueva tabla** `Teléfonos` con una **clave primaria única** para cada número. **Esto eliminaría la lista de valores en una celda y aseguraría que cada celda contenga un solo valor.** |
| 2 | Imagina que tienes una tabla de `Pedidos` con atributos `Número de Pedido`, `ID de Cliente` y `Nombre de Producto`. Si el `Nombre de Producto` depende solo del `Número de Pedido`, y no del `ID de Cliente`, estaríamos en 2FN. Para llegar a esta forma normal, crearías una tabla separada para los detalles de los productos, relacionándola con la tabla de `Pedidos` a través del `Número de Pedido`. **Esto elimina la dependencia parcial de atributos no clave**. |
| 3 | Supongamos que tienes una tabla de `Empleados` con atributos `ID de Empleado`, `Nombre del Departamento` y `Ubicación del Departamento`. Si el `Nombre del Departamento` determina la `Ubicación del Departamento`, estaríamos en 3FN. Para llegar a esta forma normal, crearías una tabla separada para los departamentos, con el `Nombre del Departamento` como clave primaria, y luego relacionarías esta tabla con la tabla de `Empleados`. **Esto elimina la dependencia transitiva entre atributos no clave.** |