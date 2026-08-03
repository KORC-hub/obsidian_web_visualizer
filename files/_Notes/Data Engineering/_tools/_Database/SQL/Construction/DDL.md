# DDL (Data Definition Language)

> Definir y modificar la estructura de una base de datos, incluyendo la creación, modificación y eliminación de tablas, vistas, índices, procedimientos almacenados y otros objetos de la base de datos.

## CREATE

Crear una **base de datos**:

```sql
CREATE DATABASE mydatabase;
```

Crear una **tabla** en la base de datos:

```sql
CREATE TABLE clientes (
    clientes_id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100),
    numero_telefono VARCHAR(20),
    fecha_nacimiento DATE
);
```

## ALTER

Modificar el **tipo de datos** de una columna:

```sql
ALTER TABLE clientes ALTER COLUMN numero_telefono VARCHAR(15);
```

Agregar una **columna** a una tabla existente:

```sql
ALTER TABLE clientes ADD direccion VARCHAR(100);
```

Agregar **restricciones** a una tabla:

```sql
ALTER TABLE Clientes ADD CONSTRAINT PK_clientes PRIMARY KEY (id);
```

> **Nota:** `ALTER` es comúnmente utilizado para modificar la estructura de tablas, pero este comando también se puede utilizar en otros casos como los índices, la base de datos, los usuarios y los esquemas.

## DROP

Eliminar una **tabla** existente:

```sql
DROP TABLE clientes;
```

Eliminar una **base de datos** existente:

```sql
DROP DATABASE GestorClientesDB;
```

## RENAME

Renombrar una **tabla**:

```sql
ALTER TABLE old_table_name RENAME TO new_table_name;
```

Renombrar una **columna**:

```sql
ALTER TABLE clientes RENAME COLUMN numero_telefono TO numero_celular;
```

## COMMENT

Agregar un comentario a una tabla:

```sql
COMMENT ON TABLE clientes IS 'Tabla de clientes';
```

Agregar un comentario a una columna:

```sql
COMMENT ON COLUMN clientes.email IS 'Correo electrónico del cliente';
```
