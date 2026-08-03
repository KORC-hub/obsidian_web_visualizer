
Status: Navigation

<aside>
📖

Es importante tener en cuenta que lo mejor es utiliza `useRouter` en componente del lado del cliente y `redirect` en componentes del lado del servidor. por lo que el Código es solo una ilustración de sus usos.

</aside>

```tsx
"use client";

import { useRouter, /*redirect*/ } from "next/navigation";

export default function PageConponent() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
        //redirect("/");
    };
    return (
        <>
            <button onClick={handleClick}>Go Home</button>
        </>
    );
}
```

`useRouter` de "next/navigation" es un hook que permite manipular la navegación del lado del cliente en Next.js.

- `push("/")`
    
    Navega a la `ruta` y añade una entrada al historial del navegador.
    
- `replace("/")`
    
    Similar a `push()`, pero reemplaza la entrada actual en el historial (no permite volver a la pagina donde se llamo mediante el historial de rutas). Útil para redirecciones.
    
- `back()`
    
    Navega a la página anterior en el historial (equivalente al botón "Atrás" del navegador).
    
- `forward()`
    
    Navega a la siguiente página en el historial (equivalente al botón "Adelante").
    
- `refresh()`
    
    Recarga la página actual, forzando una nueva carga de datos del servidor (incluyendo componentes del servidor).
    
- `prefetch()`
    
    Precarga la `ruta` en segundo plano para navegaciones futuras, mejorando la velocidad de carga.
    

hay otra forma de controlar la navegación y es mediante el hook `redirect(path, type)` se puede utilizar en componente de servidor. por defecto funciona igual que `replace()` de `useRouter` pero se puede cambiar pasando como segunda parámetro `push` .