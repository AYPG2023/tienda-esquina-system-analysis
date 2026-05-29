# 06. Historias de usuario

## Historias de usuario

### HU-01
Como administrador  
Quiero registrar nuevos productos  
Para mantener actualizado el catálogo de la tienda  
**Prioridad:** Must  
**Criterio de aceptación:** El producto debe guardarse con nombre, precio y unidad de control válidos.  
**Estimación inicial:** 3 puntos

### HU-02
Como empleado  
Quiero buscar productos rápidamente  
Para atender al cliente sin demoras  
**Prioridad:** Must  
**Criterio de aceptación:** La búsqueda debe localizar productos por nombre o identificador.  
**Estimación inicial:** 2 puntos

### HU-03
Como empleado  
Quiero consultar la existencia disponible de un producto  
Para confirmar si puede venderse  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema debe mostrar la cantidad disponible antes de confirmar la venta.  
**Estimación inicial:** 2 puntos

### HU-04
Como empleado  
Quiero registrar una venta con varios productos  
Para completar una transacción real de manera ordenada  
**Prioridad:** Must  
**Criterio de aceptación:** La venta debe permitir agregar varios productos y cantidades en una sola operación.  
**Estimación inicial:** 5 puntos

### HU-05
Como empleado  
Quiero que el total de la venta se calcule automáticamente  
Para evitar errores manuales en el cobro  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema debe actualizar subtotal y total según los productos agregados.  
**Estimación inicial:** 3 puntos

### HU-06
Como administrador  
Quiero registrar entradas de inventario  
Para reflejar la reposición de productos  
**Prioridad:** Must  
**Criterio de aceptación:** La entrada debe aumentar la existencia del producto correspondiente.  
**Estimación inicial:** 3 puntos

### HU-07
Como administrador  
Quiero actualizar precios de productos  
Para mantener valores de venta correctos  
**Prioridad:** Must  
**Criterio de aceptación:** Solo usuarios autorizados deben poder cambiar el precio.  
**Estimación inicial:** 2 puntos

### HU-08
Como administrador  
Quiero ver el historial de ventas  
Para revisar las transacciones realizadas  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema debe listar ventas registradas con fecha, hora y total.  
**Estimación inicial:** 3 puntos

### HU-09
Como administrador  
Quiero consultar el detalle de una venta  
Para verificar los productos vendidos en una transacción  
**Prioridad:** Must  
**Criterio de aceptación:** La venta selecciónada debe mostrar productos, cantidades y total.  
**Estimación inicial:** 2 puntos

### HU-10
Como sistema  
Quiero bloquear la venta de productos sin stock  
Para evitar inconsistencias de inventario  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema no debe confirmar ventas cuando la existencia sea insuficiente.  
**Estimación inicial:** 3 puntos

### HU-11
Como sistema  
Quiero descontar inventario después de una venta  
Para mantener actualizada la disponibilidad de productos  
**Prioridad:** Must  
**Criterio de aceptación:** La existencia debe disminuir automáticamente al confirmar la venta.  
**Estimación inicial:** 3 puntos

### HU-12
Como administrador  
Quiero listar productos agotados  
Para planificar reposiciones con prioridad  
**Prioridad:** Should  
**Criterio de aceptación:** El sistema debe mostrar productos con existencia igual a cero.  
**Estimación inicial:** 2 puntos

### HU-13
Como administrador  
Quiero registrar proveedores  
Para vincular el abastecimiento con el origen de los productos  
**Prioridad:** Should  
**Criterio de aceptación:** Debe poder registrarse y consultarse información básica de proveedores.  
**Estimación inicial:** 3 puntos

### HU-14
Como administrador  
Quiero registrar productos con fecha de vencimiento  
Para controlar productos sensibles al tiempo  
**Prioridad:** Should  
**Criterio de aceptación:** El sistema debe permitir asociar fecha de vencimiento cuando aplique.  
**Estimación inicial:** 3 puntos

### HU-15
Como sistema  
Quiero identificar productos vencidos  
Para impedir su venta  
**Prioridad:** Must  
**Criterio de aceptación:** Un producto vencido no debe aparecer como disponible para venta.  
**Estimación inicial:** 5 puntos

### HU-16
Como administrador  
Quiero registrar ajustes de inventario con motivo  
Para corregir diferencias de forma controlada  
**Prioridad:** Should  
**Criterio de aceptación:** Todo ajuste debe registrar cantidad y justificación.  
**Estimación inicial:** 3 puntos

### HU-17
Como administrador  
Quiero consultar ventas por fecha  
Para revisar el desempeño diario o por periodo  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema debe filtrar ventas por fecha especifica o rango.  
**Estimación inicial:** 3 puntos

### HU-18
Como administrador  
Quiero ver un resumen de ventas del día  
Para conocer rápidamente el resultado operativo diario  
**Prioridad:** Must  
**Criterio de aceptación:** El sistema debe mostrar total vendido y cantidad de transacciones del día.  
**Estimación inicial:** 2 puntos

### HU-19
Como administrador  
Quiero identificar productos de mayor rotación  
Para apoyar decisiones de compra y reposición  
**Prioridad:** Could  
**Criterio de aceptación:** Debe existir una consulta basada en historial de ventas.  
**Estimación inicial:** 5 puntos

### HU-20
Como administrador  
Quiero autenticar usuarios por rol  
Para proteger funciones sensibles del negocio  
**Prioridad:** Should  
**Criterio de aceptación:** El acceso debe diferenciar al menos funciones administrativas y operativas.  
**Estimación inicial:** 5 puntos

## Conclusiones

Las Historias de Usuario priorizan el valor operativo inmediato del negocio: vender con control, conocer existencias y disponer de información administrativa básica. La mayoria de historias catalogadas como `Must` se relacionan con la continuidad diaria de la tienda; las `Should` y `Could` refinan control y capacidad de gestión.
