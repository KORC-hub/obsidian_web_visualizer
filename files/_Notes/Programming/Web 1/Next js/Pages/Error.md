
Status: #Pages

## Components hierarchy

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


En caso de que ocurra un error en un componente, se mostrará `error.tsx` en lugar de `page.tsx`. Dependiendo de su ubicación, este archivo afectará a varias páginas, reemplazando la página de la carpeta donde está y sus subpáginas ante cualquier error.

```tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
    error: Error;
    reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };
    return (
        <>
            <div>{error.message}</div>
            <button onClick={() => reload()}>Try again</button>
        </>
    );
}

```

Sin embargo, `error.tsx` no maneja errores en los layouts. Para solucionar esto, el archivo debe estar en una carpeta que contenga la carpeta con el layout, ya que `error.tsx` reemplazará todas las subpáginas.

Pero, ¿qué pasa si el error ocurre en el `Rootlayout` ? No podemos colocar `error.tsx` fuera de la carpeta `app`. Para estos casos, se utiliza `global-error.tsx`, que controla los errores en el `Rootlayout` . En `global-error.tsx`, es necesario importar los estilos de `global.css`, y el componente que devuelve debe incluir las etiquetas `<html>` y `<body>`, ya que el `Rootlayout` no se cargará.

```tsx
"use client";
import "./style/globals.css";
export default function GlobalError() {
    return (
        <html lang="en">
            <body>
                <h1>Rootlayout Error</h1>
            </body>
        </html>
    );
}
```