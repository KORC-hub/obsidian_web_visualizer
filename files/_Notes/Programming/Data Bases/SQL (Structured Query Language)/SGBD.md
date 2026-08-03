
# SQL

### MySQL

![Pasted image 20230810190949.png](948e0396-8dd4-4da5-b684-6982e5ae34ea.png)

Es un SGBD **multihilo y multiusuario** utilizado mucho en paginas web actuales, ademas de ser el mas utilizado en aplicaciones con software libre ya que esta bajo la GNU GPL (General Public License) y por lo tanto es **Open Source.**

| Venrajas | Desventajas |
| --- | --- |
| Facilidad de Instalar, configurar y usar. | No funciona de manera eficiente con base de datos muy grandes |
| Gran rendimiento |  |
| Soporte multiplataforma y soporte SSL (Secure Sockets Layer) |  |

### SQL Server

![Untitled](de65cc74-728e-4a36-b09b-bef5eaaba282.png)

Microsoft SQL Server Es un SGDB relacionales basado en el lenguaje Transact-SQL, capaz de poner a disposición de muchos usuarios **grandes cantidades de datos de manera simultánea**.

| Ventajas | Desventajas |
| --- | --- |
| **Soporte exclusivo** por parte de Microsoft. | **Costo** de la licencia y el soporte |
| **Escalabilidad, estabilidad y seguridad.** |  |
| Posibilidad de **cancelar consultas.** |  |
| Potente entorno gráfico de administración que permite utilizar comandos [[SQL#Lenguaje de Definicion de datos (DDL) | DDL]] y [[SQL#Lenguaje de Manipulación de Datos (DML) |
| Se puede utilizarse desde hace ya un tiempo en otras plataformas como Linux o Docker. |  |

### MariaDB

![Pasted image 20230810193014.png](Pasted_image_20230810193014.png)

Este SGDB es muy **parecido a MySQL** dado que cuenta con gran parte de las caracteristicas de este, aunque **incluye varias extenciones**, Este sigue la filosofia **Open Source** de MySQL.

| Ventajas | Desventajas |
| --- | --- |
| Aumento motores de almacenamiento | Toma mas memoria que MySQL |
| Gran escalabilidad | Solo se recomienda para grandes empresas |
| Seguridad y rapidez en transacciones |  |
| Extenciones y caracteristicas para NoSQL |  |

### PostgreSQL

![Pasted image 20230810212442.png](Pasted_image_20230810212442.png)

Este SGBD relacional está **orientado a objetos** y es **libre**, publicado bajo la licencia BSD (Berkeley Software Distribution)

| ventajas | Desventajas |
| --- | --- |
| Control de Concurrencias multiversión (MVCC) | Lentitud para la administración de bases de datos pequeñas ya que está optimizado para gestionar grandes volúmenes de datos. |
| Flexibilidad en cuanto a lenguajes de programación |  |
| Multiplataforma |  |
| Dispone de una herramienta muy fácil e intuitiva para la administración de las bases de datos. |  |
| Dispone de una herramienta muy fácil e intuitiva para la administración de las bases de datos. |  |

### SQLite

![Pasted image 20230810211334.png](Pasted_image_20230810211334.png)

Más que un SGDB como tal, SQLite es una **biblioteca** escrita en C que implementa un SGBD y que **permite transacciones sin necesidad de un servidor ni configuraciones**. Es una biblioteca utilizada en multitud de aplicaciones actuales ya que es **open source** y las consultas son muy eficientes.

| Ventajas | Desventajas |
| --- | --- |
| Al tratarse de una biblioteca, su tamaño es mucho menor que cualquier SGBD. | La escalabilidad ya que no soporta bases de datos que sean muy grandes. |
| Reúne los cuatro criterios [[ACID]] (Atomicidad, Consistencia, Aislamiento y Durabilidad) logrando gran estabilidad. |  |
| Gran portabilidad y rendimiento. |  |

# NoSQ

### MongoDB

![Pasted image 20230810205928.png](Pasted_image_20230810205928.png)

Es un SBGD NoSQL orientado a ficheros que almacena la información en estructuras BSON con un esquema dinámico que permite su facilidad de integración.

| Ventajas | Desventajas |
| --- | --- |
| Indexación y replicación | No es adecuado para realizar transacciones complejas |
| Balanceo de carga |  |
| Almacenamiento en fichero |  |
| Consultas ad hoc |  |
| Escalabilidad horizontal |  |
| Open Source |  |

