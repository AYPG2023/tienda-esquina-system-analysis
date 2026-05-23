# 11. Arquitectura candidata

## Objetivo del documento

Definir una arquitectura conceptual y un diseño lógico que organicen el sistema de la Tienda de la Esquina en capas, módulos y flujos de responsabilidad, manteniendo coherencia con el análisis funcional y la estructura de datos propuesta.

## Tipo de arquitectura propuesta

Se propone una **arquitectura conceptual de tres capas**, adecuada para un sistema transaccional pequeño con foco en claridad, separación de responsabilidades y crecimiento ordenado:

1. **Capa de Presentación**
2. **Capa de Lógica de Negocio**
3. **Capa de Datos**

Esta eleccion permite modelar el sistema sin comprometerlo todavía con una tecnologia especifica y facilita la trazabilidad entre actores, reglas de negocio, Casos de Uso y entidades.

## Justificación de la arquitectura

La Tienda de la Esquina requiere controlar ventas, inventario, compras, reportes y cierre diario con reglas de negocio claras y datos consistentes. Una arquitectura por capas es adecuada porque:

- desacopla la interaccion del usuario de las reglas del negocio;
- concentra las validaciones funcionales en módulos de negocio identificables;
- organiza el acceso a datos sin mezclarlo con el flujo operativo;
- facilita el mantenimiento y la futura ampliacion del sistema;
- permite mapear de forma directa los Casos de Uso y requerimientos a componentes lógicos.

## Capas del sistema

### Capa de Presentación

Responsable de la interaccion con usuarios como administrador y empleado. Su función es capturar entradas, mostrar resultados, guiar procesos y comunicar mensajes de validación.

Responsabilidades principales:

- autenticación y acceso por rol;
- captura de datos de ventas, productos, compras y clientes;
- consulta de reportes, historial y cierre diario;
- presentación de alertas de stock, vencimientos o errores.

### Capa de Lógica de Negocio

Responsable de aplicar reglas operativas, coordinar Casos de Uso y garantizar consistencia funcional. Esta capa representa el núcleo del sistema.

Responsabilidades principales:

- validación de credenciales y permisos;
- administración de productos y categorías;
- control de stock, vencimientos y movimientos;
- registro de ventas y compras;
- consolidación de reportes y cierre diario;
- aplicación de reglas de negocio y trazabilidad.

### Capa de Datos

Responsable de persistir y recuperar la información del negocio con estructura consistente.

Responsabilidades principales:

- almacenamiento de usuarios, roles, productos y categorías;
- almacenamiento de ventas, compras y sus detalles;
- control persistente de inventario y movimientos;
- almacenamiento de reportes y cierres diarios;
- soporte a consultas historicas y trazabilidad.

## Módulos principales del sistema

### Módulo: Autenticación y usuarios
**Objetivo:** Controlar acceso al sistema y aplicar restricciones segun el rol del usuario.  
**Actores relacionados:** Administrador, Empleado  
**Casos de uso relacionados:** CU-01  
**Requerimientos relacionados:** RF-26, RF-27  
**Reglas de negocio relacionadas:** RN-19, RN-23  
**Datos que administra:** Usuario, Rol

### Módulo: Gestión de productos
**Objetivo:** Registrar, actualizar, clasificar e inactivar productos del catálogo.  
**Actores relacionados:** Administrador  
**Casos de uso relacionados:** CU-02, CU-03, CU-04, CU-05  
**Requerimientos relacionados:** RF-01, RF-02, RF-03, RF-04, RF-05, RF-16, RF-17  
**Reglas de negocio relacionadas:** RN-04, RN-07, RN-08, RN-12, RN-15, RN-20, RN-23  
**Datos que administra:** Producto, Categoria

### Módulo: Gestión de inventario
**Objetivo:** Mantener el estado real de existencias, ajustes, alertas y vencimientos.  
**Actores relacionados:** Administrador, Empleado  
**Casos de uso relacionados:** CU-08, CU-14, CU-15  
**Requerimientos relacionados:** RF-06, RF-08, RF-18, RF-19, RF-20, RF-21  
**Reglas de negocio relacionadas:** RN-01, RN-05, RN-06, RN-10, RN-11, RN-17, RN-18, RN-22  
**Datos que administra:** Inventario, MovimientoInventario, Producto

### Módulo: Gestión de ventas
**Objetivo:** Registrar transacciones comerciales, calcular importes y actualizar efectos en inventario.  
**Actores relacionados:** Empleado, Administrador, Cliente  
**Casos de uso relacionados:** CU-09, CU-10  
**Requerimientos relacionados:** RF-09, RF-10, RF-11, RF-12, RF-13, RF-14, RF-15, RF-24  
**Reglas de negocio relacionadas:** RN-01, RN-02, RN-03, RN-05, RN-13, RN-14, RN-21, RN-25  
**Datos que administra:** Venta, DetalleVenta, Cliente, MovimientoInventario

### Módulo: Gestión de compras
**Objetivo:** Registrar abastecimiento y reflejar entradas formales al inventario.  
**Actores relacionados:** Administrador, Proveedor  
**Casos de uso relacionados:** CU-07  
**Requerimientos relacionados:** RF-07, RF-08, RF-22  
**Reglas de negocio relacionadas:** RN-09, RN-16, RN-24  
**Datos que administra:** Compra, DetalleCompra, MovimientoInventario, Producto

### Módulo: Gestión de proveedores
**Objetivo:** Mantener el catálogo de proveedores y su relación con compras.  
**Actores relacionados:** Administrador, Proveedor  
**Casos de uso relacionados:** CU-06  
**Requerimientos relacionados:** RF-22  
**Reglas de negocio relacionadas:** RN-24  
**Datos que administra:** Proveedor

### Módulo: Gestión de clientes
**Objetivo:** Registrar y consultar clientes cuando la operación requiera identificación comercial.  
**Actores relacionados:** Administrador, Cliente  
**Casos de uso relacionados:** CU-13  
**Requerimientos relacionados:** RF-14, RF-15  
**Reglas de negocio relacionadas:** RN-07  
**Datos que administra:** Cliente

### Módulo: Reportes
**Objetivo:** Generar consultas consolidadas para control y apoyo a decisiones.  
**Actores relacionados:** Administrador  
**Casos de uso relacionados:** CU-11  
**Requerimientos relacionados:** RF-20, RF-23, RF-24, RF-25  
**Reglas de negocio relacionadas:** RN-18, RN-25  
**Datos que administra:** Reporte, Venta, Inventario, Producto

### Módulo: Cierre diario
**Objetivo:** Consolidar el resultado operativo del día y mantener evidencia de control administrativo.  
**Actores relacionados:** Administrador  
**Casos de uso relacionados:** CU-12  
**Requerimientos relacionados:** RF-25  
**Reglas de negocio relacionadas:** RN-02, RN-25  
**Datos que administra:** CierreDiario, Reporte, Venta

### Módulo: Administración
**Objetivo:** Coordinar parametros generales del sistema, supervision y control transversal.  
**Actores relacionados:** Administrador  
**Casos de uso relacionados:** CU-01, CU-02, CU-03, CU-05, CU-11, CU-12, CU-14  
**Requerimientos relacionados:** RF-26, RF-27 y requerimientos de consulta administrativa  
**Reglas de negocio relacionadas:** RN-19, RN-25  
**Datos que administra:** Usuario, Rol, Reporte, CierreDiario

## Responsabilidad de cada módulo

El diseño lógico asigna a cada módulo un conjunto de responsabilidades cohesionadas y evita mezclar decisiones de autenticación, transacción, inventario y consulta. Esta separación reduce acoplamiento y mejora la claridad del sistema desde el punto de vista funcional.

## Flujo general entre módulos

El flujo funcional principal del sistema puede resumirse asi:

1. El usuario accede por el módulo de autenticación.
2. La capa de negocio habilita acceso segun rol.
3. Los módulos operativos de productos, compras y ventas consumen catalogos y validaciones comunes.
4. El módulo de inventario recibe efectos de compras, ventas y ajustes.
5. Los módulos de reportes y cierre diario consolidan la información transaccional.
6. La capa de datos preserva trazabilidad entre usuario, operación, movimiento y resultado.

## Relación entre arquitectura y requerimientos no funcionales

- **Seguridad:** se atiende mediante autenticación, roles y control de acceso.
- **Usabilidad:** se favorece al separar interacciones operativas de reglas complejas.
- **Confiabilidad e integridad:** se centralizan validaciones de negocio en módulos especificos.
- **Trazabilidad:** se apoya en movimientos de inventario, ventas, compras, reportes y cierres.
- **Escalabilidad:** la modularidad permite ampliar funciones sin redisenar toda la solución.

## Beneficios de la arquitectura

- Organiza el sistema en bloques comprensibles y mantenibles.
- Mejora la trazabilidad entre Casos de Uso, módulos y datos.
- Facilita identificar impactos funcionales de cada requerimiento.
- Reduce el riesgo de mezclar lógica operativa con persistencia o presentación.
- Sienta una base adecuada para una implementación futura con distintas tecnologías.

## Limitaciones

- Es una arquitectura conceptual y no una especificacion de despliegue real.
- No define infraestructura, seguridad avanzada ni integraciones externas detalladas.
- No incorpora metricas de rendimiento cuantificadas.
- Algunas responsabilidades podran refinarse al pasar de análisis a diseño técnico.

## Supuestos tecnicos

- Existira un mecanismo de autenticación con roles diferenciados.
- El sistema administrara transacciones con consistencia suficiente para evitar desajustes de inventario.
- Los reportes y el cierre diario se construiran sobre información transaccional consolidada.
- La capa de datos podra representar relaciones 1:N y 1:1 del modelo lógico propuesto.

## Recomendaciones

1. Mantener la separación estricta entre presentación, lógica y datos en fases posteriores.
2. Preservar `MovimientoInventario` como eje de trazabilidad de entradas, salidas y ajustes.
3. Tratar `CierreDiario` como artefacto operativo persistente y no solo como reporte temporal.
4. Refinar en la siguiente fase los contratos entre módulos y sus reglas de autorizacion.
5. Validar cada nuevo requerimiento contra la matriz de trazabilidad para evitar inconsistencias.

## Validación conceptual de la arquitectura

La arquitectura propuesta fue revisada desde una perspectiva de calidad documental y adecuacion al problema del negocio. La validación confirma que la separación por capas y módulos es congruente con el alcance del sistema y con la complejidad del dominio.

### Escalabilidad

La arquitectura presenta condiciones favorables para crecer porque:

- los módulos funcionales están separados por responsabilidad;
- las reglas de negocio pueden ampliarse sin reestructurar toda la solución;
- el modelo de datos contempla entidades clave para evolución futura.

### Mantenibilidad

La mantenibilidad conceptual es adecuada debido a:

- organización por capas;
- separación entre ventas, compras, inventario y reportes;
- trazabilidad entre módulos, Casos de Uso y entidades.

Esto reduce el riesgo de cambios desordenados en fases posteriores.

### Modularidad

La modularidad es una de las fortalezas principales del diseño. Cada módulo responde a un conjunto reconocible de actores, reglas, datos y requerimientos, lo que facilita:

- comprension del sistema;
- asignacion de responsabilidades;
- evaluacion de impacto de cambios.

### Seguridad conceptual

Aunque no se define una implementación real, la seguridad conceptual esta contemplada por medio de:

- autenticación y roles;
- restriccion de funciones administrativas;
- separación de accesos segun responsabilidad operativa.

### Ventajas de la arquitectura propuesta

- Es simple de comunicar en contexto académico.
- Conserva coherencia con el tamano del problema.
- Permite mapear con claridad módulos, datos y pruebas.
- Sirve como base valida para evolucionar hacia un diseño técnico posterior.

## Conclusiones

La Arquitectura Candidata propuesta responde adecuadamente al tamano, complejidad y naturaleza transaccional de la Tienda de la Esquina. Su estructura por capas y módulos permite conectar negocio, reglas, Casos de Uso y datos de manera consistente, dejando una base documental sólida para evolucionar hacia el diseño técnico posterior.
