# 18. Lógica de desarrollo del sistema

## Propósito del documento

Este documento consolida la lógica funcional y estructural que permitiría desarrollar **Tienda de la Esquina** en una fase posterior de implementación. Su objetivo es conectar los artefactos ya definidos en el proyecto con una visión técnica clara del comportamiento esperado del sistema, los módulos involucrados, las validaciones esenciales y la secuencia de construcción recomendada.

## Enfoque de desarrollo futuro

La construcción del sistema debería realizarse de forma incremental, priorizando primero los procesos que sostienen la operación diaria del negocio y dejando para fases posteriores los componentes de mayor complejidad analítica o administrativa.

La estrategia de desarrollo recomendada es la siguiente:

1. construir autenticación, productos, inventario y ventas como núcleo funcional;
2. integrar compras, proveedores y clientes para completar el flujo operativo;
3. incorporar reportes, cierre diario y controles administrativos;
4. fortalecer trazabilidad, auditoría, respaldos y evolución tecnológica.

Este orden responde al valor operativo del negocio y a la dependencia lógica entre módulos.

## Módulos principales del sistema

### 1. Autenticación y usuarios

Responsable del acceso al sistema, identificación del usuario y aplicación de permisos según rol.

Funciones principales:

- iniciar sesión;
- validar credenciales;
- asociar usuario con rol;
- restringir operaciones sensibles;
- registrar acciones administrativas relevantes.

### 2. Productos

Administra el catálogo base del negocio.

Funciones principales:

- registrar productos;
- actualizar datos descriptivos;
- administrar precio, estado y categoría;
- consultar productos activos;
- relacionar productos con inventario y ventas.

### 3. Inventario

Es el módulo de control operacional más sensible del sistema.

Funciones principales:

- consultar existencias;
- registrar entradas y salidas;
- reflejar ajustes controlados;
- identificar productos agotados o próximos a vencer;
- mantener trazabilidad de movimientos.

### 4. Compras

Permite registrar el abastecimiento del negocio y su impacto en inventario.

Funciones principales:

- registrar compras;
- asociar proveedor, fecha y detalle;
- incrementar existencias;
- dejar evidencia de ingreso de productos;
- alimentar historial de abastecimiento.

### 5. Ventas

Es el núcleo transaccional del sistema.

Funciones principales:

- selecciónar productos;
- validar disponibilidad;
- calcular subtotales y total;
- registrar forma de pago;
- generar detalle de venta;
- descontar inventario.

### 6. Clientes y proveedores

Complementan el dominio comercial y administrativo.

Funciones principales:

- registrar clientes cuando aplique;
- mantener datos básicos de proveedores;
- apoyar compras, consultas y reportes;
- dar contexto a relaciones comerciales futuras.

### 7. Reportes

Resume la información operativa producida por los módulos transaccionales.

Funciones principales:

- consultar historial de ventas;
- revisar movimientos de inventario;
- identificar productos agotados o vencidos;
- obtener resúmenes operativos;
- apoyar decisiones de compra y control.

### 8. Cierre diario

Consolida el control administrativo al final de la jornada.

Funciones principales:

- resumir ventas del día;
- totalizar ingresos;
- comparar transacciones y observaciones;
- dejar registro de cierre;
- servir como base para revisión posterior.

## Flujo lógico general del sistema

La operación prevista del sistema puede entenderse a través del siguiente flujo:

1. el usuario autenticado ingresa al sistema con un rol definido;
2. consulta o actualiza el catálogo de productos según su responsabilidad;
3. registra compras o ventas según el proceso operativo del momento;
4. cada transacción actualiza inventario y genera trazabilidad;
5. la información consolidada alimenta reportes operativos;
6. al cierre de la jornada se registra el resumen diario de actividad.

Este flujo mantiene coherencia con los Casos de Uso, el Modelo Entidad-Relación, la Arquitectura Candidata y los mockups documentados.

## Relación entre módulos

La relación funcional entre módulos puede resumirse así:

- `Autenticación` habilita acceso seguro al resto del sistema.
- `Productos` define el catálogo que consumen `Inventario`, `Compras` y `Ventas`.
- `Compras` incrementa existencias y genera movimientos en `Inventario`.
- `Ventas` consume existencias y genera detalle transaccional.
- `Inventario` refleja el estado real disponible para vender o reponer.
- `Reportes` consulta información histórica producida por ventas, compras e inventario.
- `Cierre diario` consolida resultados derivados principalmente de ventas y reportes.

## Validaciones funcionales clave

El sistema futuro debería preservar, como mínimo, las siguientes validaciones:

- no permitir ventas sin stock suficiente;
- impedir precios menores o iguales a cero;
- registrar movimientos de inventario solo con contexto válido;
- bloquear operaciones sobre productos inactivos o vencidos cuando corresponda;
- restringir cambios de precio y ajustes críticos a usuarios autorizados;
- asegurar que toda venta genere impacto en inventario;
- asegurar que toda compra incremente existencias;
- evitar cierres diarios sin base transaccional consolidada.

## Entidades principales y su papel en la lógica

Las entidades del modelo cumplen responsabilidades concretas dentro de la solución:

- `Producto`: define lo que el negocio comercializa.
- `Categoría`: organiza el catálogo.
- `Inventario`: representa existencias actuales.
- `MovimientoInventario`: conserva trazabilidad de cambios.
- `Venta`: registra la transacción comercial principal.
- `DetalleVenta`: desglosa productos y cantidades vendidas.
- `Compra`: registra abastecimiento.
- `DetalleCompra`: especifica productos adquiridos.
- `Proveedor`: vincula el origen del abastecimiento.
- `Cliente`: permite asociar ventas cuando el proceso lo requiera.
- `Usuario`: identifica quién opera el sistema.
- `Rol`: determina permisos y alcance operativo.
- `CierreDiario`: registra la consolidación administrativa del día.

## Relación ventas e inventario

La relación entre ventas e inventario es la más crítica del sistema, porque impacta directamente el control del negocio.

La lógica esperada es la siguiente:

1. el usuario inicia una venta;
2. seleccióna productos y cantidades;
3. el sistema valida disponibilidad real;
4. calcula subtotales y total;
5. registra la venta y su detalle;
6. descuenta existencias del inventario;
7. registra el movimiento correspondiente;
8. deja la información disponible para reportes y cierre diario.

Si esta relación falla, el sistema pierde confiabilidad operativa. Por eso la trazabilidad entre `Venta`, `DetalleVenta`, `Inventario` y `MovimientoInventario` es obligatoria.

## Arquitectura conceptual aplicada a la lógica

La Arquitectura Candidata de tres capas sostiene la construcción del sistema de manera ordenada:

### Capa de presentación

Representa formularios, pantallas, validaciones visibles, mensajes y navegación.

### Capa de lógica de negocio

Coordina reglas, validaciones, flujos operativos y consistencia entre módulos.

### Capa de datos

Conserva entidades, relaciones, historiales y persistencia de operaciones.

Está separación permite que la interfaz no mezcle responsabilidades con el procesamiento transaccional ni con el almacenamiento de información.

## Relación entre requerimientos y Casos de Uso

Los Requerimientos Funcionales describen capacidades del sistema, mientras que los Casos de Uso traducen esas capacidades en interacción observable entre actores y sistema.

Ejemplos de correspondencia:

- `RF-09`, `RF-10`, `RF-11`, `RF-12` y `RF-13` se reflejan en `CU-09 Registrar venta`;
- `RF-07` y `RF-08` se reflejan en `CU-07 Registrar compra`;
- `RF-20` y `RF-21` se relacionan con consultas operativas y control de inventario;
- `RF-25` se conecta con `CU-12 Generar cierre diario`;
- `RF-26` y `RF-27` se vinculan con autenticación y permisos.

Esta relación permite validar que la solución propuesta no sea solo descriptiva, sino trazable y verificable.

## Relación entre mockups y lógica del sistema

Los mockups no reemplazan la lógica funcional, pero sí sirven como representación temprana del comportamiento esperado.

Su aporte principal es:

- anticipar pantallas necesarias para cada módulo;
- reflejar campos, tablas y acciones esperadas;
- verificar que cada Caso de Uso tenga una interfaz plausible;
- detectar inconsistencias de navegación antes de programar.

Por ejemplo:

- el mockup de `Registrar venta` representa la lógica de validación de stock, captura de productos y totalización;
- el mockup de `Inventario` refleja consultas, alertas y movimientos;
- el mockup de `Compras` muestra cómo se integraría el abastecimiento con el incremento de existencias;
- el mockup de `Cierre diario` resume la consolidación operativa de la jornada.

## Cómo Scrum organizó el proyecto

Scrum permitió ordenar el trabajo documental por incrementos con sentido funcional.

La secuencia aplicada en el proyecto fue:

- `Sprint 1`: comprensión del negocio, stakeholders, reglas y requerimientos;
- `Sprint 2`: Historias de Usuario, backlog, Casos de Uso y diagramas;
- `Sprint 3`: modelo de datos, arquitectura y trazabilidad;
- `Sprint 4`: mockups, riesgos, QA, cierre documental y propuesta futura.

Este enfoque ayudó a construir el proyecto desde lo más conceptual hasta lo más estructural, sin perder visibilidad del valor de cada artefacto.

## Recomendación de implementación

Si el proyecto evolucionara hacia desarrollo real, la recomendación técnica es comenzar con un alcance mínimo viable compuesto por:

- autenticación;
- productos;
- inventario;
- ventas.

Después debería ampliarse con:

- compras;
- proveedores;
- clientes;
- reportes;
- cierre diario.

Este orden reduce complejidad inicial, protege la coherencia del dominio y permite validar tempranamente la relación entre operación, control y trazabilidad.

## Conclusión

La documentación existente ya define una base suficientemente clara para orientar el desarrollo futuro del sistema. La lógica funcional, las entidades, los módulos, las validaciones y la arquitectura conceptual se encuentran alineadas. En consecuencia, el valor de este documento es integrar esos elementos en una visión técnica única, útil para planificación, diseño detallado e implementación posterior.
