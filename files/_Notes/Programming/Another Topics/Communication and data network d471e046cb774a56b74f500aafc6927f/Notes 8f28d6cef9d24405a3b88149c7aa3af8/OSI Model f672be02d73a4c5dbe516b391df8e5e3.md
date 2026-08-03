# OSI Model

Status: Models

Es importante tener en cuenta que el modelo OSI es puramente teórico y en la actualidad se utiliza para comprender como funciona en si los equipos y protocolos de red, modelos como TCP/IP hace que esto sea mucho mas fácil. 

- Capas del modelo OSI
    
    
    | n | Nombre | PDU | Descripción | Protocolos |
    | --- | --- | --- | --- | --- |
    | 7 | Capa de aplicación | Datos | datos generados y utilizados por las aplicaciones de software. Dando la posibilidad de acceder a los servicios de las demás capas y define los protocolos que utilizan las aplicaciones para intercambiar datos.
    
    Cabe aclarar que el usuario normalmente no interactúa directamente con el nivel de aplicación. Suele interactuar con programas que a su vez interactúan con el nivel de aplicación pero ocultando la complejidad subyacente. **Interactúa con los usuarios**  | **FTP** (File Transfer Protocol)
    
    **DNS** (Domain Name System)
    
    **HTTPS** (hyperText Transfer Protocol Secure)
    
    **POP3** (Post Office Protocol 3)
    
    SMTP (Simple  Mail Transfer Protocol)
    
    **SSH** (Secure SHell)  |
    | 6 | Capa de presentación | Datos | Se encarga de la representación de la información, de manera que aunque distintos equipos puedan tener diferentes representaciones internas de caracteres números, sonido o imágenes, los datos lleguen de manera reconocibles. En resumen **se ocupa principalmente de la sintaxis de los datos** | **HTML** (HYperText Markup Language)
    
    **JSON** (JavaScript Object Notation)
    
    **CSV** (Comma-Separeted Values) |
    | 5 | Capa de Sesión | Datos | establece, administra y finaliza las sesiones entre dos hosts que se están comunicando. proporcionando los mecanismos para controlar el diálogo entre las aplicaciones, estos pueden ser full-duplex o half-duplex, también puede agrupar los datos, recuperar datos desde el último punto de comprobación y no desde el principio y notificar errores, pero en resumen, es una **forma de organizar y sincronizar el diálogo y controlar el intercambio de datos. Inicia mantiene y termina la sesión.** | **RPC** (Remote Procedure Call: transfiere el flujo de control y los datos entre dos espacios de direcciones a través de una red)
    
    **SCP** (Secure Copy Protocol: Garantiza la transferencia segura de datos entre un equipo local y uno remoto, o ambos remotos)
    
    **ASP** (AppleTalk Session Protocol)
     |
    | 4 | Capa de transporte | Segmento | proporciona los medios de transmisión de datos entre las dos partes conectadas, así como el control de la calidad del servicio, o en otras palabras, se encarga de la transmisión de segmentos de datos confiable entre puntos de red. | **UDP**(User Datagram Protocol): no orientado a la conexion. es mas liviano y no tiene tanta seguridad. situaciones de velocidad.
    
    **TCP**(Transmission Control Protocol): orientado a la conexion. situaciones de fiabilidad.
    
    **SCTP**(Stream Control Transmission Protocol): mejora al TCP |
    | 3 | Capa de red  | Paquete de datos | Su propósito es **conseguir que los datos lleguen desde el origen al destino,** eligiendo el camino mas corto, rápido o barato. Teniendo en cuenta lo anterior se podría decir que esta capa es responsable del **direccionamiento** lógico y el dominio del enrutamiento. | **IP** (Internet Protocol: La información IP se adjunta a cada paquete y esta información ayuda a los enrutadores a enviar los paquetes al lugar correcto)
    
    **IPv4** (1987): 32 bits
    **IPv6** (2012): 128 bits
    
    **IPX/SPX** (Internetwork Packet Exchange / Sequenced Packet Exchange) |
    | 2 | Capa de enlace | Trama | La capa de enlace de datos es la **encargada de detectar y corregir los errores.** Un método común de detección de errores es que la capa de enlace de datos **separe el flujo en tramas separadas (paquetes de datos)** y que realice la suma de verificación de cada trama. Cuando una trama llega a su destino se recalcula la suma de verificación. **Si es distinta de la contenida en la trama es porque ha ocurrido un error y la capa de enlace debe solucionarlo.** En resumen **La capa de enlace de datos proporciona tránsito de datos confiable a través de un enlace físico.** | **MAC** (Media Access Control)
    
    **LLC** (Logial Link Control) |
    | 1 | Capa física  | Bit | La capa física recibe un flujo de bits e intenta enviarlo al destino, estos pueden ser enviados por diferentes medios de transmisión como mecánicos, ópticos, eléctricos, etc.. **En resumen es la señal y transmisión binarias por algún medio.** | **xDSL** (Digital Subscriber Line: Es una familia de tecnologías de transmisión de datos que utiliza líneas telefónicas de cobre que dan acceso a internet).
    
    **USB** (Universal Serial Bus)
    
    **Bluetooth** (:Comunicación Inalámbrica entre dispositivos enfocado en redes PAN)
    
    **Wi-Fi** (Wireless-Fidelity: Especificaciones para las redes de área local inalámbrica) |
    |  |  |  |  |  |

De la capa 1-3 se le llama capas del medio (Media layers) y de la capa 4-7 se llama capas de anfitrión (Host layers).

Además del PDU (Protocol Data Unit) de cada capa son los siguientes: 

- 1. Bit o Blaudios
- 2. Trama: Serie sucesiva de bits
- 3. Paquete de datos: Es una unidad fundamental de transporte de datos, esta formada por tres elementos:
    - header(información necesaria para trasladar los datos)
    - payload(contiene los datos)
    - trailer(código de detección de errores)
- 4. Segmentos: la segmentación de paquetes es el proceso de dividir un paquete de datos en unidades más pequeñas para su transmisión a través de la red
- 5-7. Datos: Información