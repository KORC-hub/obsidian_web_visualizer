
Status: Pages

- Components hierarchy
    
    ```tsx
    <Layout>
    	<Template>
    		<ErrorBoundary fallback={<Error />}>
    			<Suspense fallback={<Loading />}>
    				<ErrorBoundary fallback={<NotFound/>}>
    					<Page />
    				</ErrorBoundary>
    			</Suspense>
    		</ErrorBoundary>
    	</Template>
    </Layout>
    ```
    

Por defecto, en Next.js, si ingresamos una URL que no coincide con ninguna carpeta en `/app`, se mostrará una página de error 404 (**Page Not Found**). Para personalizar esta página, debemos agregar un archivo llamado `not-found.tsx`, que Next.js mostrará automáticamente cuando la URL no exista.

De hecho podemos crear paginas not-found especifica para diferentes secciones de la aplicación, solo hay que crear un archivo `not-found.tsx` dentro de la carpeta en la que quieres que tenga efecto

![Untitled-2024-11-18-1609 (5).png](Untitled-2024-11-18-1609_(5).png)

Aunque Next.js gestiona esto de forma automática, también podemos forzarlo mediante código con la función `notFound` de `next/navigation`.

```tsx
import { notFound } from "next/navigation"
	export default function Page(condicion) {
		if(condicion){
			notFound();
		}
	}
```

La función `notFound` no acepta parámetros. Si necesitamos mostrar diferentes mensajes según la ruta, podemos utilizar la función `usePathname` de `next/navigation`.

Es importante tener en cuenta que este hook de React solo funciona en componentes de tipo cliente, por lo que debemos añadir `"use client"` al inicio del archivo.

Este hook nos proporciona la ruta como una cadena de texto, y con funciones como `split` podemos extraer la información necesaria.

```tsx
"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h1>
                Review {reviewId}not found for product {productId}
            </h1>
        </div>
    );
}
```