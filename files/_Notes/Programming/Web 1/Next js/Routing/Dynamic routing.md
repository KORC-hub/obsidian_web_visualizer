
Status: Routing

En algunos casos, las rutas no son específicas y dependen de un identificador. Por ejemplo, en una página de productos con miles de artículos, sería inviable crear una página individual para cada uno. Para estos escenarios, se utilizan rutas dinámicas.

Para implementarlas, basta con **crear una carpeta y encerrar su nombre entre corchetes**. Siguiendo el ejemplo anterior, podríamos crear una carpeta llamada `[productId]` y, dentro de ella, un archivo `page.tsx`, que serviría como plantilla para mostrar la información de cada producto.

por lo que si ponemos en el navegador `http://localhost:3000/product/1` nos va a mostrar la misma pagina que si ponemos `http://localhost:3000/product/200`. 

Pero todavía no hemos solucionado el problema, ya que la página debe mostrar la información de cada producto. Para ello, necesitamos extraer el `id` que se encuentra en la URL.

Para lograrlo, definimos `params` como una promesa que contiene un objeto con un atributo llamado `productId`, el cual es de tipo `string`. Dado que `params` es una promesa, es necesario usar `async/await` para acceder a sus valores.

```tsx
export default async function productDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}
```

# **Catch all Segments**

<aside>
📖

Un **slug** es una parte de la URL que representa un recurso de manera legible y amigable para SEO. Generalmente, es una versión simplificada de un título o identificador, donde los espacios y caracteres especiales se reemplazan por guiones (`-`).

</aside>

En algunos casos, podemos tener muchas rutas anidadas. Por ejemplo, en una web de documentación, podríamos tener una URL como `http://localhost:3000/feature1/concept1`. Si tuviéramos 20 características y, a su vez, cada una contara con 20 conceptos, tendríamos un total de 400 páginas diferentes.

Para optimizar esto, podríamos agrupar los conceptos en una carpeta `[conceptId]`, reduciendo el número de páginas a solo 20. Si además añadimos `[featureId]`, podríamos tener todo en una sola página.

Next.js nos permite crear una carpeta que abarque cualquier ruta utilizando tres puntos dentro de los corchetes antes del nombre. En este caso, podríamos añadir una carpeta `[...slug]`.

Si la carpeta `[...slug]` estuviera dentro de una carpeta `docs`, cualquier dirección después de `docs` cargaría la misma página. Por ejemplo:

- `http://localhost:3000/docs/feature1/concept5`
- `http://localhost:3000/docs/feature100/concept2`
- `http://localhost:3000/docs/feature2/concept1/example1`

Todas estas rutas mostrarían la misma página ubicada en la carpeta `[...slug]`.

```tsx
export default async function Docs({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    return (
        <h1>
            feature {slug[0]} concept {slug[1]}
        </h1>
    );
}
```

Por ultimo si queremos que la `page.tsx` que hay en `[..slug]` también se muestre cuando accedamos a `http://localhost:3000/docs` tendremos que cambiar el nombre de `[..slug]` a `[[..slug]]`