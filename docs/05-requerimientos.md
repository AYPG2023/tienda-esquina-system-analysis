# 05. Requerimientos

## Requerimientos funcionales

### RF-01
**Descripción:** El sistema debe permitir registrar productos con nombre, categoria, precio y unidad de control.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-02
**Descripción:** El sistema debe permitir consultar el listado de productos registrados.  
**Prioridad:** Alta  
**Actor:** Administrador, Empleado

### RF-03
**Descripción:** El sistema debe permitir buscar productos por nombre o identificador.  
**Prioridad:** Alta  
**Actor:** Administrador, Empleado

### RF-04
**Descripción:** El sistema debe permitir actualizar la información de un producto existente.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-05
**Descripción:** El sistema debe permitir inactivar productos sin eliminar su historial.  
**Prioridad:** Media  
**Actor:** Administrador

### RF-06
**Descripción:** El sistema debe mostrar la existencia disponible de cada producto.  
**Prioridad:** Alta  
**Actor:** Administrador, Empleado

### RF-07
**Descripción:** El sistema debe permitir registrar entradas de inventario por compra o reposición.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-08
**Descripción:** El sistema debe actualizar automaticamente el inventario después de registrar una entrada.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-09
**Descripción:** El sistema debe permitir registrar ventas con uno o varios productos.  
**Prioridad:** Alta  
**Actor:** Empleado, Administrador

### RF-10
**Descripción:** El sistema debe calcular automaticamente subtotal y total de cada venta.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-11
**Descripción:** El sistema debe validar disponibilidad de inventario antes de confirmar una venta.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-12
**Descripción:** El sistema debe descontar automaticamente del inventario los productos vendidos.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-13
**Descripción:** El sistema debe registrar fecha y hora de cada venta realizada.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-14
**Descripción:** El sistema debe permitir consultar el historial de ventas realizadas.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-15
**Descripción:** El sistema debe permitir visualizar el detalle de productos incluidos en cada venta.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-16
**Descripción:** El sistema debe permitir modificar precios de productos activos.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-17
**Descripción:** El sistema debe impedir registrar productos con precio igual o menor que cero.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-18
**Descripción:** El sistema debe permitir registrar fecha de vencimiento para productos que lo requieran.  
**Prioridad:** Media  
**Actor:** Administrador

### RF-19
**Descripción:** El sistema debe identificar productos vencidos para bloquear su venta.  
**Prioridad:** Alta  
**Actor:** Sistema

### RF-20
**Descripción:** El sistema debe permitir listar productos agotados.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-21
**Descripción:** El sistema debe permitir registrar ajustes de inventario con motivo o justificación.  
**Prioridad:** Media  
**Actor:** Administrador

### RF-22
**Descripción:** El sistema debe permitir registrar proveedores asociados a las reposiciones.  
**Prioridad:** Media  
**Actor:** Administrador

### RF-23
**Descripción:** El sistema debe permitir consultar productos de mayor rotación.  
**Prioridad:** Media  
**Actor:** Administrador

### RF-24
**Descripción:** El sistema debe permitir consultar ventas por fecha o rango de fechas.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-25
**Descripción:** El sistema debe generar un resumen de ventas del día.  
**Prioridad:** Alta  
**Actor:** Administrador

### RF-26
**Descripción:** El sistema debe permitir autenticar usuarios segun su rol operativo.  
**Prioridad:** Media  
**Actor:** Administrador, Empleado

### RF-27
**Descripción:** El sistema debe restringir la modificacion de productos y precios a usuarios autorizados.  
**Prioridad:** Alta  
**Actor:** Sistema

## Requerimientos no funcionales

### RNF-01
**Descripción:** El sistema debe ofrecer una interfaz clara y facil de aprender para usuarios con experiencia técnica limitada.  
**Categoria:** Usabilidad

### RNF-02
**Descripción:** El tiempo de respuesta para consultar productos o existencias no debe percibirse como lento en operación normal.  
**Categoria:** Rendimiento

### RNF-03
**Descripción:** El sistema debe preservar la integridad de los datos ante errores de captura o interrupciones operativas.  
**Categoria:** Confiabilidad

### RNF-04
**Descripción:** El acceso a funciones administrativas debe requerir control de autenticación.  
**Categoria:** Seguridad

### RNF-05
**Descripción:** El sistema debe mantener consistencia entre ventas registradas y existencias de inventario.  
**Categoria:** Integridad

### RNF-06
**Descripción:** La información registrada debe poder consultarse posteriormente para fines de control y auditoria operativa.  
**Categoria:** Trazabilidad

### RNF-07
**Descripción:** La estructura del sistema debe permitir incorporar nuevos requerimientos sin rehacer completamente el análisis funcional.  
**Categoria:** Escalabilidad

### RNF-08
**Descripción:** El sistema debe estar disponible durante el horario habitual de operación de la tienda.  
**Categoria:** Disponibilidad

### RNF-09
**Descripción:** Los mensajes de validación y error deben ser comprensibles para usuarios no tecnicos.  
**Categoria:** Usabilidad

### RNF-10
**Descripción:** La información del sistema debe mantenerse organizada de forma que facilite respaldo y recuperacion futura.  
**Categoria:** Mantenibilidad

## Conclusiones

Los requerimientos definidos priorizan el control de productos, inventario y ventas, con enfasis en trazabilidad y operación simple. Los funcionales responden directamente a procesos del negocio y los no funcionales aseguran condiciones minimas de calidad para que el sistema sea útil en un entorno comercial pequeño.
