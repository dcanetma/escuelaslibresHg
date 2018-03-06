# Escuelas Libres de Mercurio
Enero de 2018

## Instalación

Descarga el repositorio e instala dependencias via node.

	npm install

### Comandos

Usamos gulp integrado con node.

Para arrancar servidor local, con Browsersync integrado, y compilar site **en directorio /src**.

	npm start

Para montar el sitio:

	npm build

## Desarrollo

Existe una serie de ficheros que son principales en el desarrollo del sitio web.

Son los siguientes:

- **src/js/_custom.js**: contiene el código javascript común a todas las páginas del sitio web.
- **src/html/includes/footerjavascript.html**: 


## Contenidos

La edición de los contenidos del sitio web se realiza en la carpeta **/src/html**.

Empleamos [panini](https://foundation.zurb.com/sites/docs/panini.html) como sistema de plantillas que nos permite generar toda la estructura del sitio web de manera más eficiente y mantenible.

En esta carpeta se encuentran los siguientes directorios:

- data: para los valores constantes del sitio web
- pages: para las diferentes páginas del sitio web.

## Integración con CRM

El valor de la variable origen para esta campaña es: 'ecolibremercurio201801'.

Los campos del formulario que empleamos son:

- Su nombre (NOMBRE)
- Email de contacto (EMAIL)
- Centro Educativo (NOMBREDELCENTRO)
- Teléfono (TELEFONO)
- Población (CIUDAD)
- Provincia (PROVINCIA)
- Tipo de centro (TIPODECENTROEDUCATIVO)
- Educación (TIPODECONTACTO)
- Aceptación de condiciones bla, bla, (none)
- Landing (LANDING) [oculto defaults to 'www.escuelaslibresdemercurio.com']
- Origen (ORIGEN) [oculto defaults to 'ecolibremercurio201801']