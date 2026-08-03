# Triggers

## Creation

```sql
CREATE TRIGGER trig_nameTrigger ON {tabla_name | vista_name}
{FOR|AFTER|INSTEAD OF} {[INSERT][,][UPDATE][,][DELETE]}
AS
BEGIN
    sentencia_sql
END
```

Cuando se está haciendo un trigger para un `INSERT`, se guarda la información en una tabla temporal llamada `inserted`. Por otra parte, si se está haciendo un trigger para un `DELETE`, se guarda la información eliminada en una tabla temporal llamada `deleted`. En caso de `UPDATE` no existe una tabla temporal llamada `updated`; en este caso, el nuevo dato se guarda en `inserted` y el dato que estaba se guarda en `deleted`.

## Alter trigger

```sql
ALTER TRIGGER trig_nameTrigger ON {tabla_name | vista_name}
{FOR|AFTER|INSTEAD OF} {[INSERT][,][UPDATE][,][DELETE]}
AS
BEGIN
    sentencia_sql
END
```

## Disable and Enable trigger

Un trigger:

```sql
[DISABLE/ENABLE] TRIGGER trigger_name ON table_name;
```

Todos los triggers de una tabla:

```sql
ALTER TABLE table_name [DISABLE/ENABLE] TRIGGER ALL;
```

Todos los triggers:

```sql
[DISABLE/ENABLE] TRIGGER ALL ON ALL SERVER;
```

## Drop trigger

```sql
DROP TRIGGER trigger_name;
```

> **Nota:** Una tabla puede tener un máximo de tres triggers: uno de actualización, uno de inserción y uno de eliminación. Además, a diferencia de un procedimiento almacenado, un trigger no retorna ni recibe parámetros.
