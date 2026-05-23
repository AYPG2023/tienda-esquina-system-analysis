
# 10. Modelo Entidad-Relación

## Objetivo del documento

Definir un Modelo Entidad-Relación más completo y realista para un sistema de tienda orientado a ventas, inventario y administración, incorporando seguridad, auditoría, catálogos de estado, métodos de pago, cierres diarios y trazabilidad operativa.

## Alcance del modelo

El modelo sigue siendo conceptual y documental. No define SQL, tipos físicos ni decisiones de motor de base de datos. Su función es representar:

- entidades del dominio;
- relaciones obligatorias;
- catálogos de control;
- trazabilidad operativa;
- control de seguridad;
- coherencia entre ventas, compras, inventario y cierre diario.

## Estructura general del modelo

El modelo se organiza en cinco bloques funcionales.

### Seguridad

- `Usuario`
- `Rol`
- `Permiso`
- `RolPermiso`
- `Auditoría`

### Ventas

- `Venta`
- `DetalleVenta`
- `PagoVenta`
- `MétodoPago`
- `Cliente`
- `EstadoVenta`

### Compras

- `Compra`
- `DetalleCompra`
- `Proveedor`
- `EstadoCompra`

### Inventario

- `Producto`
- `Categoría`
- `Marca`
- `UnidadMedida`
- `Inventario`
- `MovimientoInventario`
- `EstadoProducto`
- `EstadoInventario`

### Cierre y reportes

- `CierreDiario`
- `DetalleCierreDiario`
- `Reporte`

## Nuevas entidades incorporadas y justificación

### Permiso y RolPermiso

Se agregan para representar seguridad por capacidades y no solo por rol nominal. Un rol por sí solo describe responsabilidad general, pero no permite modelar con precisión qué operaciones puede ejecutar un usuario sobre ventas, inventario, reportes o administración.

La relación `Rol N:M Permiso` mediante `RolPermiso` permite:

- asignar accesos por módulo;
- restringir operaciones críticas;
- reutilizar permisos entre distintos roles;
- dejar una base más escalable para control de acceso.

### Auditoría

Se incorpora para registrar acciones relevantes del sistema: creación, edición, anulación, ajuste y revisión de registros. Su presencia fortalece trazabilidad y control administrativo.

La entidad permite saber:

- quién ejecutó una acción;
- en qué módulo ocurrió;
- qué tabla y registro fueron afectados;
- cuándo ocurrió;
- cuál fue la descripción operativa del evento.

### Estados como catálogos

Se separan `EstadoVenta`, `EstadoCompra`, `EstadoProducto` y `EstadoInventario` en entidades independientes porque el estado no debe quedar como texto libre dentro de cada transacción o maestro.

Esto mejora:

- consistencia documental;
- facilidad de validación;
- control sobre transiciones de estado;
- reutilización de valores;
- claridad en reportes y trazabilidad.

### MétodoPago y PagoVenta

Se agregan para separar la transacción comercial del registro de pago. Una venta puede requerir uno o varios pagos, incluso con métodos distintos.

Esta separación permite:

- registrar pagos parciales o múltiples;
- distinguir total vendido de total pagado;
- consolidar cierres diarios por método de pago;
- preparar el modelo para efectivo, tarjeta, transferencia u otros medios.

### Marca y UnidadMedida

Se integran como catálogos de producto para enriquecer la administración del inventario. En un sistema real, el producto no debería depender solo de nombre y categoría.

### DetalleCierreDiario

Se agrega para relacionar explícitamente un cierre diario con las ventas que lo componen. Esto evita que `CierreDiario` quede como un simple resumen sin detalle trazable.

## Entidades principales del modelo

| Entidad | Función principal |
|---|---|
| Rol | Define responsabilidad general dentro del sistema |
| Usuario | Identifica a la persona que opera el sistema |
| Permiso | Define capacidades específicas por módulo |
| RolPermiso | Resuelve la relación entre roles y permisos |
| Auditoría | Registra acciones relevantes sobre datos y operaciones |
| Cliente | Representa al comprador cuando la venta lo requiera |
| Proveedor | Representa al abastecedor del negocio |
| EstadoVenta | Catálogo de estados de venta |
| EstadoCompra | Catálogo de estados de compra |
| EstadoProducto | Catálogo de estados del producto |
| EstadoInventario | Catálogo de estados del inventario |
| MétodoPago | Catálogo de métodos de pago |
| Marca | Catálogo de marcas de producto |
| UnidadMedida | Catálogo de unidades de medida |
| Categoría | Clasificación principal del producto |
| Producto | Maestro comercial del sistema |
| Inventario | Estado actual del stock por producto |
| MovimientoInventario | Historial de entradas, salidas y ajustes |
| Venta | Cabecera de la transacción comercial |
| DetalleVenta | Productos incluidos en cada venta |
| PagoVenta | Registro de pagos asociados a una venta |
| Compra | Cabecera de abastecimiento |
| DetalleCompra | Productos incluidos en cada compra |
| CierreDiario | Consolidado operativo y administrativo de la jornada |
| DetalleCierreDiario | Relación entre el cierre y las ventas incluidas |
| Reporte | Registro conceptual de salidas informativas del sistema |

## Relaciones obligatorias del modelo

| Relación | Cardinalidad |
|---|---|
| Rol - Usuario | 1:N |
| Rol - RolPermiso | 1:N |
| Permiso - RolPermiso | 1:N |
| Usuario - Venta | 1:N |
| Usuario - Compra | 1:N |
| Usuario - Auditoría | 1:N |
| Usuario - MovimientoInventario | 1:N |
| Usuario - CierreDiario | 1:N |
| Usuario - Reporte | 1:N |
| Cliente - Venta | 1:N |
| Proveedor - Compra | 1:N |
| Venta - DetalleVenta | 1:N |
| Producto - DetalleVenta | 1:N |
| Compra - DetalleCompra | 1:N |
| Producto - DetalleCompra | 1:N |
| Producto - Inventario | 1:1 |
| Producto - MovimientoInventario | 1:N |
| EstadoVenta - Venta | 1:N |
| EstadoCompra - Compra | 1:N |
| EstadoProducto - Producto | 1:N |
| EstadoInventario - Inventario | 1:N |
| MétodoPago - PagoVenta | 1:N |
| Venta - PagoVenta | 1:N |
| CierreDiario - DetalleCierreDiario | 1:N |
| CierreDiario - Venta | 1:N |
| Categoría - Producto | 1:N |
| Marca - Producto | 1:N |
| UnidadMedida - Producto | 1:N |

## Definición resumida de entidades

### Seguridad

#### Rol

- **PK:** `id_rol`
- nombre
- descripción

#### Usuario

- **PK:** `id_usuario`
- **FK:** `id_rol -> Rol.id_rol`
- nombre_completo
- nombre_usuario
- contraseña
- correo
- estado
- fecha_creacion

#### Permiso

- **PK:** `id_permiso`
- nombre
- descripción
- módulo

#### RolPermiso

- **PK:** `id_rol_permiso`
- **FK:** `id_rol -> Rol.id_rol`
- **FK:** `id_permiso -> Permiso.id_permiso`

#### Auditoría

- **PK:** `id_auditoria`
- **FK:** `id_usuario -> Usuario.id_usuario`
- accion
- modulo
- tabla_afectada
- registro_afectado
- descripcion
- fecha_hora
- ip

### Ventas

#### Cliente

- **PK:** `id_cliente`
- nombre_completo
- telefono
- direccion
- estado

#### EstadoVenta

- **PK:** `id_estado_venta`
- nombre
- descripcion

#### MétodoPago

- **PK:** `id_metodo_pago`
- nombre
- descripcion

#### Venta

- **PK:** `id_venta`
- **FK:** `id_usuario -> Usuario.id_usuario`
- **FK:** `id_cliente -> Cliente.id_cliente`
- **FK:** `id_estado_venta -> EstadoVenta.id_estado_venta`
- **FK:** `id_cierre_diario -> CierreDiario.id_cierre_diario`
- fecha_hora
- subtotal
- descuento
- total_venta
- observaciones

#### DetalleVenta

- **PK:** `id_detalle_venta`
- **FK:** `id_venta -> Venta.id_venta`
- **FK:** `id_producto -> Producto.id_producto`
- cantidad
- precio_unitario
- subtotal

#### PagoVenta

- **PK:** `id_pago_venta`
- **FK:** `id_venta -> Venta.id_venta`
- **FK:** `id_metodo_pago -> MétodoPago.id_metodo_pago`
- monto
- referencia
- fecha_pago

### Compras

#### Proveedor

- **PK:** `id_proveedor`
- nombre_proveedor
- telefono
- direccion
- estado

#### EstadoCompra

- **PK:** `id_estado_compra`
- nombre
- descripcion

#### Compra

- **PK:** `id_compra`
- **FK:** `id_usuario -> Usuario.id_usuario`
- **FK:** `id_proveedor -> Proveedor.id_proveedor`
- **FK:** `id_estado_compra -> EstadoCompra.id_estado_compra`
- fecha_compra
- subtotal
- total_compra
- observaciones

#### DetalleCompra

- **PK:** `id_detalle_compra`
- **FK:** `id_compra -> Compra.id_compra`
- **FK:** `id_producto -> Producto.id_producto`
- cantidad
- costo_unitario
- subtotal

### Inventario

#### EstadoProducto

- **PK:** `id_estado_producto`
- nombre
- descripcion

#### EstadoInventario

- **PK:** `id_estado_inventario`
- nombre
- descripcion

#### UnidadMedida

- **PK:** `id_unidad_medida`
- nombre
- abreviatura
- descripcion

#### Marca

- **PK:** `id_marca`
- nombre
- descripcion

#### Categoría

- **PK:** `id_categoria`
- nombre
- descripcion
- estado

#### Producto

- **PK:** `id_producto`
- **FK:** `id_categoria -> Categoría.id_categoria`
- **FK:** `id_marca -> Marca.id_marca`
- **FK:** `id_unidad_medida -> UnidadMedida.id_unidad_medida`
- **FK:** `id_estado_producto -> EstadoProducto.id_estado_producto`
- nombre
- descripcion
- codigo_producto
- precio_venta
- fecha_vencimiento

#### Inventario

- **PK:** `id_inventario`
- **FK:** `id_producto -> Producto.id_producto`
- **FK:** `id_estado_inventario -> EstadoInventario.id_estado_inventario`
- stock_actual
- stock_minimo
- stock_maximo
- ultima_actualizacion

#### MovimientoInventario

- **PK:** `id_movimiento`
- **FK:** `id_producto -> Producto.id_producto`
- **FK:** `id_usuario -> Usuario.id_usuario`
- **FK:** `id_venta -> Venta.id_venta`
- **FK:** `id_compra -> Compra.id_compra`
- tipo_movimiento
- cantidad
- stock_anterior
- stock_resultante
- fecha_movimiento
- motivo

### Cierre y reportes

#### CierreDiario

- **PK:** `id_cierre_diario`
- **FK:** `id_usuario -> Usuario.id_usuario`
- fecha
- total_ventas
- total_efectivo
- total_tarjeta
- total_general
- observaciones

#### DetalleCierreDiario

- **PK:** `id_detalle_cierre`
- **FK:** `id_cierre_diario -> CierreDiario.id_cierre_diario`
- **FK:** `id_venta -> Venta.id_venta`
- monto
- metodo_pago

#### Reporte

- **PK:** `id_reporte`
- **FK:** `id_usuario -> Usuario.id_usuario`
- tipo_reporte
- fecha_generacion
- parametros
- observaciones

## Cómo se relacionan ventas e inventario

La relación entre ventas e inventario es el eje operativo del sistema.

La lógica conceptual esperada es:

1. una venta se registra en `Venta`;
2. sus productos se detallan en `DetalleVenta`;
3. cada línea vendida impacta el stock del `Inventario`;
4. el movimiento generado se registra en `MovimientoInventario`;
5. la trazabilidad queda asociada al usuario responsable.

Este diseño evita que el inventario se modifique sin dejar evidencia documental del origen del cambio.

## Cómo se registra el pago

El pago no se almacena directamente en la cabecera de la venta como único dato estructural. En cambio:

- `Venta` registra la operación comercial;
- `PagoVenta` registra uno o varios pagos;
- `MétodoPago` normaliza los medios permitidos;
- `CierreDiario` resume montos por método.

Esto permite representar mejor escenarios reales de control administrativo.

## Cómo se cierra el día

El cierre diario se modela en dos niveles:

- `CierreDiario` como cabecera del cierre;
- `DetalleCierreDiario` como vínculo entre el cierre y las ventas que lo integran.

Con ello se puede:

- totalizar ventas del día;
- separar montos por método de pago;
- registrar observaciones;
- mantener rastreo de qué ventas componen cada cierre.

## Trazabilidad y control

El modelo mejora la trazabilidad porque integra:

- control de roles y permisos;
- auditoría de acciones;
- catálogos de estado;
- relación entre transacciones y movimientos de inventario;
- asociación entre ventas, pagos y cierres diarios.

Esto hace que el sistema propuesto sea más completo, más profesional y más cercano a una solución real de operación comercial.

## Conclusiones

La versión actualizada del Modelo Entidad-Relación deja de ser un esquema mínimo y pasa a representar una solución más realista para una tienda con ventas, compras, inventario, control administrativo y seguridad básica. La incorporación de permisos, auditoría, pagos, estados y detalle de cierre fortalece la consistencia del análisis y mejora la base documental para una futura etapa de diseño técnico.
