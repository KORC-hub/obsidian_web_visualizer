# Network layer

Status: Protocols TCP/IP

### IP (Internet Protocol)

Es el conjunto de reglas que rigen el formato de los datos enviados a través de Internet o la red local. el enrutamiento de datos y la conexión a internet.

- IPv4
    
    IPv4 ofrece más de 4 mil millones de direcciones únicas
    
- IPv6
    
    Aumenta el número de direcciones IP posibles desde los 4 mil millones de IPv4 hasta los *340 billones de billones de billones*. IPv6 se escribe como una cadena hexadecimal de dígitos de 128 bits, y una dirección IPv6 típica es algo así: **2001:0ab8:85a2:0000:0000:8a3e:0370:7334**
    

### NAT (Network Address Translation)

### ICMP (Internet Control Message Protocol)

Informar sobre errores. Cuando dos dispositivos se conectan a través de Internet, el ICMP genera errores para compartirlos con el dispositivo emisor en caso de que alguno de los datos no haya llegado a su destino previsto.

El protocolo ICMP es esencial para la comunicación en redes IP, en las que los routers son los que lo utilizan. Los servidores y los clientes también hacen uso igualmente de las posibilidades de los mensajes vinculados al protocolo de Internet y, de este modo, reciben **información de red importante**.

El "ping de red" es una herramienta común para diagnosticar la accesibilidad de un host en la red. Se ejecuta a través de la línea de comandos del sistema operativo. Envía un paquete IP con una solicitud "Echo Request" ICMP al host objetivo. Si el host responde, envía un paquete de datos con una entrada "Echo Reply" ICMP. Si el host no se encuentra, la última estación de red enviará un paquete de respuesta con un componente ICMP "Destination Unreachable".

un dispositivo no necesita abrir una conexión con otro dispositivo antes de enviar un mensaje ICMP. El tráfico IP normal se envía utilizando TCP, lo que significa que dos dispositivos que intercambian datos primero llevarán a cabo un protocolo de enlace TCP para asegurarse de que ambos dispositivos estén listos para recibir datos. ICMP no abre una conexión de esta manera. El protocolo ICMP tampoco permite apuntar a un puerto específico en un dispositivo.

### Protocolos de routing (OSPF, EIGRP)

- OSPF
- EIGRP

### Otros

IPSEC y IGMP