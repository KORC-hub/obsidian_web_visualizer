# Que es Node.js

Es un entorno de ejecución de JavaScript. Node.js tiene un administrador de paquetes robusto (**npm**), un amplio soporte de AWS y potencial para un desarrollo rápido

Utiliza el motor V8 de Google y una librería escrita en C y C++ llamada `libuv` que maneja  la entrada y salida asíncrona a partir de un grupo de hilos internos (**Thread Pool**), esto quiere decir que la mayoría de las funciones de I/O (lectura de archivos, consultas a bases de datos, llamadas HTTP) no bloquean la ejecución, dado que lo delegan el trabajo al sistema operativo. Permitiendo que el Event loop siga ejecutando sin bloquearse.

En el navegador, la mayoría de las veces lo que está haciendo es interactuar con el DOM u otras API de la Plataforma Web como las Cookies. Pero  en el navegador, no tenemos todas las API agradables que Node.js proporciona a través de sus módulos, como la funcionalidad de acceso al sistema de archivos.

![image.png|500](zExtra/Imagenes/Programming/JavaScript%20ECMAScript/image.png|500)

![image.png|500](zExtra/Imagenes/Programming/JavaScript%20ECMAScript/image%201.png)

En resumen, Node.js es **monohilo**, pero **libuv** permite manejar múltiples tareas en segundo plano sin bloquear la ejecución principal.

## Basic

| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | [[Package manager]]                                                                     |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <div style="width: 20px; height: 20px; background-color: #2ecc71; border-radius: 50%; margin-right: 10px;"></div> | [[Local modules]]                                                                       |
| <div style="width: 20px; height: 20px; background-color: #f1c40f; border-radius: 50%; margin-right: 10px;"></div> | [[Built-in modules]]                                                                    |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | [[_Notes/Data Engineering/_tools/JavaScript+TS/Node js/Error Handling\|Error Handling]] |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | [[Async programming]]                                                                   |

## Testing

| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | [[Mocha]]  |
| ----------------------------------------------------------------------------------------------------------------- | ---------- |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | Chai       |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | sinon      |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | jest       |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | playwright |


| <div style="width: 20px; height: 20px; background-color: #2ecc71; border-radius: 50%; margin-right: 10px;"></div> | [[Schema Validation Libraries]] |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <div style="width: 20px; height: 20px; background-color: #e74c3c; border-radius: 50%; margin-right: 10px;"></div> | [[encrypting]]                  |

# Packages

|     | express  |
| --- | -------- |
|     | validbot |
|     |          |
