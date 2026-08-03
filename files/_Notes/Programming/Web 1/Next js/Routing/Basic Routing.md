
Status: Routing

![Untitled-2024-11-18-1609 (4).png](Untitled-2024-11-18-1609_(4).png)

## Private folders

Se pueden crear carpetas que no afectarán las rutas de la aplicación. Para ello, es necesario añadir un guion bajo (`_`) al inicio del nombre de la carpeta. Tanto esta como sus subcarpetas serán excluidas del enrutamiento. Si quieres tener una ruta con un guion bajo puedes utilizar `%5F`, por ejemplo `%5Fprivate` , si dentro de esta carpeta hay un page se mostrara en el navegador.

## Route Groups

Si queremos organizar el proyecto mediante un sistema de carpetas sin afectar las URL, podemos utilizar grupos de rutas. Para ello, basta con crear una carpeta y encerrar su nombre entre paréntesis. Dentro de esta carpeta, podemos ubicar las páginas correspondientes. Por ejemplo, podemos crear un grupo llamado **`/(auth)`** y colocar en su interior las páginas `login`, `register` y `forgot-password.`

![Untitled-2024-11-18-1609 (6).png](Untitled-2024-11-18-1609_(6).png)