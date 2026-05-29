# 09. Diagramas

## Objetivo del documento

Registrar los diagramas del sistema, explicar su propósito dentro del modelado y dejar trazabilidad entre cada artefacto visual, los requerimientos y el enfoque Scrum del proyecto.

## Convenciones adoptadas

- Los diagramas editables se almacenan en `diagramas/drawio/`.
- Cada archivo utiliza numeración secuencial y nombre funcional.
- Los diagramas de Casos de Uso muestran límite del sistema, actores y relaciones `<<include>>` / `<<extend>>`.
- Los diagramas de actividades muestran flujo de proceso, decisiones y resultados.
- Los modelos de datos muestran entidades, atributos principales y relaciones conceptuales.

## Inventario de diagramas

| Archivo                                                   | Tipo | Propósito | Relación principal |
|-----------------------------------------------------------|---|---|---|
| `diagramas/drawio/01-casos-uso-general.drawio`            | Caso de uso | Presentar una vista global del sistema, actores y dependencias principales | CU-01 a CU-15 |
| `diagramas/drawio/02-casos-uso-ventas.drawio`             | Caso de uso | Modelar venta, pago, inventario, comprobante y escenarios alternos | CU-09, CU-10 |
| `diagramas/drawio/03-casos-uso-inventario.drawio`         | Caso de uso | Modelar productos, inventario, compras, proveedores y vencimientos | CU-02 a CU-08, CU-14, CU-15 |
| `diagramas/drawio/04-casos-uso-reportes.drawio`           | Caso de uso | Modelar reportes administrativos y cierre diario | CU-11, CU-12 |
| `diagramas/drawio/05-actividad-proceso-venta.drawio`      | Actividad | Describir el proceso operativo completo de venta | CU-09 |
| `diagramas/drawio/06-actividad-control-inventario.drawio` | Actividad | Describir entradas, validación y control de stock | CU-07, CU-08, CU-14, CU-15 |
| `diagramas/drawio/07-actividad-cierre-diario.drawio`      | Actividad | Describir la consolidación del día y el reporte final | CU-12 |
| `diagramas/drawio/08-modelo-conceptual.drawio`            | Modelo conceptual | Representar entidades principales y relaciones de negocio | Análisis del dominio |
| `diagramas/drawio/09-modelo-entidad-relacion.drawio`      | Modelo ER | Representar estructura inicial de datos con PK, FK y cardinalidades | Modelo de datos inicial |
| `diagramas/drawio/10-flujo-general-sistema.drawio`        | Flujo general | Mostrar la secuencia macro desde ingreso al sistema hasta control operativo | Vision global del sistema |
| `diagramas/drawio/11-arquitectura-candidata.drawio`       | Arquitectura | Representar la arquitectura de tres capas y sus bloques principales | docs/11-arquitectura.md |
| `diagramas/drawio/12-diagrama-componentes-logicos.drawio` | Componentes lógicos | Mostrar módulos funcionales y relaciones de responsabilidad | Módulos, Casos de Uso y datos |
| `diagramas/drawio/13-flujo-modulos-sistema.drawio`        | Flujo de módulos | Representar el recorrido funcional entre módulos del sistema | Flujo transversal del negocio |
| `diagramas/drawio/14-matriz-crud-visual.drawio`           | Matriz visual | Visualizar relación CRUD entre módulos y entidades principales | modelos/matriz-crud.md |

## Utilidad de los diagramas dentro del proyecto

### Casos de uso

Los diagramas de Casos de Uso permiten representar visualmente las capacidades funcionales del sistema desde la perspectiva de cada actor. Su utilidad principal radica en:

- validar cobertura funcional frente a requerimientos;
- facilitar la comprensión del alcance;
- identificar dependencias entre procesos;
- apoyar la posterior construcción de escenarios y pruebas.

### Diagramas de actividades

Los diagramas de actividades aterrizan los procesos críticos del negocio y ayudan a precisar la lógica de operación. Son especialmente útiles para:

- detallar decisiones y validaciones;
- identificar puntos de control del negocio;
- reducir ambigüedad antes de modelar datos o implementar.

### Modelo conceptual

El modelo conceptual abstrae el dominio del problema y organiza los principales objetos de negocio sin entrar todavía en detalle de implementación. En la versión actual del proyecto, este nivel ya no se limita a ventas, compras e inventario básicos, sino que incorpora también seguridad, control, pagos, estados y cierre diario como parte del dominio operativo real.

Elementos conceptuales destacados:

- seguridad basada en `Usuario`, `Rol`, `Permiso` y `RolPermiso`;
- trazabilidad mediante `Auditoría`;
- control comercial con `Venta`, `DetalleVenta`, `PagoVenta` y `MétodoPago`;
- abastecimiento con `Compra`, `DetalleCompra` y `Proveedor`;
- control de producto e inventario con `Categoría`, `Marca`, `UnidadMedida`, `Producto`, `Inventario` y `MovimientoInventario`;
- consolidación operativa mediante `CierreDiario`, `DetalleCierreDiario` y `Reporte`.

Este nivel permite alinear lenguaje de negocio, requerimientos y relaciones clave antes de pasar al Modelo Entidad-Relación detallado.

### Modelo entidad-relación

El modelo ER inicial traduce el dominio conceptual a una estructura de datos base, incorporando entidades, claves y relaciones necesarias para soportar ventas, inventario, compras, usuarios y reportes.

### Arquitectura candidata

El diagrama de Arquitectura Candidata representa la organización del sistema en capas de presentación, lógica de negocio y datos. Su propósito es mostrar como se distribuyen responsabilidades sin comprometer todavía una tecnología de implementación concreta.

Elementos principales:

- capa de presentación;
- capa de lógica de negocio;
- capa de datos;
- módulos funcionales del sistema;
- relaciones de flujo entre capas.

Relación con el análisis del sistema:

- conecta Requerimientos Funcionales con componentes lógicos;
- traduce el análisis del negocio a una estructura modular;
- apoya el paso de modelado funcional a diseño lógico.

### Componentes lógicos

El diagrama de componentes lógicos detalla los módulos principales del sistema y sus dependencias funcionales. Su utilidad radica en identificar cohesión de responsabilidades y puntos de integración entre ventas, inventario, compras, reportes y administración.

Elementos principales:

- autenticación y usuarios;
- productos y categorías;
- inventario;
- ventas;
- compras;
- proveedores;
- clientes;
- reportes;
- cierre diario;
- administración.

Relación con el análisis del sistema:

- reutiliza Casos de Uso y reglas de negocio ya documentados;
- ayuda a mapear requerimientos hacia módulos;
- sirve de base para la matriz CRUD y la trazabilidad.

### Flujo de módulos

El diagrama de flujo de módulos muestra el recorrido funcional del sistema desde la autenticación hasta el cierre administrativo. Su objetivo es aclarar la secuencia macro entre módulos y el intercambio de responsabilidades.

Elementos principales:

- acceso al sistema;
- catálogos de negocio;
- operaciones de compra y venta;
- ajuste de inventario;
- consolidación de reportes;
- cierre diario.

Relación con el análisis del sistema:

- sintetiza el comportamiento global del sistema;
- conecta procesos principales del negocio con componentes funcionales;
- reduce ambigüedad antes del diseño técnico posterior.

### Matriz CRUD visual

El diagrama de matriz CRUD visual representa, de forma sintética, que módulos crean, consultan, actualizan o inactivan entidades clave del sistema. Su valor principal es fortalecer trazabilidad entre arquitectura y datos.

Elementos principales:

- módulos del sistema;
- entidades relevantes del modelo de datos;
- operaciones CRUD por cruce funcional.

Relación con el análisis del sistema:

- evidencia impacto de cada módulo sobre los datos;
- complementa la matriz CRUD tabular;
- permite revisar si la distribución de responsabilidades es coherente.

## Relación con Scrum

Desde la perspectiva de Scrum, los diagramas representan incrementos de valor dentro del backlog documental. No son artefactos aislados; cada uno responde a Historias de Usuario o requerimientos previamente priorizados. En consecuencia:

- los diagramas de ventas derivan de las historias `HU-04` a `HU-11`;
- los diagramas de inventario derivan de `HU-06`, `HU-12`, `HU-14`, `HU-16` y `HU-15`;
- los diagramas de reportes y cierre diario derivan de `HU-08`, `HU-17`, `HU-18` y `HU-19`.

Esto asegura trazabilidad entre backlog, análisis y modelado.

## Decisiones de modelado

Las decisiones principales adoptadas en esta fase son:

1. Separar los diagramas de Casos de Uso por dominio funcional para evitar saturación visual.
2. Modelar actividades solo para procesos críticos del negocio: venta, inventario y cierre diario.
3. Mantener el modelo conceptual y el modelo ER como artefactos distintos, para conservar claridad entre dominio y estructura de datos.
4. Incorporar `MovimientoInventario` como entidad independiente, debido a su relevancia para trazabilidad y control.
5. Conservar `Reporte` como entidad de negocio inicial, aunque posteriormente pueda refinarse según la estrategia de implementación.

## Validación técnica de diagramas

### Explicación técnica de UML

Los diagramas UML elaborados en el proyecto cumplen una función documental y no de implementación. Se utilizaron principalmente:

- diagramas de Casos de Uso para representar actores y capacidades del sistema;
- diagramas de actividades para describir secuencias operativas y decisiones;
- diagramas estructurales complementarios para arquitectura, componentes y relaciones de datos.

Esta combinación permite cubrir comportamiento, flujo y organización del sistema sin introducir decisiones técnicas prematuras.

### Validación de relaciones

La validación del conjunto de diagramas permite confirmar que:

- los actores principales del negocio aparecen de forma consistente en Casos de Uso;
- las relaciones `<<include>>` y `<<extend>>` responden a dependencias funcionales reales;
- los flujos de actividad representan validaciones coherentes con reglas de negocio;
- los diagramas estructurales reutilizan los mismos módulos y entidades ya documentados.

Relaciones principales documentadas:

- `CU-09 Registrar venta` `<<include>>` Validar stock, Calcular total, Registrar pago y Actualizar inventario.
- `CU-09 Registrar venta` `<<extend>>` Aplicar descuento, Generar comprobante y Cancelar venta.
- `CU-07 Registrar compra` `<<include>>` Seleccionar proveedor, Registrar detalle de compra y Actualizar inventario.
- `CU-07 Registrar compra` `<<extend>>` Registrar nuevo proveedor.
- `CU-14 Gestionar inventario` `<<include>>` Consultar stock, Registrar entrada y Registrar salida.
- `CU-14 Gestionar inventario` `<<extend>>` Generar alerta de bajo stock y Verificar productos vencidos.
- `CU-11 Consultar reportes` `<<include>>` Generar reporte de ventas y Generar reporte de inventario.
- `CU-11 Consultar reportes` `<<extend>>` Exportar reporte.
- `CU-12 Generar cierre diario` `<<include>>` Consultar ventas del día, Calcular total diario y Generar reporte de cierre.

### Coherencia con Requerimientos Funcionales

Los diagramas mantienen correspondencia con los Requerimientos Funcionales ya definidos. En particular:

- ventas se alinea con RF-09 a RF-15;
- inventario se alinea con RF-06, RF-08, RF-18, RF-19, RF-20 y RF-21;
- reportes y cierre diario se alinean con RF-20, RF-23, RF-24 y RF-25;
- seguridad se alinea con RF-26 y RF-27.
- productos, categorías, proveedores y clientes se alinean con RF-01 a RF-05, RF-14, RF-15, RF-16, RF-17 y RF-22.

### Coherencia con Historias de Usuario

Las Historias de Usuario de mayor prioridad se reflejan en los diagramas principales:

- HU-04 a HU-11 en los diagramas de ventas;
- HU-06, HU-12, HU-14, HU-15 y HU-16 en los diagramas de inventario;
- HU-08, HU-17, HU-18 y HU-19 en los diagramas de reportes y cierre.

Esto confirma que el modelado visual conserva el valor definido desde backlog y Scrum.

### Coherencia con reglas de negocio

Las reglas de negocio más sensibles se reflejan visualmente en los procesos modelados. Por ejemplo:

- validación de stock antes de vender;
- ajuste del inventario después de ventas o compras;
- identificación de productos vencidos;
- generación del cierre diario con base en ventas confirmadas.

La validación documental muestra que no existen contradicciones evidentes entre las reglas y los diagramas generados.

## Conclusiones

El conjunto de diagramas definido en esta fase permite transitar de una comprensión textual del problema hacia una representación estructurada del sistema. Los artefactos visuales creados no sustituyen la documentación previa, sino que la consolidan y preparan el camino para el diseño detallado y la futura implementación.
