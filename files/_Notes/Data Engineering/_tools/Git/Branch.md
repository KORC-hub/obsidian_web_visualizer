### Branch

```bash title="Lista todas las ramas, incluidas remotas (-a)"
git branch -a
```

```bash title="Crea y cambia a la nueva rama"
git switch -c nombre-rama
```

```bash title="Eliminar una rama"
git branch -d nombre-rama
```

```bash title="Eliminar una rama a la que no se le ha hecho merge a la fuerza"
git branch -D nombre-rama
```

```bash title="title elimina una rama remota"
git push origin --delete nombre-rama
```


```bash title="Cambiar el nombre de una rama"
git branch -m nombre-rama
```
### Merge

```bash title="Fusionar feature-branch en main"
git switch main
git merge feature-branch
```

```bash title="Continuar merge tras resolver conflictos"
git add archivo-resuelto
git commit
```

```bash title="Cancelar merge en conflicto"
git merge --abort
```

### Rebase

```bash title="Reaplica tus commits sobre main actualizado"
git switch feature-branch
git rebase main
```

```bash title="Continuar rebase tras resolver conflictos"
git add archivo-resuelto
git rebase --continue
```

```bash
git rebase --skip
```

```bash
git rebase --abort
```

> ⚠️ Nunca hagas rebase de ramas que ya compartiste/pusheaste y que otros están usando: reescribe el historial y rompe a los demás.


### Stash

```bash title="crea un stash que guarda los cambios actuales"
git stash
```

```bash title="Muestra una listado de los commit (los cuales se almacenan como un stack (LIFO))"
git stash list
```

```bash title="Aplica el ultimo stash y lo elimina de la lista"
git stash pop
```

```bash title="Aplica el ultimo stash pero no lo quita de la lista"
git stash apply
```

```bash title="Elimina el ultimo stash sin aplicarlo a la rama "
git stash drop
```

---

### Worktree

```bash
git worktree add <path> [<branch>]
```

Agregar la rama es opcional, ya que toma la ultima parte de la ruta como nombre de la rama.

---
### Cherry-pick

Para utilizar este comando tiene que primero obtener el hash del commit que quieres traer a la rama, para esto se puede utilizar `git log` copias el hash del commit que quieres, haces `git switch` a la rama donde quieres llevar el commit ( la rama donde va as insertar el commit **no puede tener cambios sin guardar -> uncommitted**)

```bash
git cherry-pick COMMITHASH
```

	