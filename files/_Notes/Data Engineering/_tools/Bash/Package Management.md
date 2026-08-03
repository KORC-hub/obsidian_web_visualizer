# Gestión de paquetes

## `tar` (tape archive)

> [!note] Descripción Es un archivador. Se utiliza para agrupar varios archivos y carpetas en un solo archivo (un tarball).

- Se usa a menudo en combinación con `gzip` o `bzip2` para crear un archivo comprimido que contenga varios archivos o directorios. Similar a **7-Zip** o **WinRAR** en Windows.
- Es una de las herramientas más comúnmente utilizadas para empaquetar e instalar software en sistemas Unix y Linux.

## `apt` (advanced package tool)

> [!note] Descripción Es un sistema para la gestión de paquetes.

**Update**

```bash
sudo apt update # apt
sudo apt upgrade # todos los paquetes
```

**Install**

```bash
sudo apt install package_name
sudo apt install package_name=version
```

**Remove**

```bash
sudo apt remove package_name
```

**List packages**

```bash
dpkg -l
apt list --installed
apt list --installed | grep <nombre_del_paquete>
```

**Download packages (without installing)**

```bash
apt download package_name
```

**Show package information**

```bash
apt show package_name
```
