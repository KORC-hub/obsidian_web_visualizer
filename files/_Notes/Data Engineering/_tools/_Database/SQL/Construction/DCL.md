	# DCL (Data Control Language)

> Utilizados para definir los roles de usuario, conceder o revocar permisos de acceso a los objetos de la base de datos, garantizando que los datos estén protegidos y se puedan acceder solo de manera adecuada y autorizada.

## GRANT

Otorgar permisos a un usuario:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON clientes TO usuario1;
```

## REVOKE

Revoca los permisos que se han concedido previamente a un usuario específico:

```sql
REVOKE INSERT, UPDATE ON clientes FROM usuario1;
```

## DENY

Niega a un usuario específico la capacidad de realizar una acción o conjunto de acciones:

```sql
DENY DELETE ON clientes TO usuario1;
```

La diferencia principal entre `REVOKE` y `DENY` es que `REVOKE` retira los permisos que se habían otorgado previamente, mientras que `DENY` niega explícitamente un permiso a un usuario o rol, incluso si se le había otorgado anteriormente.

Por ejemplo, si un usuario tiene el permiso de `SELECT` en una tabla y luego se revoca ese permiso mediante un comando `REVOKE`, el usuario ya no tendrá acceso a esa tabla. Sin embargo, si se niega explícitamente el permiso de `SELECT` en la misma tabla a través de un comando `DENY`, el usuario no podrá acceder a la tabla, incluso si se le otorga el permiso de `SELECT` en el futuro a través de un comando `GRANT` o una función de rol.
