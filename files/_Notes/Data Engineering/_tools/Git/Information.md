### Status

```bash title="Ver estado del repo"
git status
```

---
### Log

```bash
git log
```

- `--oneline` : una linea por commit
- `--graph` : visual
- `--all` : todas las ramas
- `--decorate` : Muestra las referencias
- `--parents` : Muestra el hashes de los padres de cada commit
- `-n` : ultimos n commits
- `-author` : filtrar por autor
- `--stat` : Resumen de archivos cambiados por commit

```bash
git show COMMITHASH
```

---
### Reflog

```bash title="Historial de TODO lo que hiciste (recupera commits perdidos)"
git reflog
```

```bash title=""
git merge HEAD@{1}
```

---
### Diff

```bash
git diff
```

```bash
git diff --staged
```

```bash
git diff main..feature-branch
```

```bash
git diff COMMITHASH1 COMMITHASH2
```