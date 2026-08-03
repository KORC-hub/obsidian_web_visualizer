
Status: Route Handlers

```tsx
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const headersList = await headers();  // Request headers 
    console.log(headersList.get("Authorization"));

    return new Response("<h1>Profile Api</h1>", {
        headers: { // Response headers 
            "content-type": "text/html",
            "set-Cookie": "theme=dark",
        },
    });
}
```