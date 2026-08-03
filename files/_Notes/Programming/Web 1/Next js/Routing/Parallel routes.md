
Status: Routing

Las rutas paralelas se definen utilizando características conocidas como `slots`. Para crear un `slot`, se debe crear una carpeta cuyo nombre comience con `@`. Esta se añadirá automáticamente como una propiedad al layout. Por ejemplo si creamos una carpeta llama `parallel-routes` y dentro una carpeta llamada `@notifications` , en el layout tendríamos lo siguiente:

```tsx
type Props = {
    children: React.ReactNode;
    notifications: React.ReactNode;
};

export default function ParallelRoutesLayout({ children, notifications }: Props) {
    return (
        <div>
            <div>{children}</div>
            <div>
                <div>{notifications}</div>
            </div>
        </div>
    );
}
```

Este enfoque es ideal para interfaces en las que cada sección debe funcionar de manera independiente, especialmente cuando diferentes equipos trabajan en distintas partes. Aunque esto también podría lograrse con componentes normales, los mayores beneficios de las rutas paralelas son:

- **Manejo de rutas independientes**:
    - Cada sección puede gestionar sus propios estados de carga o error, lo cual es especialmente útil cuando las secciones se cargan a diferentes velocidades o enfrentan errores únicos.
- **Sub-navegación**:
    - Cada espacio puede funcionar como una mini-aplicación con su propia navegación y gestión de estados. Esto permite a los usuarios interactuar con cada sección por separado, aplicando filtros, ordenando datos o navegando entre páginas sin afectar otras partes de la aplicación ni generar cargas innecesarias.