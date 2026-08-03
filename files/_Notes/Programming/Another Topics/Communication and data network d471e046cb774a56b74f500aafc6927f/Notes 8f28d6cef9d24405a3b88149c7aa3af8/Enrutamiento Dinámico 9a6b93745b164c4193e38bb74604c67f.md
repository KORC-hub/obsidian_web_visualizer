# Enrutamiento Dinámico

Status: Packet Tracer

Es un proceso para determinar la ruta optima que debe seguir un paquete de datos a través de una red para llegar a un destino especifico. Utilizado a menudo para las topologías de red complejas y abiertas.

| Utilidades | Objetivos |
| --- | --- |
| Compartir información de forma dinámica entre Routers. | Descubrir redes remotas |
| Actualizar las tablas de enrutamiento de forma automática cuando cambia la topología. | Mantener la información de enrutamiento actualizada |
| Determinar cual es la mejor ruta a un destino. | Seleccionar la ruta de menor costo  |

El enrutamiento dinámico utiliza algoritmos y protocolos de enrutamiento que leen y responden a los cambios en la topología de la red.

| Ventajas | Desventajas |
| --- | --- |
| Prevenir fallos en la entrega de paquetes | Es menos seguro dado que los enrutadores comparte información sobre la topología |
| Mejora el rendimiento de la red | requiere mas ancho de banda |
| Modera la congestión de la red | Puede hacer que los nodos se sobrecarguen |

# Protocolos

## Protocolo de enrutamiento

se configura en un enrutador para que el mismo aprenda las mejores rutas disponibles y luego "enrute" los paquetes a través de estas rutas, hasta su destino final. 

se encarga de establecer las reglas sobre cómo se preparan los datos antes de ser enrutado. **El protocolo IP es un protocolo enrutado**

### Sistema autónomo (AS)

Es un conjunto de routers bajo una administración común. Podría ser una empresa, un grupo de edificios pertenecientes a la misma empresa, tu propio proveedor de servicios de Internet, o incluso tu red doméstica.

A los mismos se les asigna un número único entre 1 y 65535, estos números son administrados, al igual que las direcciones IP, por la Internet Assigned Numbers Authority (IANA), y también como las direcciones IP, hay números de SA privados y públicos.

| Protocolo de Gateway interior(IGP) | Se usan para el enrutamiento dentro de un (AS) | RIP, IGRP, EIGRP, OSPF, IS-IS |
| --- | --- | --- |
| protocolos de Gateway exterior (EGP):  |  | BGP |

## Protocolo enrutado

está siendo enrutando por el protocolo de enrutamiento, a través de las rutas más rápidas hacia, su destino final.

**El "protocolo enrutado", es enrutado por el "protocolo de enrutamiento”**

| Protocolo Enrutados | Protocolos de enrutamiento |
| --- | --- |
| IP | RIP, IGRP, OSPF, EIGRP |
| IPX | RIP, NLSP, EIGRP |
| AppleTalk | RMTP, AURP, EIGRP |

Vector distancia: 

- las rutas se anuncian como vectores de distancia y dirección
- Brinda una avista incompleta de la topología de la red
- se realizan actualizaciones periódicas

Estados de enlace:

- Se crea una vista completa de la topología de la red
- Las actualizaciones son periódicas

# Enrutamiento dinámico en PT Mediante CLI

```bash
ROUTER> enable
ROUTER# configure terminal
ROUTER (config)# router RIP
ROUTER (config-router)# version 2
ROUTER (config-router)# no auto-summary
ROUTER (config-router)# network <red propia>
```

[https://community.cisco.com/legacyfs/online/attachments/document/enrutamiento-conceptos_basicos.pdf](https://community.cisco.com/legacyfs/online/attachments/document/enrutamiento-conceptos_basicos.pdf)