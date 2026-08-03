# Network architectures

Status: Concepts

# Arquitectura de redes

Una arquitectura de redes esta formado por dos elementos: Por un modelo de capas (detallando las funciones que desempeña cada capa) y un conjunto de protocolos (propios de cada capa)  

# SNA (IBM)(System Networks Architecture)

Es una arquitectura de red, diseñada por **IBM** en 1974. Los bancos siguen utilizando SNA por considerarlo más seguro que el modelo TCP/IP; 

Como SNA es muy complejo de utilizar para los programadores, existe una biblioteca de funciones o interfaz de programación de aplicaciones (API), llamada **CPI-C (Common Programming Interface for Communications)**, que permite comunicaciones punto a punto entre programas en un entorno de arquitectura de red de sistemas (SNA).

# DNA (Digital Network Architecture)

# Arquitectura OSI

En 1977  ISO ****(*International Standarization Organization*) preocupado por el incremento de las arquitecturas de redes propietarias (SNA y DNA) desarrollo una arquitectura de sistemas abiertos(independiente de fabricante) llamado OSI (Open Systems Interconnect), en donde Open se refiere a que es abierto a cualquier fabricante.

Pero el retraso en su desarrollo, complejidad y mala calidad de los protocolos OSI y sus implementaciones hizo que fuera un fracaso, sin embargo el modelo de capas (copiado de SNA) si tuvo éxito. Es por esto que en la actualidad solo se tiene en cuenta su modelo de forma teórica.

# Comparación del modelo OSI con SNA

![Untitled](_Notes/Programming/Another%20Topics/Communication%20and%20data%20network%20d471e046cb774a56b74f500aafc6927f/Notes%208f28d6cef9d24405a3b88149c7aa3af8/Network%20architectures%20695c6c91054541e984d390a52d3513a1/Untitled.png)

Un punto a destacar es que cada capa añade mas información de control, lo que genera mas overhead.