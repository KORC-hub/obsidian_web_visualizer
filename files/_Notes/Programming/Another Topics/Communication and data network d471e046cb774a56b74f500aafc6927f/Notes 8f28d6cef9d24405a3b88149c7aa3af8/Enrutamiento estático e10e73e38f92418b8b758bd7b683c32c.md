# Enrutamiento estático

Status: Packet Tracer

El enrutamiento en términos generales es el proceso en el que los enrutadores aprenden sobre redes remotas, encuentran las rutas para llegar y escogen la mejor ruta para intercambiar datos.

En el enrutamiento estático se le ordena al enrutador por donde se debe de llegar a la otra red, por lo tanto el administrador debe de configurar manualmente las rutas estáticas.

Ventajas y desventajas del enrutamiento estático:

| ventajas | Desventajas |
| --- | --- |
| fácil de configurar | Los cambios en la red requieren reconfiguraciones manuales |
| No necesita recursos adicionales (CPU o RAM) | No permite una escalabilidad eficaz en topologías grandes. Solo se utiliza en topologías simples |
| Es mas seguro |  |
| La ruta hacia el destino siempre es la misma |  |

# Enrutamiento en PT mediante CLI

```bash
ROUTER> enable
ROUTER# Configure Terminal
ROUTER(config)# ip route <Dir RED> <Mask Subnet> <IP Router destino>
ROUTER(config)# ip route <Dir RED> <Mask Subnet> <Puerto Salida>
```