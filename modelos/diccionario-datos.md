# Diccionario de datos

## Objetivo

Documentar de forma conceptual las entidades del sistema **Tienda de la Esquina**, sus atributos principales, obligatoriedad y propósito dentro del modelo, sin definir todavía un esquema físico, SQL o implementación técnica.

## Entidad: Rol
**Descripción:** Define la responsabilidad general y el alcance operativo de un usuario dentro del sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_rol | Identificador | Clave única del rol | Sí |
| nombre | Texto | Nombre del rol | Sí |
| descripcion | Texto | Explicación del alcance funcional | No |

## Entidad: Usuario
**Descripción:** Representa a la persona autorizada para operar el sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_usuario | Identificador | Clave única del usuario | Sí |
| id_rol | Referencia | Rol asignado al usuario | Sí |
| nombre_completo | Texto | Nombre de la persona | Sí |
| nombre_usuario | Texto | Credencial visible de acceso | Sí |
| contraseña | Texto protegido | Credencial de autenticación | Sí |
| correo | Texto | Correo de referencia | No |
| estado | Enumerado | Condición del usuario | Sí |
| fecha_creacion | Fecha y hora | Momento de alta del registro | Sí |

## Entidad: Permiso
**Descripción:** Define una capacidad específica dentro de un módulo del sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_permiso | Identificador | Clave única del permiso | Sí |
| nombre | Texto | Nombre del permiso | Sí |
| descripcion | Texto | Explicación funcional | No |
| modulo | Texto | Módulo al que aplica | Sí |

## Entidad: RolPermiso
**Descripción:** Resuelve la relación entre roles y permisos.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_rol_permiso | Identificador | Clave única del cruce | Sí |
| id_rol | Referencia | Rol relacionado | Sí |
| id_permiso | Referencia | Permiso relacionado | Sí |

## Entidad: Auditoría
**Descripción:** Registra acciones relevantes ejecutadas por usuarios sobre el sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_auditoria | Identificador | Clave única del evento | Sí |
| id_usuario | Referencia | Usuario responsable de la acción | Sí |
| accion | Texto | Acción ejecutada | Sí |
| modulo | Texto | Módulo donde ocurrió | Sí |
| tabla_afectada | Texto | Tabla conceptual afectada | Sí |
| registro_afectado | Texto | Identificador del registro afectado | Sí |
| descripcion | Texto | Detalle del evento | Sí |
| fecha_hora | Fecha y hora | Momento del evento | Sí |
| ip | Texto | Dirección IP o referencia de origen | No |

## Entidad: EstadoVenta
**Descripción:** Catálogo de estados válidos para una venta.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_estado_venta | Identificador | Clave única del estado | Sí |
| nombre | Texto | Nombre del estado | Sí |
| descripcion | Texto | Explicación del significado | No |

## Entidad: EstadoCompra
**Descripción:** Catálogo de estados válidos para una compra.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_estado_compra | Identificador | Clave única del estado | Sí |
| nombre | Texto | Nombre del estado | Sí |
| descripcion | Texto | Explicación del significado | No |

## Entidad: EstadoProducto
**Descripción:** Catálogo de estados válidos para un producto.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_estado_producto | Identificador | Clave única del estado | Sí |
| nombre | Texto | Nombre del estado | Sí |
| descripcion | Texto | Explicación del significado | No |

## Entidad: EstadoInventario
**Descripción:** Catálogo de estados del registro de inventario.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_estado_inventario | Identificador | Clave única del estado | Sí |
| nombre | Texto | Nombre del estado | Sí |
| descripcion | Texto | Explicación del significado | No |

## Entidad: MétodoPago
**Descripción:** Catálogo de métodos disponibles para registrar pagos.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_metodo_pago | Identificador | Clave única del método | Sí |
| nombre | Texto | Nombre del método | Sí |
| descripcion | Texto | Detalle operativo | No |

## Entidad: Cliente
**Descripción:** Comprador asociado a una venta cuando el proceso lo requiera.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_cliente | Identificador | Clave única del cliente | Sí |
| nombre_completo | Texto | Nombre del cliente | Sí |
| telefono | Texto | Número de contacto | No |
| direccion | Texto | Dirección de referencia | No |
| estado | Enumerado | Condición del cliente | Sí |

## Entidad: Proveedor
**Descripción:** Actor externo que abastece productos al negocio.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_proveedor | Identificador | Clave única del proveedor | Sí |
| nombre_proveedor | Texto | Nombre del proveedor | Sí |
| telefono | Texto | Contacto del proveedor | No |
| direccion | Texto | Dirección de referencia | No |
| estado | Enumerado | Condición del proveedor | Sí |

## Entidad: Categoría
**Descripción:** Clasificación principal del producto.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_categoria | Identificador | Clave única de la categoría | Sí |
| nombre | Texto | Nombre de la categoría | Sí |
| descripcion | Texto | Explicación de la categoría | No |
| estado | Enumerado | Condición de uso | Sí |

## Entidad: Marca
**Descripción:** Catálogo de marcas asociadas a los productos.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_marca | Identificador | Clave única de la marca | Sí |
| nombre | Texto | Nombre de la marca | Sí |
| descripcion | Texto | Descripción de referencia | No |

## Entidad: UnidadMedida
**Descripción:** Catálogo de unidades de medida o control del producto.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_unidad_medida | Identificador | Clave única de la unidad | Sí |
| nombre | Texto | Nombre de la unidad | Sí |
| abreviatura | Texto | Forma abreviada | Sí |
| descripcion | Texto | Explicación de uso | No |

## Entidad: Producto
**Descripción:** Maestro comercial del sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_producto | Identificador | Clave única del producto | Sí |
| id_categoria | Referencia | Categoría asociada | Sí |
| id_marca | Referencia | Marca asociada | Sí |
| id_unidad_medida | Referencia | Unidad de medida asociada | Sí |
| id_estado_producto | Referencia | Estado actual del producto | Sí |
| nombre | Texto | Nombre comercial | Sí |
| descripcion | Texto | Detalle del producto | No |
| codigo_producto | Texto | Código interno o de control | No |
| precio_venta | Decimal | Precio vigente | Sí |
| fecha_vencimiento | Fecha | Fecha de vencimiento si aplica | No |

## Entidad: Inventario
**Descripción:** Estado consolidado de existencias por producto.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_inventario | Identificador | Clave única del registro | Sí |
| id_producto | Referencia | Producto controlado | Sí |
| id_estado_inventario | Referencia | Estado del inventario | Sí |
| stock_actual | Entero | Existencia actual disponible | Sí |
| stock_minimo | Entero | Nivel mínimo de referencia | Sí |
| stock_maximo | Entero | Nivel máximo conceptual | No |
| ultima_actualizacion | Fecha y hora | Momento de actualización más reciente | Sí |

## Entidad: MovimientoInventario
**Descripción:** Historial de entradas, salidas y ajustes del inventario.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_movimiento | Identificador | Clave única del movimiento | Sí |
| id_producto | Referencia | Producto afectado | Sí |
| id_usuario | Referencia | Usuario responsable | Sí |
| id_venta | Referencia | Venta asociada si corresponde | No |
| id_compra | Referencia | Compra asociada si corresponde | No |
| tipo_movimiento | Enumerado | Entrada, salida o ajuste | Sí |
| cantidad | Entero | Cantidad afectada | Sí |
| stock_anterior | Entero | Existencia antes del cambio | Sí |
| stock_resultante | Entero | Existencia después del cambio | Sí |
| fecha_movimiento | Fecha y hora | Momento del movimiento | Sí |
| motivo | Texto | Justificación operativa | No |

## Entidad: Venta
**Descripción:** Cabecera de la transacción comercial.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_venta | Identificador | Clave única de la venta | Sí |
| id_usuario | Referencia | Usuario que registra la venta | Sí |
| id_cliente | Referencia | Cliente asociado | No |
| id_estado_venta | Referencia | Estado actual de la venta | Sí |
| id_cierre_diario | Referencia | Cierre diario al que se integra | No |
| fecha_hora | Fecha y hora | Momento de la venta | Sí |
| subtotal | Decimal | Subtotal antes de ajustes | Sí |
| descuento | Decimal | Descuento aplicado | No |
| total_venta | Decimal | Total final de la venta | Sí |
| observaciones | Texto | Notas operativas | No |

## Entidad: DetalleVenta
**Descripción:** Desglose de productos incluidos en una venta.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_detalle_venta | Identificador | Clave única del detalle | Sí |
| id_venta | Referencia | Venta a la que pertenece | Sí |
| id_producto | Referencia | Producto vendido | Sí |
| cantidad | Entero | Cantidad vendida | Sí |
| precio_unitario | Decimal | Precio unitario al momento de la venta | Sí |
| subtotal | Decimal | Resultado de cantidad por precio | Sí |

## Entidad: PagoVenta
**Descripción:** Registro de pagos asociados a una venta.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_pago_venta | Identificador | Clave única del pago | Sí |
| id_venta | Referencia | Venta asociada | Sí |
| id_metodo_pago | Referencia | Método de pago utilizado | Sí |
| monto | Decimal | Monto pagado | Sí |
| referencia | Texto | Referencia de comprobación | No |
| fecha_pago | Fecha y hora | Momento del pago | Sí |

## Entidad: Compra
**Descripción:** Cabecera de la transacción de abastecimiento.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_compra | Identificador | Clave única de la compra | Sí |
| id_usuario | Referencia | Usuario que registra la compra | Sí |
| id_proveedor | Referencia | Proveedor asociado | Sí |
| id_estado_compra | Referencia | Estado actual de la compra | Sí |
| fecha_compra | Fecha | Momento de la compra | Sí |
| subtotal | Decimal | Subtotal de la compra | Sí |
| total_compra | Decimal | Total final consolidado | Sí |
| observaciones | Texto | Notas operativas | No |

## Entidad: DetalleCompra
**Descripción:** Desglose de productos incluidos en una compra.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_detalle_compra | Identificador | Clave única del detalle | Sí |
| id_compra | Referencia | Compra a la que pertenece | Sí |
| id_producto | Referencia | Producto adquirido | Sí |
| cantidad | Entero | Cantidad comprada | Sí |
| costo_unitario | Decimal | Costo unitario del producto | Sí |
| subtotal | Decimal | Resultado de cantidad por costo unitario | Sí |

## Entidad: CierreDiario
**Descripción:** Consolidado administrativo de la jornada.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_cierre_diario | Identificador | Clave única del cierre | Sí |
| id_usuario | Referencia | Usuario responsable del cierre | Sí |
| fecha | Fecha | Día consolidado | Sí |
| total_ventas | Decimal | Total de ventas registradas | Sí |
| total_efectivo | Decimal | Total pagado en efectivo | Sí |
| total_tarjeta | Decimal | Total pagado con tarjeta | No |
| total_general | Decimal | Total consolidado del cierre | Sí |
| observaciones | Texto | Incidencias o notas | No |

## Entidad: DetalleCierreDiario
**Descripción:** Relaciona el cierre con las ventas integradas en la jornada.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_detalle_cierre | Identificador | Clave única del detalle | Sí |
| id_cierre_diario | Referencia | Cierre relacionado | Sí |
| id_venta | Referencia | Venta incluida en el cierre | Sí |
| monto | Decimal | Monto asociado a la venta dentro del cierre | Sí |
| metodo_pago | Texto | Método de pago registrado para consolidación | Sí |

## Entidad: Reporte
**Descripción:** Registro conceptual de salidas informativas del sistema.

| Atributo | Tipo conceptual | Descripción | Obligatorio |
|---|---|---|---|
| id_reporte | Identificador | Clave única del reporte | Sí |
| id_usuario | Referencia | Usuario que genera o solicita el reporte | Sí |
| tipo_reporte | Enumerado | Tipo de reporte emitido | Sí |
| fecha_generacion | Fecha y hora | Momento de generación | Sí |
| parametros | Texto estructurado | Filtros o criterios aplicados | No |
| observaciones | Texto | Comentarios adicionales | No |
