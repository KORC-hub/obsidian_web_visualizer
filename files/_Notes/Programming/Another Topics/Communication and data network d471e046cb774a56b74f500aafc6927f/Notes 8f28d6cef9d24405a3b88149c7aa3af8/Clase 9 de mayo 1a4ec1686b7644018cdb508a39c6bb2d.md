# Clase  9 de mayo

Status: Not started

```bash

// cambiar nombre al router
Router# configure terminal
Router(config)# hostname [Nombre]

// poner contraseña la modo privilegiado
Router# enable password [password]
Router(config)# enable secret [password] // tiene mayor prioridad que la anterior

// poner contraseña 
Router# configure terminal
Router(config)# line vty 0 4
Router(config-line)#password [password]

```

![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/Clase%209%20de%20mayo%201a4ec1686b7644018cdb508a39c6bb2d/Untitled.png)