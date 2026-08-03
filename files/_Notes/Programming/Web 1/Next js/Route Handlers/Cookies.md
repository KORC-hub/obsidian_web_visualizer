
Status: Route Handlers

```tsx
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const theme = request.cookies.get("theme");
    console.log(theme);

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    
    console.log(cookieStore.get("resultsPerPage"));
    cookieStore.delete("resultsPerPage");

    return new Response("Profile Api", {
        headers: {
            "set-Cookie": "theme=dark",
        },
    });
}
```