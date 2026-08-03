# Media access layer

Status: Protocols TCP/IP

### PPP (Point-to-Point ***Protocol***)

Establece y mantiene una conexión entre dos equipos(router) y que se efectúa de manera correcta, enfocado en redes WAN.

### HDLC (High-Level Data Link Control)

Intercambio de tramas(serie sucesiva de bits) entre dos estaciones. Garantiza la transmisión de datos sin errores a los destinos adecuados y controla la velocidad de transmisión de datos.

### ARP **(Address Resolution Protocol)**

Es el protocolo encargado de encontrar la dirección física conocida como MAC (**identificador único del dispositivo** a través del cual nos conectamos a Internet) de una dirección IP

Normalmente un usuario se comunica con un dispositivo dentro de su red local utilizando la IP destino. Pero internamente el equipo necesita la dirección MAC para establecer la comunicación.

Los equipos tienen una tabla ARP donde almacenan las direcciones MAC que corresponden a las direcciones IP de su red local. se puede ver en windows con el comando

```powershell
arp -a
```

### ARP Request

EL equipo que no sabe la MAC del otro equipo envía una ARP request que contiene una trama de ethernet con lo siguiente: **MAC Broadcast** (FF-FF-FF-FF-FF-FF)

![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/Media%20access%20layer%206bdfdcf381444377811e0816df6c9830/Untitled.png)

### ARP Gratuito

Es algo que realiza la computadora durante el arranque. Cuando la computadora arranca (la tarjeta de interfaz de red está encendida) por primera vez, transmite automáticamente su dirección MAC a toda la red. Después de ARP gratuito, la dirección MAC de la computadora es conocida por todos los conmutadores y permite que los servidores DHCP sepan dónde enviar la dirección IP si se solicita.

### Ethernet