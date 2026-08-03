
Status: Navigation

Por lo general queremos que el usuario pueda navegar por la pagina sin tener que poner las URL exactas de cada sección, para esto utilizamos el componente `Link` de next:

```tsx
import Link from "next/link";

export default function PageConponent() {
		const productId = 100;
    return (
        <>
            <Link href="/blog">Blog</Link>
            
	          <Link href={`/products/${productId}`}>
		           product {productId}
            </Link>
            
         </>
	    );
}
```