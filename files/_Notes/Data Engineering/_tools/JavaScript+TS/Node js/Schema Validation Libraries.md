

# Zod 

![[Pasted image 20250610030538.png|200]]

**Zod** es una **librería TypeScript-first** para **validación de esquemas y parsing de datos**. Fue creada para proporcionar una forma segura, concisa y expresiva de validar objetos, arrays, strings, etc., **en tiempo de ejecución**, mientras se mantiene una excelente integración con **los tipos de TypeScript**.

por lo general se utiliza para verificar **datos de formularios** en frontend, validar datos provenientes de APIs externas o **endpoints en backend**.

Zod es una alternativa moderna a otras librerias como [Yup](https://github.com/jquense/yup) y [Joi](https://github.com/hapijs/joi), ademas de que cuenta con un soporte fuerte para TypeScript.

La forma mas facil de entender Zod es imaginar que estas haciendo una interfaz de TypeScript, pero debes de user solo tipos como `string`, `number` o `boolean` utilizamos las funciones que proporciona Zod.

## Tipos primitivos

lo primero es especificar el tipo de dato para esto tenemos los siguientes metodo: `string()`, `number()`, `boolean()`, `bigint()`, `date()`, `null()`, `undefined()`, 
Aunque tambien tenemos otros mas avanzados como:
- `literal(value)` -> Un valor literal específico (ej. `z.literal("admin"))` )
- `enum([...])` -> Una lista de valores posibles ( `z.enum(['cat', 'dog'])` )

## Tipos Compuestos

Se puedes especificar estructuras mas avanzadas como: 

- `array(zType)` ->  Un array de elementos de un tipo específico ( `z.array(z.string())` )
- `tuple([a, b, ...])` -> Un array con longitud fija y tipos específicos por posición ( `z.tuple([z.string(), z.number()])` )
- `set(type)` -> Un objeto tipo Set con valores de cierto tipo
- `map(k, v)` -> Un objeto tipo `Map` con claves y valores validados ( `z.map(z.string(), z.number())` )

y el mas importante

- `object({...})` -> Un objeto con estructura definida (ej [[Schema Validation Libraries#Ejemplo|Ejemplo]])

## Metodos encadenables

Los mas comunes para string son: `.min(n)`, `.max(n)`, `.email()`, `.url()`, `.uuid()`

Para numeros los mas comunes son: `.int()`, `.positive(>0)`, `.nonnegative(>=0)`

Otros:
- `.default(valor)` -> Usa un valor por defecto si el campo está ausente
- `.optional()` -> El valor puede ser `undefined`
- `.nullable()` -> El valor puede ser `null`

Algunos metodos permiten poner un mensaje personaliza, solo hay que pasar un objeto con el atributo `message` como parametro: `{ message: "mensaje personalinzado" }`

## Metodos avanzados

por ultimo existen dos metodos que permiten pasar funciones anonimas como paremtros, estos son: `.transform()` y `.refine()`

`.transform()` cambiar el valor después de que ha sido validado por lo que **no lanza error**. ( `z.string().transform(val => val.trim().toUpperCase())` : "hola" -> "HOLA" )

`.refine()` valida el valor con una función booleana, por lo que devuelve `true` si es válido, `false` (o lanza error) si no. ( `z.string().refine(val => val.length >= 5, { message: "Error" })` )

## Ejemplo


```ts title:"Example of Zod"
import { z } from "zod"

const ProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive().transform((val) => parseFloat(val.toFixed(2))),,
  tags: z.array(z.string()).optional(),
  category: z.enum(['books', 'tech', 'clothing']),
});

```

## Extraer el tipo

con `z.infer<typeof Schema>` podemos extraer un typo TypeScript de el Schema que creamos con zod:

```ts title:"Schema to Type"
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number().int(),
});

type User = z.infer<typeof UserSchema>;
/* 
type User = {
  name: string;
  age: number;
};
*/
```

# Validbot

![[Pasted image 20250610030751.png|200]]
**Valibot** funciona muy parecido a **Zod**, pero tiene una gran diferencia, su diseño es **modular**, lo que significa que solo se incluye en tu código lo que realmente usas.

El tamaño del archivo final (bundle) puede ser **mucho más pequeño** que usando Zod.En algunos casos, el tamaño puede ser hasta un **95% menor**.  Esto es especialmente útil cuando haces validaciones **en el navegador (frontend)** o en **funciones sin servidor (serverless)**, donde el tamaño importa mucho.

![[Pasted image 20250610033117.png|800]]

https://valibot.dev/guides/mental-model/

.trim()
v.date()
v.parse()
v.pipe()
v.symbol()