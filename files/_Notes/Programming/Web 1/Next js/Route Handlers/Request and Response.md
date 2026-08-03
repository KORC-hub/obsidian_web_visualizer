
Status: Route Handlers

**Permiten crear APIs directamente dentro de tu aplicación.** Esto significa que puedes manejar solicitudes (GET, POST, PUT, DELETE, etc.) y generar respuestas personalizadas (JSON, XML, texto, etc.) sin necesidad de un servidor backend separado.

- Los Route Handlers se definen dentro de la carpeta `app` de tu proyecto Next.js.
- Se crean archivos con nombres específicos que corresponden a las rutas que deseas manejar (por ejemplo, `route.ts` para la ruta base, o archivos dentro de carpetas para rutas anidadas).
- Dentro de estos archivos, defines funciones que se ejecutarán cuando se acceda a la ruta. Estas funciones reciben objetos `Request` (que contienen información sobre la solicitud) y pueden devolver objetos `Response` (que definen la respuesta que se enviará al cliente).

los Route Handlers siempre reciben un objeto `Request` (o `NextRequest` si usas las características extendidas de Next.js) como primer argumento.  

El `_` es una convención de JS (y TS) para indicar que la variable está intencionalmente sin usar.  Se usa para evitar errores de "variable no utilizada" o "parámetro no usado" que el compilador o linter podrían mostrar.

# GET

## GET básico

```tsx
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    console.log(`URL: ${request.url}`); 
    console.log(`Method: ${request.method}`); 
    const requestHeaders = new Headers(request.headers);
    console.log(`Authorization: ${requestHeaders.get("Authorization")}`); 
    return new Response("Profile Api");
}
/*
URL: http://localhost:3000/profile/api
Method: GET
Authorization: Rogers
*/
```

## GET con rutas dinámicas

```tsx
import { type NextRequest } from "next/server";
import { comments } from "./data";

type Props = {
    params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, { params }: Props) { // aplicada a URLs como la siguiente:  http://localhost:3000/comments/1
    const { id } = await params;
    const commnet = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(commnet); // status code: 200 -> Indica que la solicitud ha tenido éxito.
}
```

## GET con searchParams

```tsx
import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {  // aplica para casos donde la URL utiliza ? como la siguiente http://localhost:3000/comments?query=first
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
        ? comments.filter((comment) => comment.text.includes(query))
        : comments;
    return Response.json(filteredComments); // status code: 200 -> Indica que la solicitud ha tenido éxito.
}
```

# POST

```tsx
import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function POST(request: NextRequest) {
    const comment = await request.json(); // accediendo al body de la request
    const newcomment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment), {
        headers: { "content-Type": "application/json" },
        status: 201, // -> Indica que la solicitud ha tenido éxito y como resultado se ha creado un nuevo recurso.
    });
}
```

# PATCH

```tsx
import { NextRequest } from "next/server";
import { comments } from "../data";

export async function PATCH(request: Request, { params }: Props) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index]);
}
```

# DELETE

```tsx
export async function DELETE(_request: Request, { params }: Props) {
    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deleteComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deleteComment);
}
```