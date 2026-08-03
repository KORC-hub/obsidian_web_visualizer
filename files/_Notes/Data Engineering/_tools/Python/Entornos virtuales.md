
Un entorno virtual es una herramienta para mantener un espacio separado para un proyecto con sus dependencias y librerías,. En Python es una muy buena herramienta para prevenir errores ya que nos asegura de que el código funcione de manera correcta y no sea afectado por bibliotecas externas o actualizaciones de Python.

![](https://jarroba.com/wp-content/uploads/2020/09/Crear-Virtualenv-entornos-virutals-en-Python-www.Jarroba.com_-768x441.png)

## Bibliotecas para entornos virtuales

Hay muchas librerías para hacer un entorno virtual en Python, por una lado tenemos las librerías estándar que vienen  por defecto en Python después de la versión 3.3, o tenemos las librerías no estándar que hay que instalarlas con pip,: En la siguiente tabla se puede evidenciar las librerías anteriormente mencionadas:

| **Librerías Estándar** | **Librerías no Estándar** |
| --- | --- |
| [venv](https://docs.python.org/es/3/library/venv.html) | [virtualenv](https://pypi.org/project/virtualenv/)  |
|  | [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) |
|  | [vitualenvwrapper](https://pypi.org/project/virtualenvwrapper/) |
|  | [pipenv](https://pypi.org/project/pipenv/) |
|  | [pyenv](https://github.com/pyenv/pyenv) |

## Instalación, creación y activación de virtualenv

Para instalar virtualenv hay que utilizar el paquete pip que ya viene por defecto en Python, y se inserta en cmd el siguiente comando:

```powershell
C:\desktop>pip install virtualenv
```

Para crear el entono virtual hay que primero crear una carpeta para el proyecto y después dentro de la carpeta insertar el siguiente comando: 

```powershell
C:\desktop\proyectoX>python -m virtualenv env
```

**-m** = modulo
**virtualenv** = paquete
**env** = nombre

Por ultimo para activar el entorno(y cuidado por que esto se debe de hacer antes de instalar cualquier paquete) hay  que introducir el siguiente comando:

```powershell
C:\desktop\proyectoX>activate
```

## Creación y activar venv

Como venv ya viene por defecto en Python 3.3 en adelante no hace falta instalarlo, pero la creación y activación es diferente a virtual env, para crear un entorno hay que crear una carpeta con el nombre de nuestro proyecto y después  insertar el siguiente comando:

```powershell
C:\desktop\proyectoX>python -m venv [nombre_del_entono]
```

Para activarlo solo hay que desplazarse hacia la carpeta Script y insertar el comando activate:

```powershell
C:\desktop\proyectoX>cd Script
C:\desktop\proyectoX\Script>activate 
```

## Tipo de entornos virtuales

Hay dos tipos de entornos virtuales, por un lado tenemos los entonos que funcionan para un solo proyecto, y por otro lado tenemos los entornos para múltiples proyectos. Esto se puede entender mejor con la siguiente imagen: 

![](https://jarroba.com/wp-content/uploads/2020/09/Ejecutar-cada-proyecto-en-un-entorno-virtual-de-Python-www.Jarroba.com_-1024x586.png)

Cuando creamos proyectos estos pueden ir de dos maneras, una manera es dentro de la misma carpeta en la que esta el entorno, y otra manera es en un directorio aparte. Esto se puede evidenciar en la siguiente imagen:

![](https://jarroba.com/wp-content/uploads/2020/09/Entorno-virtual-de-Python-exclusivo-para-el-proyecto-en-mismo-proyecto-y-aparte-www.Jarroba.com_-768x344.png)

## Fuentes:

[https://jarroba.com/entornos-virtuales-de-python-comun-y-anaconda/](https://jarroba.com/entornos-virtuales-de-python-comun-y-anaconda/)