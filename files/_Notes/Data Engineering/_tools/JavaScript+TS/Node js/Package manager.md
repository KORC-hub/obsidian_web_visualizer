Un gestor de paquetes sirve para **manejar dependencias** de tu proyecto (instalarlas, actualizarlas, eliminarlas), osea manejar el Maneja el `package.json` y `node_modules`. Hoy en dia, existen varias alternativas como: `npm`, `yarn`, `pnpm` y `bun`

## ¿Porque existen tantos si todos hacen lo mismo?

El gestor de paquetes que viene preinstalado en node es `npm` (node package manager), el cual era lento y problemático en sus primeras versiones por lo que Meta (Facebook) creo `yarn` que era mas rapido que npm pero ocupaba más espacio en disco innecesariamente dado que duplicaba paquetes, por lo que se creo `pnpm` que usaba hard links, permitiendo que múltiples proyectos compartan los mismos archivos, apuntando todos a una sola copia. 

La ultima alternativa y la mas moderna es `bun` que es el mas rapido y su uso de memoria esta optimizado, ademas, es capaz de reemplazar el runtime tradicional de Node.js con su propio runtime y bundler escrito en **Zig** (un lenguaje muy rápido).

## ¿Cual escoger?

Aunque bun sea el mas moderno y parece solucionar todos los problemas, cada gestor de packetes tiene diferencias clave en rendimiento, filosofía y funcionalidad.

| Caracteristicas                    | npm           | yarn            | pnpm                               | bun                    |
| ---------------------------------- | ------------- | --------------- | ---------------------------------- | ---------------------- |
| Velocidad                          | 🐢 Mas lento  | ✅ Bueno         | ⚡ Muy rapido                       | ⚡⚡ Super rapido        |
| Uso de espacio en memoria          | ❌ Duplicación | ❌ Mejor que npm | ✅ Usa _hard links_ (muy eficiente) | 🚀 Optimizado          |
| Compatibilidad con npm registry    | ✅ <br>        | ✅ <br>          | ✅ <br>                             | ✅ <br>                 |
| Entorno de ejecución               | ❌             | ❌               | ❌                                  | ✅ Runtime completo<br> |
| Soporte para workspaces (monorepo) | Básico        | Excelente       | Excelente                          | Bueno                  |
En resumen:
- `npm` es oficial y no hay que complicarse instalando otro gestor
- `yarn` si trabajas con él o usás monorepos
- `pnpm` si querés velocidad + eficiencia en memoria (muy recomendado en grandes proyectos).
- `bun` si usás TypeScript, y buscás máxima velocidad en todo.

# Instalacion

como npm ya esta instalado por defecto en Node.js se puede utilizar este para instalar otros gestores 
## corepack

En términos prácticos, CorePack le permite usar yarn, npm (innecesario), y pnpm sin tener que instalarlos, pudiendo usar versiones automáticas por proyecto, lo que mejora el trabajo en equipo ya que es una forma asegura de controlar que todos usen el mismo gestor y versión

```shell title:"instalación de corepack"
npm install -g corepack
npm init -y # se crea el proyecto
```

Despues de instalarlo y crear el proyecto se crae un `package.json` en el que se puede especificar el gestor

```json title:"Configuracion del package.json"
{
  "packageManager": "yarn@3.6.4"
  // "packageManager": "pnpm@8.15.1"
  
}
```

**Corepack lo detecta y lo prepara** automáticamente, descargando esa versión de yarn o pnpm y la usa **sin instalarlo globalmente**

```shell title:"Instalacion de las dependencias"
# yarn install
# pnpm install
```
## Instalacion global


```shell title:"Instalación de yarn"
npm install -g yarn
yarn init
```

```shell title:"Instalación de pnpm"
npm install -g pnpm
pnpm init
```

```shell title:"Instalación de bun"
# powershell -c "irm bun.sh/install.ps1|iex"
npm install -g bun
bun init
```


# Usos

```shell title:" Iniciar y manejar dependencias de un proyecto"
npm/yarn/pnpm/bun init # inicializa un proyecto
npm/yarn/pnpm/bun install # instalar las dependencias
```

## Instalar paquetes

Para instalar versiones especificas se pone un @ despues del nombre del paquete, ejemplo `react@17.0.2`

```shell title:"Dependencias de producción"
npm install <nombre_del_paquete> # ej: express 
yarn/pnpm/bun add <nombre_del_paquete>
```

```shell title:"Dependencias de desarrollo"
npm install -D <nombre_del_paquete> # ejm: eslint, rspack
yarn/pnpm add -D <nombre_del_paquete>
bun add --dev <nombre_del_paquete>
```

```shell title:"Dependencias globales"
npm install -g <nombre_del_paquete> # ej: typescript
yarn global add <nombre_del_paquete>
pnpm/bun add -g <nombre_del_paquete>
```

## Ejecutar Scripts

Por lo general el nombre de los scripts estan definidos en el `package.json`, pero por lo general es `dev`, `build`, `start`, `test`. Aunque puedes crear tus propios scripts.

```shell title:"run scripts"
npm/yarn/pnpm/bun run <script>
```




# bun



