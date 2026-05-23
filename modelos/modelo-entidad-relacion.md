# Modelo Entidad-Relación

## Propósito

Consolidar en un solo documento el alcance funcional del modelo de datos propuesto para **Tienda de la Esquina**, integrando seguridad, catálogo de estados, pagos, auditoría, inventario, compras, ventas y cierre diario.

## Visión general

El modelo se diseñó para representar un sistema comercial pequeño con necesidad de control operativo y trazabilidad administrativa. A diferencia de una versión mínima, esta estructura separa catálogos, entidades transaccionales y entidades de control para evitar ambigüedad y facilitar validación posterior.

## Bloques del modelo

### Seguridad

- `Usuario`
- `Rol`
- `Permiso`
- `RolPermiso`
- `Auditoría`

### Ventas

- `Cliente`
- `EstadoVenta`
- `Venta`
- `DetalleVenta`
- `MétodoPago`
- `PagoVenta`

### Compras

- `Proveedor`
- `EstadoCompra`
- `Compra`
- `DetalleCompra`

### Inventario

- `Categoría`
- `Marca`
- `UnidadMedida`
- `EstadoProducto`
- `Producto`
- `EstadoInventario`
- `Inventario`
- `MovimientoInventario`

### Cierre y reportes

- `CierreDiario`
- `DetalleCierreDiario`
- `Reporte`

## Razones de diseño

### Seguridad por roles y permisos

El sistema no debe depender solo del nombre del rol para decidir accesos. Por ello:

- `Rol` define responsabilidad general;
- `Permiso` define capacidad específica;
- `RolPermiso` relaciona ambos de forma flexible.

### Auditoría para trazabilidad

La entidad `Auditoría` permite registrar operaciones críticas y fortalece el control de cambios sobre ventas, compras, inventario y administración.

### Estados como catálogos

Separar estados en entidades independientes evita repetir textos, mejora consistencia y facilita reportes y validaciones.

### Pagos separados de la venta

`PagoVenta` y `MétodoPago` hacen posible modelar pagos múltiples, parciales o diferenciados por medio de pago, algo habitual en sistemas reales.

### Relación entre venta e inventario

Toda venta debe impactar inventario por medio de `MovimientoInventario`. Esa relación es fundamental para la confiabilidad del sistema.

### Cierre diario con detalle

`CierreDiario` resume la jornada, mientras que `DetalleCierreDiario` conserva el vínculo con las ventas incluidas, evitando consolidaciones opacas.

## Relaciones críticas

| Relación | Tipo |
|---|---|
| Rol -> Usuario | 1:N |
| Rol -> RolPermiso | 1:N |
| Permiso -> RolPermiso | 1:N |
| Usuario -> Venta | 1:N |
| Usuario -> Compra | 1:N |
| Usuario -> Auditoría | 1:N |
| Cliente -> Venta | 1:N |
| Proveedor -> Compra | 1:N |
| Venta -> DetalleVenta | 1:N |
| Producto -> DetalleVenta | 1:N |
| Compra -> DetalleCompra | 1:N |
| Producto -> DetalleCompra | 1:N |
| Producto -> Inventario | 1:1 |
| Producto -> MovimientoInventario | 1:N |
| Usuario -> MovimientoInventario | 1:N |
| EstadoVenta -> Venta | 1:N |
| EstadoCompra -> Compra | 1:N |
| EstadoProducto -> Producto | 1:N |
| EstadoInventario -> Inventario | 1:N |
| MétodoPago -> PagoVenta | 1:N |
| Venta -> PagoVenta | 1:N |
| Usuario -> CierreDiario | 1:N |
| CierreDiario -> DetalleCierreDiario | 1:N |
| CierreDiario -> Venta | 1:N |
| Categoría -> Producto | 1:N |
| Marca -> Producto | 1:N |
| UnidadMedida -> Producto | 1:N |

## Resultado esperado del modelo

El modelo resultante representa de mejor manera un sistema de tienda realista porque:

- controla accesos;
- documenta acciones;
- modela pagos;
- distingue estados funcionales;
- fortalece inventario;
- soporta cierres diarios;
- mejora la trazabilidad entre operación y administración.
