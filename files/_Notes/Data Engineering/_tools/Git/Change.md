### add

```bash title="Agregar todos los archivos al stage"
git add .
```

---
### Commit

```bash title="Generar un commit"
git commit -m "chore: initial commit"
```

```bash title="Editar mensaje del ultimo commit"
git commit --amend -m "nuevo mensaje"
```

```bash title="Agregar cambios al ultimo commit sin cambiar el mensaje"
git commit --amend --no-edit
```

---
### Restore

```bash title="Descartar cambios no staged"
git restore archivo.ts
```

```bash title="Quitar del stage (unstage)"
git restore --staged archivo.ts
```

---
### Reset

```bash title="Volver a un commit, mantiene cambios staged"
git reset --soft COMMITHASH
```


If you accidentally commit the resolution of a rebase conflict, just:
- git reset --soft HEAD~1

---
### Revert

```bash title="Deshacer un commit creando uno nuevo"
git revert COMMITHASH
```


