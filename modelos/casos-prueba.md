# Casos de prueba

## CP-01
**ID:** CP-01  
**Nombre:** Validar acceso desde login  
**Objetivo:** Confirmar que el acceso inicial este documentado de forma coherente.  
**Módulo:** Autenticación y usuarios  
**Precondiciones:** Mockup de login disponible y CU-01 documentado.  
**Pasos:** 1. Revisar `01-login.html`. 2. Verificar campos de usuario y contraseña. 3. Verificar accion principal de ingreso.  
**Resultado esperado:** La pantalla representa el acceso inicial y enlaza al dashboard.  
**Resultado obtenido:** Conforme a mockup.  
**Estado:** Aprobado  
**Observaciones:** Validación visual sin autenticación real.

## CP-02
**ID:** CP-02  
**Nombre:** Validar restriccion conceptual por rol  
**Objetivo:** Verificar que la documentación contemple control por roles.  
**Módulo:** Autenticación y usuarios  
**Precondiciones:** RF-26, RF-27 y CU-01 documentados.  
**Pasos:** 1. Revisar requerimientos. 2. Revisar Caso de Uso CU-01. 3. Revisar arquitectura del módulo.  
**Resultado esperado:** Existe trazabilidad clara entre acceso, roles y restricciones.  
**Resultado obtenido:** Conforme a documentación.  
**Estado:** Aprobado  
**Observaciones:** Validación documental.

## CP-03
**ID:** CP-03  
**Nombre:** Registrar producto con datos válidos  
**Objetivo:** Verificar cobertura del registro de productos.  
**Módulo:** Gestión de productos  
**Precondiciones:** RF-01 y CU-02 definidos.  
**Pasos:** 1. Revisar mockup de productos. 2. Verificar campos obligatorios. 3. Revisar reglas asociadas.  
**Resultado esperado:** El flujo de registro de producto queda correctamente representado.  
**Resultado obtenido:** Conforme a documentación.  
**Estado:** Aprobado  
**Observaciones:** Cubierto por mockup y Caso de Uso.

## CP-04
**ID:** CP-04  
**Nombre:** Rechazar producto con precio no válido  
**Objetivo:** Verificar regla de precio positivo.  
**Módulo:** Gestión de productos  
**Precondiciones:** RN-04 y RF-17 documentados.  
**Pasos:** 1. Revisar reglas de negocio. 2. Revisar CU-02. 3. Confirmar presencia de validación.  
**Resultado esperado:** El sistema conceptual no debe aceptar precio menor o igual a cero.  
**Resultado obtenido:** Regla y requerimiento presentes.  
**Estado:** Aprobado  
**Observaciones:** Validación de consistencia entre artefactos.

## CP-05
**ID:** CP-05  
**Nombre:** Editar producto existente  
**Objetivo:** Confirmar soporte para edición de catálogo.  
**Módulo:** Gestión de productos  
**Precondiciones:** CU-03 y RF-04 definidos.  
**Pasos:** 1. Revisar CU-03. 2. Revisar mockup de productos. 3. Verificar trazabilidad.  
**Resultado esperado:** Existe cobertura suficiente para edición de producto.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Vinculado a RN-12 y RN-19.

## CP-06
**ID:** CP-06  
**Nombre:** Registrar venta con múltiples productos  
**Objetivo:** Verificar cobertura del flujo principal de ventas.  
**Módulo:** Gestión de ventas  
**Precondiciones:** RF-09 y CU-09 documentados.  
**Pasos:** 1. Revisar `03-registrar-venta.html`. 2. Revisar tabla de productos. 3. Revisar CU-09.  
**Resultado esperado:** La venta admite varios productos y resumen total.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Mockup y Caso de Uso consistentes.

## CP-07
**ID:** CP-07  
**Nombre:** Validar stock antes de vender  
**Objetivo:** Confirmar que la regla de disponibilidad está contemplada.  
**Módulo:** Gestión de ventas  
**Precondiciones:** RF-11 y RN-01 definidos.  
**Pasos:** 1. Revisar CU-09. 2. Revisar actividad de venta. 3. Revisar matriz de trazabilidad.  
**Resultado esperado:** El flujo contempla validación de stock previo a confirmar.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Cubre una regla crítica del negocio.

## CP-08
**ID:** CP-08  
**Nombre:** Calcular total de venta  
**Objetivo:** Verificar representación del cálculo de subtotales y total.  
**Módulo:** Gestión de ventas  
**Precondiciones:** RF-10 y RN-03 definidos.  
**Pasos:** 1. Revisar mockup de ventas. 2. Revisar actividad de proceso de venta.  
**Resultado esperado:** El total se muestra como cálculo automatico conceptual.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Validación visual y documental.

## CP-09
**ID:** CP-09  
**Nombre:** Descontar inventario tras venta  
**Objetivo:** Verificar impacto de la venta sobre inventario.  
**Módulo:** Gestión de ventas / Inventario  
**Precondiciones:** RF-12, RN-05 y CU-09 documentados.  
**Pasos:** 1. Revisar CU-09. 2. Revisar arquitectura y modelo ER.  
**Resultado esperado:** La venta debe afectar inventario y movimientos.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Trazabilidad confirmada.

## CP-10
**ID:** CP-10  
**Nombre:** Consultar historial de ventas  
**Objetivo:** Verificar cobertura de consultas históricas.  
**Módulo:** Gestión de ventas  
**Precondiciones:** RF-14, RF-24 y CU-10 definidos.  
**Pasos:** 1. Revisar CU-10. 2. Revisar reportes y mockups.  
**Resultado esperado:** Existe documentación para consultar ventas por fecha.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Soporta control administrativo.

## CP-11
**ID:** CP-11  
**Nombre:** Registrar proveedor  
**Objetivo:** Confirmar el flujo de proveedores.  
**Módulo:** Gestión de proveedores  
**Precondiciones:** RF-22 y CU-06 definidos.  
**Pasos:** 1. Revisar `07-proveedores.html`. 2. Revisar CU-06.  
**Resultado esperado:** La gestión de proveedores está visual y funcionalmente documentada.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Relacionado con compras.

## CP-12
**ID:** CP-12  
**Nombre:** Registrar compra a proveedor  
**Objetivo:** Verificar cobertura de abastecimiento.  
**Módulo:** Gestión de compras  
**Precondiciones:** RF-07, RF-08 y CU-07 definidos.  
**Pasos:** 1. Revisar mockup de compras. 2. Revisar CU-07. 3. Revisar detalle de compra en modelo ER.  
**Resultado esperado:** La compra se representa con proveedor, productos y efecto en stock.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Integrado con inventario.

## CP-13
**ID:** CP-13  
**Nombre:** Actualizar stock mediante ajuste  
**Objetivo:** Verificar cobertura del ajuste controlado de inventario.  
**Módulo:** Gestión de inventario  
**Precondiciones:** RF-21, RN-22 y CU-08 documentados.  
**Pasos:** 1. Revisar CU-08. 2. Revisar entidad MovimientoInventario.  
**Resultado esperado:** El ajuste se documenta con motivo y sin confundirlo con compra o venta.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Riesgo reducido por trazabilidad.

## CP-14
**ID:** CP-14  
**Nombre:** Consultar productos agotados  
**Objetivo:** Verificar capacidad de detectar faltantes.  
**Módulo:** Gestión de inventario / Reportes  
**Precondiciones:** RF-20 y HU-12 definidos.  
**Pasos:** 1. Revisar dashboard, inventario y reportes. 2. Revisar CU-11 y CU-14.  
**Resultado esperado:** Existen vistas documentadas para productos agotados.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Visible en varias pantallas.

## CP-15
**ID:** CP-15  
**Nombre:** Consultar productos vencidos  
**Objetivo:** Verificar cobertura del control de vencimientos.  
**Módulo:** Gestión de inventario  
**Precondiciones:** RF-18, RF-19 y CU-15 definidos.  
**Pasos:** 1. Revisar inventario. 2. Revisar CU-15.  
**Resultado esperado:** La documentación contempla identificación de productos vencidos.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Relacionado con RN-10 y RN-11.

## CP-16
**ID:** CP-16  
**Nombre:** Gestionar clientes  
**Objetivo:** Verificar que el módulo de clientes este documentado.  
**Módulo:** Gestión de clientes  
**Precondiciones:** CU-13 definido y mockup disponible.  
**Pasos:** 1. Revisar `06-clientes.html`. 2. Revisar CU-13.  
**Resultado esperado:** El flujo de registro y consulta de clientes está representado.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Incluye historial simulado.

## CP-17
**ID:** CP-17  
**Nombre:** Consultar reportes administrativos  
**Objetivo:** Validar cobertura de reportes del sistema.  
**Módulo:** Reportes  
**Precondiciones:** RF-23, RF-24 y RF-25 definidos.  
**Pasos:** 1. Revisar `09-reportes.html`. 2. Revisar CU-11.  
**Resultado esperado:** La pantalla representa ventas, agotados, vencidos e ingresos.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Alineado con analítica administrativa.

## CP-18
**ID:** CP-18  
**Nombre:** Generar cierre diario  
**Objetivo:** Verificar el flujo de consolidación de jornada.  
**Módulo:** Cierre diario  
**Precondiciones:** RF-25 y CU-12 documentados.  
**Pasos:** 1. Revisar `10-cierre-diario.html`. 2. Revisar actividad de cierre. 3. Revisar entidad CierreDiario.  
**Resultado esperado:** La documentación representa consolidación de ventas, pagos y observaciones.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Proceso crítico de control.

## CP-19
**ID:** CP-19  
**Nombre:** Verificar trazabilidad entre requerimientos y arquitectura  
**Objetivo:** Confirmar que los módulos de arquitectura responden a RF documentados.  
**Módulo:** Arquitectura  
**Precondiciones:** Matriz de trazabilidad y arquitectura actualizadas.  
**Pasos:** 1. Revisar `docs/11-arquitectura.md`. 2. Revisar `modelos/matriz-trazabilidad.md`.  
**Resultado esperado:** Los módulos mantienen vinculación con requerimientos, reglas y entidades.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Prueba de consistencia documental.

## CP-20
**ID:** CP-20  
**Nombre:** Verificar consistencia de mockups con Casos de Uso  
**Objetivo:** Confirmar correspondencia visual-funcional del prototipado.  
**Módulo:** Mockups  
**Precondiciones:** `docs/12-mockups.md` actualizado y pantallas disponibles.  
**Pasos:** 1. Revisar tabla de pantallas. 2. Revisar enlaces HTML. 3. Revisar relación con Casos de Uso.  
**Resultado esperado:** Las pantallas representan Casos de Uso y requerimientos sin contradicciones.  
**Resultado obtenido:** Conforme.  
**Estado:** Aprobado  
**Observaciones:** Cierre visual del proyecto.
