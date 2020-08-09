# <img src="static/logo.svg?sanitize=true" alt="SisteBase" width="400" style="max-width:100%;">

![Deploy storybook](https://github.com/Jinik/sistebase/workflows/Deploy%20storybook/badge.svg)
![Versión de npm](https://img.shields.io/npm/v/sistebase)
![Licencia MIT](https://img.shields.io/npm/l/sistebase?label=licencia)

**SisteBase** es un proyecto que unifica diferentes herramientas para crear un sistema de diseño basado en componentes.
Está basado en el trabajo que hacemos en [Obelisco](https://github.com/gcba/Obelisco) y lo usé como ejemplo en la charla que di sobre sistemas de diseño en la meetup de React en Buenos Aires.

Mirá la [documentación de componentes](https://nirougi.github.io/sistebase).


## Cómo usarlo

SisteBase está publicado en npm, por lo que se puede instalar de la siguiente forma:
```
npm install --save sistebase
```


## Usar como template

Podés usar este proyecto como un template con el botón verde que aparece arriba.
Una vez que tengas el proyecto clonado, tenés que:

1. **Crear tu cuenta en [chromatic](https://www.chromatic.com)** y crear el proyecto basado en ese repositorio.
2. Chromatic genera un token para ese proyecto que permite subir los cambios. En la sección `secrets` de la configuración de github del repo, **agregá uno con el nombre `CHROMATIC_PROJECT_TOKEN` y el token que te dio Chromatic**.
3. Para que los cambios se publiquen en NPM, tenés que [crearte una cuenta](https://www.npmjs.com/) y generar un token con **permisos de lectura y escritura**. En los secrets del repositorio, agregá otro con el nombre `NPM_TOKEN` y el token que generaste.
4. Habilitá la **Github page** dentro de las opciones del proyecto, ahí se va a publicar la documentación. Para que esto funcione el proyecto tiene que se público.
5. **Manos a la obra**, ya podés empezar a definir tus estilos y componentes.


## Desarrollo
SisteBase está desarrollado principalmente en [Sass](https://sass-lang.com) y [TypeScript](http://typescriptlang.org/), utilizando las siguientes herramientas:

- [Bootstrap 4](https://getbootstrap.com) como base de diseño. Algunos componentes se toma de esta librería modificando los estilos.
- [Storybook](https://storybook.js.org) como base para definir y documentar cada componente.
- [React](https://reactjs.org) para generar los componentes de la documentación.
- [Chromatic](https://www.chromatic.com) para gestionar los cambios visuales en los componentes.
- [ESLint](https://eslint.org), [Stylelint](https://stylelint.io) y [Prettier](https://prettier.io) para estandarizar los estilos del código.

---

Para desarrollar en SisteBase hay que clonar el proyecto e instalar dependencias.
```
npm install
```

Una vez instalado, se puede correr con el siguiente comando.
```
npm start
```

### Recomendaciones

Es recomandable utilizar [VScode](https://code.visualstudio.com) como editor de código con las extensiones de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Stylelint](https://marketplace.visualstudio.com/items?itemName=Daosro.stylelint) y [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para asegurarse que los estilos del código sigan las convenciones.


## Integración continua

SisteBase tiene tests automáticos e integración continua.
Cada vez que se genera un nuevo PR, se corren los siguientes procesos:

- **linter** para corroborar que los cambios sigan los lineamientos de estilos de código.
- **Tests de chromatic** para verificar si hay cambios visuales.

Al hacer el merge en la branch `master` se corre el siguiente proceso:

1. Corrobora el formato del código.
2. Corre las pruebas automáticas para chequear que pasen.
3. Genera el build de la nueva versión.
4. Publica los cambios en github pages.
5. Sube la nueva versión a **npm**.


## Versionado y publicación

Para el manejo de versiones usamos [semantic release](https://github.com/semantic-release/semantic-release).
Esto nos permite olvidarnos de definir las versiones y remueve la discreción de las emociones humanas, siguiendo estrictamente la especificación del [versionado semántico](https://semver.org/).

Cada vez que se agregan commits, se ejecuta como parte de la integración contínua y lee los mensajes para definir el nuevo número de versión.
**Todos los commits deben tener alguno de estos prefijos** que ayudan a identificar qué tipo de cambios hacen.

- **feat**: Una nueva funcionalidad
- **fix**: Arregla un error
- **docs**: Cambios únicamente en la documentación
- **style**: Cambios que no afectan la funcionalidad del código (espacios, formato, agrega puntos y coma, etc). **No confundir con cambios en el css.**
- **refactor**: Un cambio de código que no agrega funcionalidades ni arregla errores
- **perf**: Cambios que mejoran la performance
- **test**: Cambios únicamente en los tests
- **chore**: Cambios en el proceso de build o herramientas auxiliares que no hacen a las funcionalidades del sistema


## Colaboración

A los sistemas los suele mantener un equipo de específico, pero son utilizados por otros equipos que no participan en el desarrollo de las definiciones.

Para agilizar y hacer más transparente el proceso, es recomendable utilizar las herramientas que proporciona github para recibir feedback y colaboraciones.

[Conocé cómo hacerlo en la sección contribuir](CONTRIBUTING.md).
