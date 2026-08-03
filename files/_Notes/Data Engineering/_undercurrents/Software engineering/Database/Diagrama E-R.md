# Diagrama entidad relacion

para la creacion de una Data Base hace falta en primer lugar plantear el problema y determinar ciertos elementos como:

## Entidades

Lo primero a entender de el Diagrama E-R son las entidades, una entidad es algo similar a un **objeto (POO) o Elemento, que representa algo en el mundo real, o incluso algo abstracto**. La unica condicion que debe de cumplir una entidad es que se le pueda atribuir valores (Atributos). En el diagrama E-R se representan con un **rectangulo** y normalmente se le pone el nombre en **plural**.

![Entidades.png|700](Entidades.png)

### Entidad fuerte

Son entidades que pueden sobrevivir por sí solas ya que **no dependen de otras para existir.**

![Entidad fuerte.png|700](60512ce6-3874-4a01-8546-d12b5c38f2d0.png)

### Entidad debil

**no pueden existir sin una entidad** fuerte y se representan con un cuadrado con **doble línea.**

![Entidad debil.png|700](e4a5b0c6-7087-45bc-9315-7826b875368a.png)

Cabe aclarar que toda identidad debil es por identidad, poque siempre depende de la Primary Key de otra entidad para ser identificada, y a su vez, toda entidad debil es por existencia, ya que sin la fuerteno puede existir.

## Atributos

En el  Diagrama E-R los atributos son las **características o propiedades** que describen a las Entidades, deben ser **relevantes** para la información que se está almacenando y estar **relacionados entre sí**. Se suele representar con un **óvalo**.

![Atributos 2.png|700](Atributos_2.png)

### Simple Attribute

Son aquellos que no están divididos en subpartes.

![Simple attribute.png|700](41ba9caf-5c54-4468-8a7e-951581ed175c.png)

### Composite attribute

Se dividen en subpartes

![multivaluado attribute 1.png|700](a0c44e1a-5dda-4122-be87-58c91f64ac12.png)

### Multivalue attribute

Puede contener varios valores.

![multivaluado attribute 2.png|700](f74957ad-2ea6-4071-aaa3-8982c81c5592.png)

### Primary Key attribute

Son aquellos que identifican a la entidad y no pueden ser repetidos.

![PK attribute.png|700](db8eba72-da19-48e3-8ffb-7df54a157c01.png)

### Foreign Key attribute

No es propio de el objeto si no de otra entidad

![FK attribute.png|700](1bb32b48-3e79-45a9-b6ca-a218d3604255.png)

### Derivate attribute

Deriva de otro atributo.

![Derivate attribute 1.png|700](7aa1d912-82df-4bd2-a132-df2c0d2bace9.png)

## Relaciones

Nuestro Diagrama E-R **debe de diseñarse en base a un proposito**, es por esto que las entidades deben de tener una relacion entre ellas, la relacion **se representa con un verbo y se grafica con un rombo** si la relacion es entre entidades fuertes, si es entre una fuerte con una debil se representa con un rombo con doble borde:

![Relaciones 3.png|900](Relaciones_3.png)

| Grado | Definicion |
| --- | --- |
| 1 | Es aquella relación en la que participa **una única entidad**. También llamadas **reflexivas o recursivas**. |
| 2 | Es aquella relación en la que participan **dos entidades**. Es el mas común. |
| 3 | Es aquella relación en la que participan **tres entidades** al mismo tiempo. |
| n | Es aquella relación que involucra **n entidades** Este tipo de relaciones no son usuales y **deben ser simplificadas** hacia relaciones de menor grado. |

## Cardinalidad

Saber el motivo de la relación no es suficiente informacion, y por eso se utiliza algo llamado cardinalidad, con esto nos referimos a la cantidad de veces en que las entidades se relacionan, la cardinalidad es muy importante dado que cualquier error en esta puede dar problemas en nuestra base de datos.

La forma en como definimos la cardinalidad depende mucho del problema ya que aunque a continuación se muestre de una forma, también se pueden aplicar al revés, es decir que,  podemos poner que la cardinalidad es 1:0 o N:1.

### 0:1

Se da cuando **uno o cero** registros de una entidad se relaciona con **un** registro de otra entidad.

![0-1 6.png|700](0-1_6.png)

### 1:1

Se da cuando **un** registro de una entidad se relaciona **únicamente** con otro registro de otra entidad. Ejemplo de esto puede ser una persona y su cedula.

![1-1png 1.png|700](1-1png_1.png)

### 0:N

Se da cuando **uno o cero** registros de una entidad se relaciona con **muchos** registro de otra entidad.

![0-N 1.png|700](0-N_1.png)

### 1:N

Se da cuando **un** registro de una entidad se relaciona con **muchos** registro de otra entidad.

![1-N.png|700](1-N.png)

### N:N

Se da cuando **muchos** registro de una entidad se relaciona con **muchos** registro de otra entidad.

![N-N.png|700](N-N.png)

- Tablas transaccionales/de hechos y maestras/dimensionales
-