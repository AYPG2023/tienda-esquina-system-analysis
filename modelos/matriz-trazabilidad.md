# Matriz de trazabilidad

## Objetivo

Relacionar Requerimientos Funcionales, Historias de Usuario, Casos de Uso, reglas de negocio, módulos y entidades afectadas para asegurar consistencia documental y cobertura de análisis.

## Matriz

| RF | Historia | Caso de uso | Regla | Módulo | Entidad |
|---|---|---|---|---|---|
| RF-01 | HU-01 | CU-02 | RN-04, RN-07, RN-08, RN-20 | Gestión de productos | Producto, Categoría |
| RF-02 | HU-02 | CU-02, CU-14 | RN-07, RN-08 | Gestión de productos | Producto |
| RF-03 | HU-02 | CU-03 | RN-07, RN-08 | Gestión de productos | Producto |
| RF-04 | HU-07 | CU-03, CU-05 | RN-12, RN-19 | Gestión de productos | Producto, Categoría |
| RF-05 | HU-01 | CU-04 | RN-15, RN-23 | Gestión de productos | Producto |
| RF-06 | HU-03 | CU-14 | RN-17, RN-18 | Gestión de inventario | Inventario, Producto |
| RF-07 | HU-06 | CU-07 | RN-09, RN-16, RN-24 | Gestión de compras | Compra, DetalleCompra, Producto |
| RF-08 | HU-06 | CU-07 | RN-16, RN-17 | Gestión de compras, Gestión de inventario | Inventario, MovimientoInventario |
| RF-09 | HU-04 | CU-09 | RN-01, RN-13, RN-14 | Gestión de ventas | Venta, DetalleVenta |
| RF-10 | HU-05 | CU-09 | RN-03, RN-21 | Gestión de ventas | Venta, DetalleVenta |
| RF-11 | HU-10 | CU-09 | RN-01, RN-17 | Gestión de ventas, Gestión de inventario | Inventario, Producto |
| RF-12 | HU-11 | CU-09 | RN-05, RN-17 | Gestión de ventas, Gestión de inventario | Inventario, MovimientoInventario |
| RF-13 | HU-04 | CU-09 | RN-02 | Gestión de ventas | Venta |
| RF-14 | HU-08 | CU-10, CU-13 | RN-02, RN-25 | Gestión de ventas, Gestión de clientes | Venta, Cliente |
| RF-15 | HU-09 | CU-10, CU-13 | RN-14, RN-25 | Gestión de ventas | DetalleVenta, Venta |
| RF-16 | HU-07 | CU-03 | RN-04, RN-12, RN-19 | Gestión de productos | Producto |
| RF-17 | HU-01 | CU-02 | RN-04 | Gestión de productos | Producto |
| RF-18 | HU-14 | CU-15 | RN-10, RN-11 | Gestión de inventario | Producto |
| RF-19 | HU-15 | CU-15 | RN-10 | Gestión de inventario | Producto, Inventario |
| RF-20 | HU-12 | CU-11, CU-14 | RN-18 | Reportes, Gestión de inventario | Inventario, Producto, Reporte |
| RF-21 | HU-16 | CU-08 | RN-06, RN-22 | Gestión de inventario | MovimientoInventario, Inventario |
| RF-22 | HU-13 | CU-06, CU-07 | RN-24 | Gestión de proveedores, Gestión de compras | Proveedor, Compra |
| RF-23 | HU-19 | CU-11 | RN-25 | Reportes | Reporte, Venta, DetalleVenta |
| RF-24 | HU-17 | CU-10 | RN-02, RN-25 | Gestión de ventas, Reportes | Venta, Reporte |
| RF-25 | HU-18 | CU-11, CU-12 | RN-25 | Reportes, Cierre diario | Reporte, CierreDiario, Venta |
| RF-26 | HU-20 | CU-01 | RN-19, RN-23 | Autenticación y usuarios | Usuario, Rol |
| RF-27 | HU-20 | CU-01, CU-03 | RN-19 | Autenticación y usuarios, Administración | Usuario, Rol, Producto |

## Observaciones

- La matriz muestra trazabilidad cruzada y no una relación estrictamente uno a uno.
- Algunos requerimientos se satisfacen mediante más de un Caso de Uso o módulo, especialmente cuando intervienen procesos transversales como inventario, reportes o seguridad.
- La columna de reglas agrupa las reglas de negocio más relevantes, sin excluir validaciones complementarias que pudieran detallarse después.
