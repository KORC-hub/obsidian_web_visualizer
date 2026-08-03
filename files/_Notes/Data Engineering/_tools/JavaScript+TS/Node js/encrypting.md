bcrypt
•  Es un binding nativo de Node.js que utiliza código C++
•  Requiere compilación nativa durante la instalación
•  Depende de APIs específicas de Node.js y del sistema operativo
•  No es compatible con Edge Runtime (donde se ejecuta el middleware de Next.js)
•  Más rápido en rendimiento pero menos portable

bcryptjs
•  Es una implementación pura en JavaScript
•  No requiere compilación nativa
•  Es compatible con diferentes entornos JavaScript, incluyendo:
•  Node.js
•  Edge Runtime 
•  Navegadores
•  Workers
•  Más lento que bcrypt pero más portable

Edge Runtime no soporta módulos nativos como bcrypt. Cuando Next.js intentó cargar bcrypt en el Edge Runtime, falló porque las dependencias nativas no estaban disponibles