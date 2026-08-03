# Data lake

## Particiones

Particion -> Es la forma de organizar los datos dentro de una tabla para que las consultas sean mas eficientes, es como un diccionario de los datos, se puede seleccionar una columna que sirba de clave para traer un conjunto de datos que reduce el total de datos que se estan leyendo

se podria decir que las particiones son Fragmentos físicos o lógicos de una misma tabla organizados por el valor de una columna.

esto es importante tener en cuenta porque si se consulta una cantidad muy grande de registros puede colapsar el sistema, ademas de que sirve para que el motor de base de datos funcione mejo, ya que al especificar la particio nos trae los datos especificos.

Saber esto, hace una gran diferencia entre una buena consulta y una mal, y como mencione anteriormente puede llegar a tumbar el data lake

Al igual que como se menciono en la seccion de [[02-ingestion|ingestacion]], hay dos forma de introducir nuevos datos en las particiones que son [[02-ingestion#5. Full snapshot vs incremental (CDC)|Full snapshot vs incremental (CDC)]]


Por supuesto esto depende del tipo de base de datos, si se sabe que la base de datos cambia constantemente como una base de usuario, lo mejor es que sea full para que actualice los anteriores y agregue los nuevos, pero si los datos son mas estaticos como facturas o eventos que ya se realizaron y que muy probablemente no van a cambiar, pues lo mejor va a ser la incremental


## Partition Pruning


## Metadatos

Los metadatos son un conjunto de "diccionarios" que le permiten al motor saber dónde están los datos, cómo fueron almacenados y cuáles puede ignorar antes de empezar a leerlos.


