# 04. Reglas de negocio

## Catálogo de reglas de negocio

| ID | Regla de negocio |
|---|---|
| RN-01 | No se debe registrar una venta de un producto si la existencia disponible es igual a cero. |
| RN-02 | Toda venta debe registrar fecha y hora de realizacion. |
| RN-03 | El total de la venta debe calcularse automaticamente a partir del precio vigente y la cantidad vendida. |
| RN-04 | Todo producto debe tener un precio de venta mayor que cero antes de estar disponible para comercialización. |
| RN-05 | Después de confirmar una venta, el inventario del producto vendido debe actualizarse inmediatamente. |
| RN-06 | No se debe permitir registrar cantidades negativas en existencias, compras o ventas. |
| RN-07 | Cada producto debe contar con un identificador unico dentro del catálogo. |
| RN-08 | Un producto no debe duplicarse en el catálogo con el mismo nombre y presentación activa. |
| RN-09 | Todo ingreso de productos al inventario debe quedar asociado a una fecha de recepcion. |
| RN-10 | Los productos vencidos no deben estar disponibles para venta. |
| RN-11 | Los productos próximos a vencer deben poder diferenciarse de los productos en estado normal. |
| RN-12 | Toda modificacion de precio debe aplicarse sobre el precio vigente del producto y conservar consistencia para ventas posteriores. |
| RN-13 | Una venta debe incluir al menos un producto para considerarse valida. |
| RN-14 | El sistema debe registrar la cantidad vendida por cada producto dentro de una venta. |
| RN-15 | No se debe eliminar un producto que tenga movimientos historicos de venta o inventario; en su lugar debe poder inactivarse. |
| RN-16 | Toda compra o reposición debe incrementar la existencia disponible del producto correspondiente. |
| RN-17 | El inventario disponible de un producto debe ser igual al resultado de existencias iniciales más entradas menos salidas registradas. |
| RN-18 | El sistema debe permitir identificar productos agotados para facilitar la reposición. |
| RN-19 | Solo usuarios autorizados deben poder registrar productos nuevos o modificar precios. |
| RN-20 | Todo producto debe estar asociado a una unidad de control básica, por ejemplo unidad, paquete, botella o similar. |
| RN-21 | No se debe confirmar una venta si el total calculado presenta inconsistencia con el detalle de productos. |
| RN-22 | Las correcciones sobre inventario deben quedar justificadas como ajuste y no confundirse con ventas o compras. |
| RN-23 | Un producto inactivo no debe aparecer como disponible para nuevas ventas. |
| RN-24 | La recepcion de productos debe registrar la cantidad ingresada para mantener trazabilidad de abastecimiento. |
| RN-25 | Los reportes de ventas deben construirse a partir de transacciones confirmadas y no de operaciones incompletas o anuladas. |

## Observaciones de análisis

Las reglas anteriores buscan capturar politicas operativas del negocio y no decisiones de implementación. Su función es delimitar como debe comportarse el sistema respecto del negocio real, de manera que posteriormente sirvan como base para:

- Requerimientos Funcionales;
- Historias de Usuario;
- Casos de Uso;
- validaciones del sistema;
- diseño de datos y procesos.

## Conclusiones

El conjunto de reglas de negocio prioriza control de inventario, integridad de ventas, consistencia de precios y trazabilidad de movimientos. Estos cuatro ejes representan el comportamiento minimo esperable para un sistema orientado a la operación de la Tienda de la Esquina.
