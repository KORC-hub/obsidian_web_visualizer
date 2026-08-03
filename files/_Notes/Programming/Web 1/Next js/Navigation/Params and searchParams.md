
Status: Navigation

```tsx
import Link from "next/link";

type Props = {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};

export default function NewsArcticle({ params, searchParams }: Props) {
    const articleId = (await params).articleId;
    const { lang = "en" } = await searchParams;
    return (
        <>
            <h1>new article {articleId}</h1>
            <p>Reading in {lang}</p>
        </>
    );
}
```

## params

Params es una promesa que da un objeto que contiene los parámetros de las rutas dinámicas, el `id` es un parámetro dinámico que se extrae de la URL .

Ejemplo: 

`localhost:3000/articles/breaking-new` → `{ id: "breaking-new" }`).

## searchParams

`searchParams` es una promesa que da un objeto que contiene los parámetros de consultas, como filtros o de ordenamiento), Estos son los pares clave-valor que aparecen después del símbolo `?` en una URL. 

Ejemplo:
`localhost:3000/articles/breaking-news?lang=en` → `{ lang: “es” }`

`page.tsx` puede acceder tanto a `params` como a `searchParams`, pero `layout.tsx` solo puede acceder a `params`, dado que los parámetros de búsqueda no estan disponibles en los componentes de diseño.