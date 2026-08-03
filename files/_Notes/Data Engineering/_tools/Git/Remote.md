### Remote

```bash title="Conectar con un repo remoto mediante HTTPS"
git remote add origin [GITHUB_REPO_LINK]
```

---
### Clone

```bash title="Clona un repositorio remoto"
git clone REPO_URL
```

## Workflow

### 1. [[Remote#Clone|Clona]] o [[Remote#Remote|Enlaza]] el repositorio remoto 

### 1.1 (pull) Actualizar el repositorio local, si ha pasado mucho tiempo desde el paso 1.

```bash title="Traer los archivos/cambios del repositorio remoto"
git pull
```

### 2. [[Branch#Branch|Crea una rama]] 

### 3. [[Change|Realiza los cambios]]

---
### 4. (fetch) Sincronizar mi rama con Main

```bash title="Trae la metadata del repositorio remoto (Verificar que cambios se realizaron desde la creacion de la rama)"
git fetch origin
```

Tambien se puede utilizar el siguiente comando para traer la metadata y a la vez elimiar ramas anteriores que ya no esten en remoto y limpiar el repositorio local

```bash title="Traer todo y limpiar ramas remotas borradas"
git fetch --all --prune
```


```bash title="Inicia un rebase de mi rama con la rama main remoto, con el fin de solucionar conflictos"
git rebase origin/main
```

### 5. Solucion de conflictos

- [[Change#add|Añadir los cambios al area de preparacion]]

```bash title="Termina el rebase"
git rebase --continue
```

### 6. (push) Enviar cambios a el repositorio remoto -> Pull request

```bash
git push --force-with-lease
```

Si esta lista para hacer el **pull request** y se tiene instalado Github CLI: 

```bash
gh pr create --title "feat: agregar login" --body "Descripción del cambio" --base main --head nombre-rama
```
### 7. [[Branch#Branch|Despues del hacer la PR, eliminar la rama local y remota]] 

