# Matriz CRUD

## Objetivo

Relacionar los módulos funcionales del sistema con las entidades principales del modelo de datos, identificando su nivel de operación mediante las acciones crear, consultar, actualizar y eliminar o inactivar.

## Convenciones

- `C`: Crear
- `R`: Consultar
- `U`: Actualizar
- `D`: Eliminar o inactivar logicamente
- `-`: Sin operación directa relevante

## Matriz CRUD

| Módulo | Rol | Usuario | Categoria | Producto | Inventario | MovimientoInventario | Cliente | Proveedor | Compra | DetalleCompra | Venta | DetalleVenta | Reporte | CierreDiario |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Autenticación y usuarios | R | R/U | - | - | - | - | - | - | - | - | - | - | - | - |
| Gestión de productos | - | - | C/R/U/D | C/R/U/D | R | - | - | - | - | - | - | - | - | - |
| Gestión de inventario | - | - | - | R | R/U | C/R/U | - | - | - | - | - | - | R | - |
| Gestión de ventas | - | R | - | R | R/U | C/R | C/R/U | - | - | - | C/R | C/R | R | - |
| Gestión de compras | - | R | - | R | R/U | C/R | - | R | C/R | C/R | - | - | R | - |
| Gestión de proveedores | - | - | - | - | - | - | - | C/R/U/D | R | - | - | - | - | - |
| Gestión de clientes | - | - | - | - | - | - | C/R/U/D | - | - | - | R | - | - | - |
| Reportes | - | R | - | R | R | R | R | R | R | R | R | R | C/R | R |
| Cierre diario | - | R | - | - | R | R | - | - | - | - | R | R | C/R | C/R |
| Administración | C/R/U/D | C/R/U/D | R | R | R | R | R | R | R | R | R | R | R | R |

## Observaciones

- En el contexto del proyecto, la operación `D` debe interpretarse preferentemente como inactivacion lógica cuando aplique.
- `MovimientoInventario` es administrado transversalmente por ventas, compras e inventario, debido a su naturaleza de trazabilidad.
- `Reporte` y `CierreDiario` se alimentan de información de otros módulos, por lo que su operación es predominantemente de creacion y consulta.
