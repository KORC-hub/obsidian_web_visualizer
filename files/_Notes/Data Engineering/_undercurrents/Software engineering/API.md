


# Formas de integrar aplicaciones 

- Transferencia de archivos
- Bases de datos
- Mensajeria 
- Invocacion de procedimientos remotos

# Diseño de APIs

## SOAP (Simple Object Access Protocol)

creado por Microsoft y utiliza XML para intercambiar datos, Emplea un lenguaje llamdo WSDL para describir el API.

Utilizado en sistemas financieros

## REST (Representional State Transfer)

definido en 2000 para resolver la escalabilidad de la web, en REST todo es un recurso y normalmente se utiliza JSON para intercambiar los datos.

## GraphQL (Graph Query Language)

Lanzado en 2015 por Facebook, permitiendo al cliente solicitar los datos exactos que necesita pero tiene una mayor complejidad del lado del servidor 

## gRPC (gRPC Remote Procedure Call)

creado en 2016 por Google Ofrece un gran rendimeinto para comunicar microservicios y utiliza HTTP/2 y protocol buffers para intercambiar datos binarios

## Comunicacion bidireccional

 - Long polling
 - Server-sent events
 - websockets

## Webhooks

Aplica el principio de Hollywood "No nos llames, nosotros te llamamos", dado que se basa en una comunicacion asincrona basada en eventos, util cuando no se sabe que va a ocurrir