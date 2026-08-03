
Status: Routing

Podemos utilizar grupos de rutas para crear múltiples diseños en nuestras páginas o para simplemente agrupar paginas sin afectar la URL, ya que el nombre de la carpeta que representa el grupo no se tomara en cuenta al momento de enrutar. 

Como se muestra en la imagen, es posible definir dos grupos, cada uno con su propio `layout`. Es importante que cada `layout` tenga un nombre diferente en sus respectivas funciones dentro del archivo. Por ejemplo, en el grupo `/(auth)`, la función del *layout* se llama `AuthLayout`, mientras que en el otro grupo se llama `MarketingLayout`.

Además, es fundamental eliminar el *layout* principal, ya que puede generar conflictos con los definidos en los grupos.

También debemos considerar que `http://localhost:3000/` mostrará la página y el *layout* del grupo donde se encuentre el archivo `page.tsx`. En la imagen de ejemplo, este se encuentra dentro de `/(auth)`.

![Untitled-2024-11-18-1609 (7).png](Untitled-2024-11-18-1609_(7).png)