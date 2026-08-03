# Git

## Temas

- [[config]]
- [[Change]]
- [[Branch]]
- [[Information]]
- [[Remote]]

## Flujo de trabajo 

### 1. Unicia el proyecto

```bash title="Crear repositorio"
git init
```
### 2. [[Branch#Branch|Crea una rama]] 

### 3. [[Change#add|Agregar los cambios al area de preparacion]] y [[Change#Commit|realizar el commit]]

### 4. [[Branch#Merge|Unir a la rama principal]] 

### 5. [[Branch#Branch|Eliminar la rama]] 


## Otros comandos

### Bisect

```bash
git bisect start
```

```bash
git bisect good [commitish]
```

```bash
git bisect bad [commitish]
```

```bash
git bisect [good/bad]
```

```bash
git bisect reset
```

### Tags

```bash
git tag v1.0.0
```

```bash
git tag -a v1.0.0 -m "release 1.0.0"
```

```bash
git push origin v1.0.0
```

```bash
git push origin --tags
```

### blame

```bash title="Quien y cuando modifico cada linea de un archivo"
git blame archivo.ts
```
