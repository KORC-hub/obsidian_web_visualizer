
Status: Routing

es una característica avanzada del sistema de enrutamiento que permite **"interceptar" una ruta** y mostrar su contenido en un contexto diferente, como un modal o una superposición. Esto es especialmente útil para crear experiencias de usuario fluidas, como abrir una página o detalle en un modal mientras se mantiene la página actual en segundo plano.

- **(.)**: Intercepta páginas en el **mismo nivel**.
- **(..)**: Intercepta páginas en un **nivel superior**.
- **(..)(..)**: Intercepta páginas en **dos niveles superiores**.
- **(…)**: Intercepta páginas en el **root** (`/`), es decir, carpetas directamente dentro de `/app`.