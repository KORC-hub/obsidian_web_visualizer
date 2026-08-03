
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
    

# Page

Una **página** es un componente React que se asocia directamente con una ruta (URL) en tu aplicación. Next.js utiliza un sistema de enrutamiento basado en archivos, lo que significa que la estructura de archivos dentro de la carpeta `app` determina las rutas de la aplicación.

- `app/page.tsx` → `localhost:3000/` (página de inicio).
- `app/about/page.tsx` → `localhost:3000/about`.

```tsx
export default function Component() {
    return (
        <>
            <h1>Component</h1>
        </>
    );
}
```

# Loading

el archivo **`loading.tsx`** es un componente React igual que una `page.tsx`, pero este se utiliza para mostrar un estado de carga (**loading state**) mientras se está cargando el contenido de una página o un segmento de la aplicación, Next.js se encarga automáticamente de mostrarla. `loading.tsx` se aplica no solo a la página en la carpeta donde está ubicado, sino también a todas las páginas y subcarpetas anidadas dentro de esa carpeta.