# TCP/IP Model

Status: Models

En ocasiones se le denomina **conjunto de protocolos TCP/IP**, en referencia a los dos protocolos más importantes que la componen, que fueron de los primeros en definirse, y que son los dos más utilizados:

- TCP: Protocolo de control de transmisión.
- IP: Protocolo de internet

El modelo TCP/IP a diferencia del modelo OSI es mas practico y no tan teórico, por lo que es el mas utilizado en la actualidad. 

## Capas del modelo TCP/IP

| n | Nombre | Capas del modelo OSI | Descripción | Protocolos |
| --- | --- | --- | --- | --- |
| 4 | Capa de Aplicación | 5, 6 y 7 | Todo lo relacionado con el Usuario. | FTP, SMTP, TFTP, DHCP, DNS, RIP, SNMP, HTTPS, SSH, POP, TELNET, IMAP,SNMP y Bootstrap. |
| 3 | Capa de Transporte | 4 | intercambian confirmación de datos y retransmiten los paquetes perdidos para garantizar que los paquetes llegan en orden y sin errores. | TCP, DCCP, UDP, ICMP, FCP y µTP |
| 2 | Capa de Internet o red | 3 | conseguir que los datos lleguen desde el origen al destino, eligiendo el camino mas rápido o barato. | IP, ICMP, IPSEC y IGMP |
| 1 | Capa de Acceso a la red
Acceso al medio | 1 y 2 | Medios de transmisión físicos(eléctricos, ópticos, etc…) y la seguridad de los datos a través de estos medios | Ethernet, Token ring, FDDI, Frame Relay ,ARP, L2TP, ND y ETHERNET, PPP, HDLC, Wi-fi |

Cada aplicación tiene sus requerimientos de transporte, en algunos casos va a necesitar que en la capa de transporte tenga un protocolo TCP o UDP