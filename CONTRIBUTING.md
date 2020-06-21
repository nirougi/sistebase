# Contribuir con un sistema de componentes

El seguimiento y planificación del proyecto se puede seguir en [este tablero](https://github.com/Jinik/sistebase/projects/1).

Para agilizar y hacer más transparente el proceso, cualquier persona puede contribuir con alguna de estas acciones.

## 1. Pedir un caso de uso nuevo

Si estás trabajando con SisteBase y tenés un caso de uso que no está contemplado, o ninguno de los componentes que existen se adapta bien a la necesidad, seguí estos pasos:

**Primero**: [Buscá en las tareas de pedidos](https://github.com/Jinik/sistebase/labels/pedido) para entender si ya está identificado ese caso en la planificación.

- **Si no lo encontrás**, [creá un nuevo issue](https://github.com/Jinik/sistebase/issues/new?assignees=&labels=pedido&template=pedido.md&title=) explicando la necesidad. (Usá el temlpate para pedir nuevos componentes).

- **Si ya existe**, comentá tu caso o dejanos tu feedback reaccionando con un :thumbsup: .

## 2. Reportar un error o mejora técnica

Si encontrás un error en alguno de los componentes o alguna mejora que impacte en la usabilidad, accesibilidad o rendimiento, seguí estos pasos:

**Primero**: [Buscá en las tareas de errores](https://github.com/Jinik/sistebase/labels/error) para entender si ya fue reportado.

- **Si no lo encontrás**, [creá un nuevo issue](https://github.com/Jinik/sistebase/issues/new?assignees=&labels=error&template=error.md&title=) el error o mejora. (Usá el temlpate para reportar errores de componentes).

- **Si ya existe**, comentá tu caso o dejanos tu feedback reaccionando con un :thumbsup: .


## 3. Aportar con código

Si pediste un caso nuevo o reportaste un error y querés colaborar con el código, explicá en el issue que vas a estar trabajando en eso.

> Solamente se van a aceptar PRs que estén asignados a un issue aprobado.


### Proceso de aprobación de un PR

0. Los cambios **deben estar aprobados** dentro del roadmap o con un issue previamente en caso de ser un bug o colaboración.
1. Deben pasar todos los chequeos automáticos.
2. Se debe hacer revisión del código por un miembro del equipo.
3. Si los cambios implican una modificación visual en algún componente, se debe aprobar desde chromatic.

Una vez realizados estos pasos, y considerando que no haya conflictos, se va a aceptar el pull requesto aplicando los cambios en la rama `master`.


### Cómo realizar los cambios

1. Hacé un fork del proyecto y clonalo localmente.
2. Creá una nueva rama con un nombre descriptivo.
3. Subí esa rama y creá un pull request sobre master desde el fork.

Para más detalles, [consultá la guía de github](https://help.github.com/es/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
