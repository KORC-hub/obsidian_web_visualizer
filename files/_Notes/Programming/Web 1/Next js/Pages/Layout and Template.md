
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
    

# Layout

Como se ha visto cada page es un componente que devuelve HTML pero en ningún momento definimos las etiquetas `<html>` o `<body>` , esto se hace en el archivo `layout.tsx`, este recibe como parámetro `children` que son las paginas que vamos a mostrar 

<aside>
📖

`React.ReactNode` es un tipo en TypeScript que representa cualquier contenido que React puede renderizar. Se usa comúnmente en propiedades (`props`) de componentes para indicar que una prop puede recibir elementos JSX/TSX, texto, fragmentos, arrays de elementos, `null`, `undefined`, etc.

</aside>

Los layout se pueden anidar, solo se añade un archivo `layout.tsx` que tenga el mismo parámetro `children` que el layout por defecto , este se aplicara el page de la carpeta donde esta y a todas las subcarpetas.  Un ejemplo de como se verían dos layouts.

- Layout por defecto
    
    ![image.png](zExtra/Imagenes/Programming/Layout%20and%20Template/image.png)
    

- Layout por defecto + Layout personalizado
    
    ![image.png](zExtra/Imagenes/Programming/Layout%20and%20Template/image%201.png)
    

# Template

un `template` es un componente especial que se utiliza para envolver una página o un conjunto de páginas. A diferencia de un `layout`, un `template` se reinicia su estado y se recrea cada vez que el usuario navega entre rutas. La sintaxis de `template` es prácticamente igual que la de `layout`

Pueden anidarse, es decir, puedes tener un Layout que envuelva a un `template`, y este a su vez envuelva una página, de hecho, cualquier template siempre va a estar envuelto por el `layourRoot`, dado que este contiene las etiquetas necesarias para que la pagina cargue (`<html>` y `<body>`), cabe aclarar que un template nunca puede ser un `layoutRoot`.

En el código de ejemplo si recargamos la pagina, el contenido del input no se mantiene, dado que al ser un `template` se reinicia los estados. 

```tsx
"use client";
import { useState } from "react";

export default function AuthTemplate({ children }: { children: React.ReactNode; }) {
    const [input, setInput] = useState("");
    return (
        <div>
            <p className="text-orange-500">Template</p>
            <div className="border-2 border-orange-500 p-4 mb-4">
                <div>
                    <input className="text-black" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                {children}
            </div>
        </div>
    );
}
```