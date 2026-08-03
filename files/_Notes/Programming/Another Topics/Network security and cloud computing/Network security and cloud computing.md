
[Communication and data network](Communication%20and%20data%20network.md)

[Bash](Bash.md)

## Hypervisor (virtualizer)

<aside>
📖 Son sistemas de software que crean, gestionar y ejecutar entornos virtuales conocidos como máquinas virtuales (VM), que funcionan como sistemas independientes y aislados aunque se estén ejecutando en el mismo hardware físico.

</aside>

![Untitled-2024-08-10-2112 (9).svg](Untitled-2024-08-10-2112_(9).svg)

### Características de un hypervisor

- **Aislamiento**: los fallos o problemas en una VM no afectan a las otras.
- Escalabilidad: permitir la **asignación dinámica de recursos** entre las máquinas virtuales.
- **Snapshot**:  capacidad de tomar instantáneas del estado de una máquina virtual y **restaurarlas a un estado anterior.**

## Basic Concepts - Network options

Las máquinas virtuales pueden usar **Bridge**, **NAT**, **Internal Network** o **Host-Only** para gestionar su conectividad con redes externas e internas.

- Bridge
    
    Conecta la red virtual del anfitrión (guest) **directamente a la red física a la que está conectado el host.**  Obtienen una dirección IP del mismo rango que el host y pueden comunicarse directamente con otros dispositivos en la misma red, como si fueran dispositivos físicos adicionales.
    
- NAT (Network Address Translation)
    
    Traduce las IPs privadas de la red en una IP publica para que la red pueda enviar paquetes al exterior, **las maquinas virtuales pueden conectarse a otras redes mediante un enrutador virtual** proporcionado por VirtualBox, por lo que desde la red externa, todas las comunicaciones parecen provenir del host. Es útil cuando quieres que las VMs tengan acceso a Internet, pero no necesitas que sean accesibles desde la red.
    
- Internal network
    
    Es una **red virtual completamente aislada**, solo disponible entre las máquinas virtuales conectadas a ella.
    
- Host Only
    
    A la VM se le asignará una IP, pero **sólo será accesible por el equipo en el que se esté ejecutando** la VM. Ningún otro ordenador podrá acceder a ella.
    

![Untitled-2024-08-10-2112 (11).svg](Untitled-2024-08-10-2112_(11).svg)

## Mikrotik Route - Configuration Commands

### **system**

- `Identity` : Se refiere a la identidad del sistema, que es el nombre que identifica al router en la red.
    
    ```bash
    # Cambiar el nombre del router en la red
    > system  identity set name=[new_name]
    ```
    
- `Clock` : Para configurar y mostrar la fecha y hora del sistema.
    
    ```bash
    # Mostrar la hora, fecha, zona horaria y gmt
    > clock print
    # Configurar la hora
    > system clock set time=HH:MM:SS
    # Configurar la fecha
    > system clock set date=YYYY-MM-DD
    # Configurar zona horaria
    > system clock set time-zone-name=time_zone
    # Activar o desactivar el deteccion automatica de zona horaria.
    > system clock set time-zone-autodetected=yes/no
    
    > system clock set time=17:59:00 date=2024-08-17 time-zone-name=America/Bogota 
    ```
    
- `backup` : Crea y gestiona copias de seguridad de la configuración del sistema.
    
    ```bash
    # Guardar un backup
    > system backup save name=[backup_name]
    # Cargar un backup
    > system backup load name=[backup_name]
    ```
    
- `history` : Muestra un registro de los comandos ejecutados y cambios realizados en el sistema.
    
    ```bash
    # Mostrar el historial de cambios
    > system history print
    ```
    
- `package` : Muestra y gestiona los paquetes instalados en el sistema RouterOS.
    
    ```bash
    # Mostrar los paquetes instalados
    > system package print
    ```
    
- `resource` : Muestra información sobre los recursos del sistema, como CPU, memoria, y almacenamiento.
    
    ```bash
    # Mostrar los recursos del sistema
    > system resourse print
    ```
    
- `scheduler` : Permite programar tareas automáticas para que se ejecuten en momentos específicos o a intervalos regulares.
    
    ```bash
    # ejecuta un comando cuando el sistema arranque
    /system scheduler add name=OnStartup start-time=startup interval=0s on-event="/system script run MyStartupScript"
    ```
    

### **user**

| Group | Description |
| --- | --- |
| `full` | Tiene acceso completo a todas las funcionalidades y configuraciones del sistema.  |
| `write` | Permite realizar cambios en la configuración del sistema. |
| `read` | Solo tiene permisos de lectura. |
| `test` | Pueden ejecutar ciertos comandos. |
| `guest` | Acceso restringido solo a funciones básicas |
| `none` | No tienen acceso a ninguna funcionalidad en el sistema. |
- `add` : Permite crear usuarios
    
    ```bash
    # Añadir un nuevo usuario
    > user add name=[username] group=[group] password=[password]
    ```
    
- `set` : Permite modificar un usuario
    
    ```bash
    # Modificar un usuario ya existente
    > user set [ID] name=[new_username] group=[new_group] password=[new_password]
    # Modificar solo la contraseña
    > user set ID] password=[new_password]
    ```
    
- `remove` : permite eliminar un usuario
    
    ```bash
    # Eliminar un usuario
    > user remove [ID]
    ```
    

## Mikrotik Route - Network Commands

### ip

- `address` :
    
    ```bash
    # Muestra la ip asignada a cada interfaz
    ip addresss print
    # Configurar ip
    ip address add 
    ```
    

### interface

```bash
interface print // Muestra las interfaces
```

# Para la próxima clase

Traer TIA1

configurar la segundo interfaz manual

routergrp2

Estudiar tipos de redes

IEEE 802.3 (LAN)

IEEE 802.11 (WLAN)