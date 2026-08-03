# IP Addressing

Status: Concepts

![Direcciones_IP.png](Direcciones_IP.png)

### Dirección IP

Es un **identificador único** asignado a cada dispositivo conectado a una red. Una IP se conforma por **4 octetos** los cuales pueden representar tanto a la red como al host, para saber cual es cual se utiliza la **Máscara de subred, esta determina qué parte de la dirección IP identifica la red y cuál identifica el host, si es 255 el octeto identifica la red  y si es 0 el octeto identifica al host.**

$$
\text{IP address: } 192.168.1.31
\\ \downarrow  \\
\text{Mask Decimal: } 255.255.255.0
\\
\text{Mask Binary: } 11111111.11111111.11111111.00000000   
$$

### Dirección de red

Es la primera dirección disponible en esa red y se utiliza para identificar la red en sí misma. Por ejemplo, en la red del ejemplo anterior, la dirección de red sería

$$
192.168.1.0
$$

### Dirección Broadcast

Es una dirección especial que permite enviar datos a todos los dispositivos dentro de una red. En IPv4, la dirección de broadcast suele ser la última dirección disponible en una red. Las direcciones de broadcast son útiles para difundir información a todos los dispositivos en una red simultáneamente. En el ejemplo anterior, la dirección de broadcast sería: 

$$
192.168.1.255
$$

# Creación de subredes

EJ: Dada la dirección IPv4 192.168.20.x/30

- Determinar las subredes resultantes
    
    La marcara por defecto es 255.255.255.0
    
    La marcara de subred (VLSM) 255.255.255.11111100 (los 1’s son de subred y los 0’s son de host) 
    
- Numero de subredes
    
    $$
    2^6
    $$
    
- EL numero de host por cada subred
    
    $$
    2^2-2 = 2
    $$
    
- las direcciones de
    - subred
        
        192.168.20.11111100
        
    - broadcast
    - Host disponible

VLSM (variable length subnet masking)

### Hub

Conecta varios equipos de una misma red, pero no es inteligente dado que este solo sabe si el puerto esta activo, ósea, si dos o mas equipos están conectados a la red. Si un equipo envía una trama a otro equipo el hub le envía este mensaje a todos los equipos de la red, esto trae algunas desventajas como la inseguridad de los datos y la cargas de trafico en la red

### Switch

un switch no es igual que un hub, dado que estos si son inteligentes y envían los datos mediante direcciones MAC, lo que hace que los paquetes lleguen solo al dispositivo que se le envió, lo que hace que la red sea mas segura y que tenga menos trafico innecesario. 

![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/IP%20Addressing%205ec3634d40c84b2bb161cfd72ed96b5d/Untitled.png)

### Router (Enrutador)

Es un dispositivo que enruta redes entre si

### Gateway

dispositivo o software que actúa como intermediario entre dos redes diferentes, permitiendo que los dispositivos de una red puedan comunicarse con los dispositivos de la otra red,