# Application layer

Status: Protocols TCP/IP

### Sistema de nombres (DNS)

**DNS (Domain Name System):** 

El sistema de nombres de dominio traduce los nombres de los dominio a direcciones IP para que los nevegadores puedan cargar los recursos de internet. Por ejemplo: convertir un nombre de servidor (como www.example.com) en una dirección IP compatible con el ordenador (como 192.168.1.1).

### Configuración de host (BOOTP, DHCP)

Los protocolos se utilizan para obtener la dirección IP del host junto con la información de arranque.

- BOOTP (Boot Strap Protocol.)
    
    el servidor BOOTP tiene una lista preestablecida de direcciones IP disponibles que el administrador de red configura manualmente. Cuando un cliente hace una solicitud al BOOTP, el servidor selecciona una dirección IP disponible de su lista y la asigna al cliente. La dirección IP asignada al cliente se mantendrá en uso hasta que el cliente la libere explícitamente o hasta que expire el tiempo de asignación.
    
    Por lo tanto, es un protocolo cliente-servidor diseñado para obtener la dirección IP y otros datos de una computadora que se inició por primera vez en la red.
    
- DHCP (Dynamic Host Configuration Protocol)
    
    DHCP es una extensión de BOOTP y se diseñó para ser compatible con las implementaciones BOOTP existentes. 
    
    Se encarga de **asignar de manera dinámica** y automática una dirección IP,
    DHCP es una versión más avanzada de BOOTP que permite la configuración automática de direcciones IP, mientras que BOOTP requiere una configuración manual.
    

### Correo electrónico (SMTP, POP, IMAP)

- SMTP (simple Mail Transfer Protocol)
    
    **Se utiliza para enviar y recibir correo electrónico.**
    
    Es un protocolo de red utilizado para el envío de correo electrónico entre servidores de correo electrónico. Su función principal es transferir mensajes de correo electrónico desde el cliente de correo electrónico del remitente al servidor de correo electrónico del destinatario.
    
    Normalmente se utiliza con POP3 o con el protocolo de acceso a mensajes de Internet (IMAP) para guardar mensajes en un buzón del servidor y descargarlos periódicamente del servidor para el usuario. Ósea que el destinatario pueda acceder a sus correos electrónicos, utilizando uno de dos protocolos principales.
    
    ![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/Application%20layer%202ea7eb11131949088a5b51cd9cd4cfaf/Untitled.png)
    
- POP3 (Post Office Protocol)
    
    **Establecer una conexión entre un cliente y un servidor de correo electrónico. Por defecto, solo se puede acceder a los correos electrónicos desde el dispositivo en el que se descargaron.**
    
- IMAP (Internet Message Access Protocol)
    
    IMAP es un protocolo para obtener acceso al correo electrónico. **Los usuarios pueden acceder a sus correos electrónicos desde cualquier dispositivo.** por lo que es ****recomendado cuando necesita comprobar los correos electrónicos desde varios dispositivos, como un teléfono, un portátil y una tableta.
    
    ![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/Application%20layer%202ea7eb11131949088a5b51cd9cd4cfaf/Untitled%201.png)
    

### Transferencia de archivos (FTP, TFTP)

- FTP (File Transfer Protocol)
    
    es un protocolo de red utilizado para transferir archivos entre computadoras en una red, permitiendo la subida y bajada de archivos de manera eficiente y segura a través de Internet.
    
    **Las conexiones FTP tienen una relación de cliente y servidor**. Esto quiere decir que un ordenador tiene que estar configurado como servidor FTP, ese en el que se aloja el contenido, y luego tú te conectas a él como un cliente. En los ordenadores, los datos del protocolo FTP se envían a través de los puertos 20 y 21, que son los que están asignados en todos los equipos para llevar a cabo sus transferencias de archivos. 
    
    Aunque eso de tener un ordenador como cliente y otro como servidor puede parecer complicado si no entiendes de estas cosas, afortunadamente hoy en día todo esto es sencillo. **Sólo vas a tener que utilizar un programa que se encargue de todo**, que son esos a los que se les llama clientes FTP.
    
    Estos servidores no suelen estar abiertos para que cualquiera entre y coja los archivos que quiera. **Necesitarás tener una cuenta de acceso** para conectarte. Esto, en parte, ha hecho que otras alternativas más sencillas de cara a los usuarios como las nubes o el P2P se acabasen imponiendo a la hora de compartir archivos.
    
    El protocolo FTP tal cual es un protocolo inseguro, ya que su información no viaja cifrada. Sin embargo, en 2001 esto se solucionó con el protocolo FTPS, que le añade una capa SSH para hacerlo más seguro y privado.
    
- TFTP (Trivial File Transfer Protocol)
    
    Es un protocolo de transferencia de archivos simple utilizado para la transferencia de archivos entre dispositivos en una red. A diferencia de FTP, TFTP carece de características avanzadas como autenticación y seguridad, centrándose en la simplicidad y la velocidad de transferencia.
    

### Web (HTTP)

HTTP (Hypertext Transfer Protocol)

Es el protocolo que permite la comunicación entre un cliente (como un navegador web) y un servidor (donde se encuentra alojado el contenido web). Funciona como un mensajero que lleva solicitudes del cliente al servidor y devuelve respuestas. Utiliza un sistema de solicitud-respuesta donde el cliente solicita recursos al servidor mediante URLs, y el servidor responde con el contenido solicitado, como páginas web, imágenes o archivos. Es fundamental para la navegación y transferencia de datos en la web.

### Otros

 RIP

SNMP

SSH

TELNET

SNMP