# MAUI

<aside>
📖

Es un marco multiplataforma para crear aplicaciones móviles y de escritorio nativas

</aside>

![image.png](zExtra/Imagenes/Programming/MAUI%20102f120600df805ab4f6fa8444f9a047/image.png)

## Elementos Base en un proyecto MAUI

### Platforms

Esta carpeta contiene recursos y archivos de código de inicialización específicos de la plataforma. Hay carpetas para Android, iOS, MacCatalyst, Tizen y Windows.

### **App.xaml**

Define los recursos de la aplicación que la aplicación usará en el diseño XAML. Los recursos predeterminados se encuentran en la carpeta `Resources`, en esta carpeta se guardan iconos, fuentes, imagen y archivos XAML que definen los colores y estilos para los controles integrados, ambos estan dentro de una etiqueta `<ResourceDictionary>` y en App.xaml se combinan:

```
<ResourceDictionary.MergedDictionaries>
<ResourceDictionary Source="Resources/Colors.xaml" />
	<ResourceDictionary Source="Resources/Styles.xaml" />
</ResourceDictionary.MergedDictionaries>
```

El archivo **`App.xaml.cs`**  representa la aplicación en tiempo de ejecución. El constructor de esta clase crea una ventana inicial y le asigna la propiedad `MainPage`. Esta propiedad determina qué página se muestra cuando la aplicación comienza a ejecutarse.

### AppShell.xaml

Proporciona muchas características que son beneficiosas para aplicaciones de varias plataformas. La plantilla predeterminada proporciona una única página (o `ShellContent`) que se muestra cuando se inicia la aplicación.

### MainPage.xaml

Este archivo contiene la definición de la interfaz de usuario. 

### **MauiProgram.cs**

Contiene el código que configura la aplicación y especifica que se debe usar la clase **App** para ejecutar la aplicación.

![image.png](zExtra/Imagenes/Programming/MAUI%20102f120600df805ab4f6fa8444f9a047/image%201.png)

![image.png](zExtra/Imagenes/Programming/MAUI%20102f120600df805ab4f6fa8444f9a047/image%202.png)