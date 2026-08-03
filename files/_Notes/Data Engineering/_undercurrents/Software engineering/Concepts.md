# Concepts

<aside>
📖 La sobre-ingenieria es tan mala como la completa carencia de ella.

</aside>

## Separation of Concerns (SoC)

Es un principio fundamental en la ingeniería y el diseño de Software, debido a que se basa en  dividir sistemas complejos en partes mas pequeñas y manejables, de forma que cada parte aborde una unica preocupación. Esto nos permite reducir la interdependencia entre diferentes partes del sistema

## Component-Based Development.

## SOLID  -  Single Responsibility Principle (SRP)

Cada objeto debe tener una única responsabilidad o motivo para cambiar

## SOLID  -  Open-closed Principle

Las clases deben estar **abiertas para la extensión**, permitiendo añadir nuevas funcionalidades, pero **cerradas para la modificación**, evitando alterar el código existente. Este concepto está estrechamente relacionado con la herencia. Imagina que necesitas cambiar el comportamiento de una clase existente. En lugar de modificar directamente la clase original, lo que podría causar problemas en otras partes del código que dependen de ella, es preferible **crear una clase derivada. En esta nueva clase, puedes sobrescribir los métodos necesarios o agregar nuevas funcionalidades** sin afectar el código ya implementado.

## SOLID  -  Liskov Substitution Principle

Las instancias de una clase derivada deben poder ser sustituibles/remplazables por una clase base (la clase derivada debe de hacer todo lo que la clase padre hace, de forma que si yo la sustituyo el código siga funcionando, este concepto tiene relación con las clases abstractas), sin alterar el funcionamiento del programa, garantizando la coherencia en la herencia. Se puede utilizar la frase “es siempre un  . . .” para determinar correctamente el sentido de la herencia. En el momento que una clase derivada no implementa un método de la clase padre, el principio no se esta cumpliendo.

![Untitled-2024-08-10-2112.svg](Untitled-2024-08-10-2112.svg)

```csharp
Employee employee = new Employee();
Secretary secretary = new Secretary();
Boss boss = new Boss();

employee = boss;

boss = employee; // error

List<Employee> = new List<Employee>() { boss, secretary };
```

## SOLID  -  Interface Segregation Principle

## SOLID  -  Dependency Inversion Principle (DIP)

- Dependencia
    
    Una clase A es una dependencia de la clase B, cuando la clase B requiere funcionalidades de la clase A para realizar algo, o en otras palabras, la clase B depende de la clase A
    
- Acoplamiento
    
    Un acoplamiento alto implica que las partes del programa están estrechamente ligadas, dependiendo mucho uno del otro, lo que ocasiona que cualquier cambio en una parte del código afecte a otra y se tengan que cambiar mas cosas. mientras que un acoplamiento bajo sugiere independencia, facilitando la mantenibilidad y escalabilidad del código.
    

## Dependency Injection

Consiste en proporcionar las dependencias de un objeto a travez de otro objeto, por lo general mediante el constructor

## Ley de Demeter

## Internationalization and localization (*I**18N***)

## Object-Relational Mapping (ORM)

Es una herramienta que permite interactuar con bases de datos relacionales utilizando objetos en un lenguaje de programación. Su principal objetivo es simplificar la manipulación de datos mediante la asignación automática de tablas de bases de datos a clases en el código, evitando la necesidad de escribir consultas SQL manualmente.

![DiagramasProgramacion (3).svg](DiagramasProgramacion_(3).svg)

## DDD (Domain-Driven Design)

## CQRS