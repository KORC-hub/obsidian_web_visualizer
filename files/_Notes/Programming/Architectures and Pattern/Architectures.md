

Gran parte de las arquitecturas se basan en el siguiente principio:
## Separation of Concerns (SoC)

Es un principio fundamental en la ingeniería y el diseño de Software, debido a que se basa en  dividir sistemas complejos en partes mas pequeñas y manejables, de forma que cada parte aborde una unica preocupación. Esto nos permite reducir la interdependencia entre diferentes partes del sistema

# View  ←→  Controllers / Presenter / ViewModel  ←→  Models

## MVC

 Es un patrón de diseño arquitectónico que separa una aplicación en tres componentes principales:

- `View`: Es la Interfaz de usuario y envía las entradas del usuario al controlador. La vista también puede contener lógica de presentación como responder a el click en un botón.
- `Controller`:  Es un intermediario que recibe las entradas del usuario desde la Vista, actualiza el Modelo y posteriormente actualiza la Vista.
- `Model`:  Contiene lógica de negocio y los datos de la aplicación

**Cardinalidad entre Vistas y el Controlador :**  Existe una relación de [M:1] entre la Vista y el Controlador → múltiples vistas pueden ser manejadas por un solo controlador

**Flujo de datos:** La Vista depende del Controlador para la lógica de interacción, pero puede ser actualizada por el Modelo si la relación lo requiere.

**Casos de uso:** Ideal para aplicaciones web con frameworks como ASP.NET o Django.

![Untitled-2024-08-10-2112 (14).svg](Untitled-2024-08-10-2112_(14).svg)

![Untitled-2024-08-10-2112 (15).svg](Untitled-2024-08-10-2112_(15).svg)

## MVP

Diseñado para aplicaciones donde es necesario un control más preciso sobre la lógica de la interfaz de usuario, y al igual que MVC se  separa en cuatro componentes principales:

- `View`: Es responsable de la interfaz de usuario, pero no contiene lógica de presentación, por lo que cualquier actualización de datos o lógica debe pasar a través del presentador.
- `view interface`:  Define métodos que el Presenter puede usar para interactuar con la View, o métodos para que la View notifique al Presenter sobre las acciones del usuario.
- `Presenter`:  Maneja toda la lógica de presentación. Recibe la entrada de la vista, interactúa con el modelo para actualizar los datos, y luego actualiza la vista.
- `Model`:  Contiene lógica de negocio y los datos de la aplicación.

**Cardinalidad entre Vistas y el presenter :** Existe una relación de [1:1] entre la Vista y el presenter →  Cada **Vista** tiene su propio **Presentador** que gestiona su lógica

**Flujo de datos:** Las vistas y los modelos están completamente desacoplados, 

**Casos de uso:** Aplicaciones de escritorio tipo windows Forms y móviles.

![Untitled-2024-08-10-2112 (16).svg](Untitled-2024-08-10-2112_(16).svg)

![Untitled-2024-08-10-2112 (17).svg|600](Untitled-2024-08-10-2112_(17).svg)

## MVVM

En este patrón de diseño arquitectónico  la Vista es más independiente y reactiva, actualizándose automáticamente en respuesta a cambios Mediante los `data binding` , al igual que MVC tiene tres componentes principales:

- `View`: Es responsable de la interfaz de usuario, pero no contiene lógica de presentación.
- `View-Model`:  intermediario entre la Vista y el Modelo. Contiene la lógica de presentación y maneja el `data binding` entre la Vista y el Modelo.
- `Model`: Contiene lógica de negocio y los datos de la aplicación.

**Cardinalidad entre Vistas y el presenter :** por lo general entre view y view-model es [1:1], pero en ciertos casos puede ser [M:1].

**Flujo de datos:** La Vista vincula sus elementos a propiedades y `Icommand` en el View-Model a través de `data binding`. Cuando el Modelo cambia, el View-Model actualiza sus propiedades, y esas actualizaciones se reflejan automáticamente en la Vista gracias al `data binding`.

**Casos de uso:** Muy popular en frameworks como WPF, también se utiliza en desarrollo móvil con Xamarin.Forms.

![Untitled-2024-08-10-2112 (19).svg](Untitled-2024-08-10-2112_(19).svg)

![Untitled-2024-08-10-2112 (18).svg](Untitled-2024-08-10-2112_(18).svg)

# Layered Architecture

Se centra en la separación de aplicación en varias capas/módulos , con el objetivo de que cada capa tenga un solo propósito. Aplicando SoC.

Por lo general se suele trabajar con 3 capas(Interfaz de usuario, lógica de negocios, y acceso a datos), aunque este estilo arquitectónico no define cuantas capas debe tener la aplicación, por lo que podemos añadir mas capas para cumplir con los requerimientos como seguridad, manejo de errores, etc. 


# Hexagonal

domain -> logica de negocio
casos de uso -> logica de la aplicacion
puertos -> interfaces
adapters -> implementa las interfaces

drivens  -> recursos
drivers -> peticiones
# Clean

# Onio n

## Event-Driven Architecture