# ¿Qué es React?
## Definición
React es una librería de UI desarrollada por Facebook para facilitar la creación de UIs interactivas:
  - Basada en componentes reusables
  - Posibilidad de almacenar estado
  - Ciclo de vida para redibujar
  - Flujo unidireccional de datos
  - Server-side rendering
Algunas páginas que lo utilizan: Facebook, Instagram, Netflix y Mercado Libre.
## Que NO es React
No es un framework que va a hacer todo por nosotros, no cubre todas las necesidades que podemos tener en una app (por ej: conexión al server, ORM, conexión a DB, etc). Si lo pensamos desde el punto de vista del modelo MVC, sería sólo la parte de la vista.
## Componentes
Los componentes representan piezas independientes y reusables de nuestra aplicación. El trabajo de un componente es recibir datos de entrada y retornar un elemento de React para ser renderizado.
### Componentes Funcionales (stateless)
Estos representan la definición conceptual de componentes: reciben props y devuelven un elemento. Son la representación más simple de un componente y son ideales para secciones de presentación, ya que tienen varias ventajas:
  - Son más fáciles de leer/entender
  - No se necesita usar this
  - Nos fuerzan a seguir buenas prácticas
  - Fácilmente testeables
### Componentes basados en Clases (stateful)
Se suelen llamar containers o state managers y son utilizados para recibir y procesar los datos que serán pasados a los componentes stateless. Estos extienden de la clase Component de React y tienen varias diferencias con los funcionales:
  - Estado interno
  - Ciclo de vida
  - Hay que usar this
## Qué son las props
Es la forma que tiene React de recibir datos en los componentes y se pasan de la misma forma que se le pasan a los elementos del DOM. Son inmutables. En el caso de los funcionales se pasa como parámetro y en los de clase están guardadas en this.props, salvo en el constructor donde se reciben como param y siempre se pasan al constructor padre. Se pueden definir valores por defecto para las propiedades. Si un componente necesita pasarle info a sus hijos, lo debe hacer utilizando props.
## Qué es el state
Sirve para almacenar información temporal de los componentes. Lo ideal es utilizarlo sólo con para controlar estado de UI y obtener cualquier otra información de las props. No hay que modificarlo directamente, en cambio hay que usar setState, una función que cambia el estado y lanza un re render del componente. Se inicializa en el constructor; este es el único caso en el cual se asigna sin usar setState. Si al guardar el nuevo estado se necesita información del estado anterior, hay que utilizar el parámetro prevState, ya que setState es asíncrona y no podemos saber cuándo estará actualizado el estado.
## Ciclo de vida
## Virtual DOM
## Flujo unidireccional de datos
## Ejemplo en browser
# create-react-app
## Para que sirve?
Es una herramienta que nos ayuda a crear una app basada en React desde cero, sin necesidad de preocuparnos por configuraciones, dependencias o servidores de desarrollo. Para poder correr y hacer builds de la app utiliza webpack, otra herramienta conocida como "bundler", que se encarga de convertir los archivos (js, css, etc) que escribimos para nuestra app React, junto con sus dependencias, en bundles (un solo archivo de cada tipo) que pueda ser interpretado por el browser.
# JSX
## Qué es? A qué equivale en js puro?
JSX es un dialecto de JS que embebe elementos de HTML dentro del código JavasCript. Como el browser no puede interpretar JSX, cada elemento es transpilado a React.createElement() usando Babel y webpack. Es más legible que React.createElement().
## Recrear el ejemplo
# To-Do app mini workshop
# Preguntas