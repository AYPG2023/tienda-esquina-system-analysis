# 08. Casos de uso

## Objetivo del documento

Documentar las interacciones funcionales entre los actores del negocio y el sistema de la Tienda de la Esquina, de manera que sirvan como base para diagramas UML, modelo de datos, criterios de validación y desarrollo posterior.

## Actores identificados

- **Administrador:** responsable de control operativo, configuracion y supervision.
- **Empleado:** usuario operativo que ejecuta ventas y consultas.
- **Proveedor:** actor externo vinculado a compras y abastecimiento.
- **Cliente:** actor de negocio asociado a la transacción comercial.
- **Sistema:** componente lógico que ejecuta validaciones y actualizaciones automaticas.

## Catálogo de Casos de Uso

### CU-01
**ID:** CU-01  
**Nombre:** Iniciar sesión  
**Objetivo:** Permitir el acceso al sistema segun el rol autorizado.  
**Actor principal:** Administrador o Empleado  
**Actores secundarios:** Sistema  
**Descripción:** El usuario ingresa sus credenciales para acceder a las funciones que le correspondan.  
**Precondiciones:** El usuario debe estar registrado y activo.  
**Postcondiciones:** El sistema habilita el acceso segun el rol del usuario.  
**Flujo principal:**  
1. El actor solicita acceso al sistema.  
2. El sistema muestra formulario de autenticación.  
3. El actor ingresa usuario y contraseña.  
4. El sistema valida credenciales.  
5. El sistema identifica el rol del usuario.  
6. El sistema concede acceso al módulo correspondiente.  
**Flujos alternos:**  
- A1. Credenciales invalidas: el sistema rechaza el acceso y muestra mensaje de error.  
- A2. Usuario inactivo: el sistema bloquea el acceso.  
**Reglas relacionadas:** RN-19, RN-23  
**Requerimientos relacionados:** RF-26, RF-27, RNF-04  

### CU-02
**ID:** CU-02  
**Nombre:** Registrar producto  
**Objetivo:** Incorporar un nuevo producto al catálogo operativo de la tienda.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite registrar datos básicos de un producto para que pueda gestionarse y venderse posteriormente.  
**Precondiciones:** El administrador debe haber iniciado sesión.  
**Postcondiciones:** El producto queda registrado y disponible para operaciones posteriores.  
**Flujo principal:**  
1. El administrador accede al módulo de productos.  
2. El sistema muestra formulario de registro.  
3. El administrador ingresa nombre, categoria, precio y unidad de control.  
4. El sistema valida que el producto no este duplicado y que el precio sea valido.  
5. El administrador confirma el registro.  
6. El sistema guarda el producto.  
**Flujos alternos:**  
- A1. Precio invalido: el sistema rechaza el registro.  
- A2. Producto duplicado: el sistema informa conflicto y no registra.  
**Reglas relacionadas:** RN-04, RN-07, RN-08, RN-20  
**Requerimientos relacionados:** RF-01, RF-17  

### CU-03
**ID:** CU-03  
**Nombre:** Editar producto  
**Objetivo:** Actualizar información de un producto existente.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite modificar datos de productos activos para mantener la información vigente.  
**Precondiciones:** El producto debe existir y el actor debe estar autenticado.  
**Postcondiciones:** La información del producto queda actualizada.  
**Flujo principal:**  
1. El administrador busca el producto.  
2. El sistema muestra la información actual.  
3. El administrador modifica los campos permitidos.  
4. El sistema valida consistencia de los datos.  
5. El administrador confirma los cambios.  
6. El sistema actualiza el producto.  
**Flujos alternos:**  
- A1. Producto inexistente: el sistema informa que no puede editarse.  
- A2. Datos invalidos: el sistema solicita correccion.  
**Reglas relacionadas:** RN-12, RN-19  
**Requerimientos relacionados:** RF-04, RF-16, RF-27  

### CU-04
**ID:** CU-04  
**Nombre:** Inactivar producto  
**Objetivo:** Retirar un producto de las operaciones sin perder su historial.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Sustituye la eliminacion física del producto por una inactivacion controlada.  
**Precondiciones:** El producto debe existir.  
**Postcondiciones:** El producto queda inactivo y no disponible para nuevas ventas.  
**Flujo principal:**  
1. El administrador selecciona el producto.  
2. El sistema muestra opcion de inactivar.  
3. El administrador confirma la accion.  
4. El sistema cambia el estado del producto a inactivo.  
**Flujos alternos:**  
- A1. Producto con información incompleta: el sistema permite cancelar la accion.  
**Reglas relacionadas:** RN-15, RN-23  
**Requerimientos relacionados:** RF-05  

### CU-05
**ID:** CU-05  
**Nombre:** Gestionar categorías  
**Objetivo:** Mantener organizadas las clasificaciones de productos.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite crear, consultar y actualizar categorías utilizadas por el catálogo.  
**Precondiciones:** El administrador debe haber iniciado sesión.  
**Postcondiciones:** Las categorías quedan disponibles para asociarlas a productos.  
**Flujo principal:**  
1. El administrador accede al módulo de categorías.  
2. El sistema muestra las categorías registradas.  
3. El administrador registra o modifica una categoria.  
4. El sistema valida unicidad y consistencia del nombre.  
5. El sistema guarda la información.  
**Flujos alternos:**  
- A1. Categoria duplicada: el sistema rechaza el registro.  
**Reglas relacionadas:** RN-07, RN-08  
**Requerimientos relacionados:** RF-01, RF-04  

### CU-06
**ID:** CU-06  
**Nombre:** Registrar proveedor  
**Objetivo:** Mantener el control de los actores externos que abastecen la tienda.  
**Actor principal:** Administrador  
**Actores secundarios:** Proveedor, Sistema  
**Descripción:** Registra información básica del proveedor para asociarla a compras o reposiciones.  
**Precondiciones:** El administrador debe estar autenticado.  
**Postcondiciones:** El proveedor queda registrado en el catálogo de abastecimiento.  
**Flujo principal:**  
1. El administrador accede al módulo de proveedores.  
2. El sistema muestra formulario de registro.  
3. El administrador ingresa datos del proveedor.  
4. El sistema valida la información.  
5. El sistema registra el proveedor.  
**Flujos alternos:**  
- A1. Datos incompletos: el sistema solicita completar la información.  
**Reglas relacionadas:** RN-24  
**Requerimientos relacionados:** RF-22  

### CU-07
**ID:** CU-07  
**Nombre:** Registrar compra  
**Objetivo:** Registrar el ingreso de productos adquiridos a proveedores.  
**Actor principal:** Administrador  
**Actores secundarios:** Proveedor, Sistema  
**Descripción:** Documenta una compra y sus productos para incrementar el inventario de la tienda.  
**Precondiciones:** Debe existir al menos un proveedor y productos registrados.  
**Postcondiciones:** La compra queda registrada y el inventario se incrementa.  
**Flujo principal:**  
1. El administrador inicia el registro de compra.  
2. El sistema solicita proveedor, fecha y detalle de productos.  
3. El administrador selecciona proveedor y agrega productos con cantidades.  
4. El sistema valida cantidades y productos.  
5. El administrador confirma la compra.  
6. El sistema registra la compra.  
7. El sistema actualiza inventario.  
**Flujos alternos:**  
- A1. Producto inexistente: el sistema impide continuar hasta corregir.  
- A2. Cantidad invalida: el sistema rechaza el detalle.  
**Reglas relacionadas:** RN-09, RN-16, RN-24  
**Requerimientos relacionados:** RF-07, RF-08, RF-22  

### CU-08
**ID:** CU-08  
**Nombre:** Actualizar stock  
**Objetivo:** Mantener la existencia de productos conforme a entradas, salidas y ajustes.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite ejecutar ajustes controlados sobre el inventario cuando exista diferencia operativa.  
**Precondiciones:** El producto debe existir y el actor debe estar autenticado.  
**Postcondiciones:** La existencia del producto queda ajustada con trazabilidad.  
**Flujo principal:**  
1. El administrador selecciona un producto.  
2. El sistema muestra su existencia actual.  
3. El administrador registra un ajuste con motivo.  
4. El sistema valida que la operación no genere cantidades invalidas.  
5. El sistema actualiza el stock y guarda el movimiento.  
**Flujos alternos:**  
- A1. Ajuste no justificado: el sistema rechaza la operación.  
- A2. Cantidad resultante negativa: el sistema bloquea la actualización.  
**Reglas relacionadas:** RN-06, RN-17, RN-22  
**Requerimientos relacionados:** RF-21  

### CU-09
**ID:** CU-09  
**Nombre:** Registrar venta  
**Objetivo:** Formalizar una transacción de venta al cliente.  
**Actor principal:** Empleado  
**Actores secundarios:** Cliente, Sistema  
**Descripción:** Permite seleccionar productos, validar stock, calcular total y confirmar la venta.  
**Precondiciones:** El empleado debe estar autenticado y deben existir productos activos.  
**Postcondiciones:** La venta queda registrada, el inventario se actualiza y se genera el comprobante.  
**Flujo principal:**  
1. El empleado inicia una nueva venta.  
2. El sistema muestra la interfaz de registro de venta.  
3. El empleado busca y selecciona productos.  
4. El sistema valida existencia disponible.  
5. El empleado define cantidades.  
6. El sistema calcula subtotales y total.  
7. El empleado confirma la venta.  
8. El sistema registra fecha y hora.  
9. El sistema descuenta inventario.  
10. El sistema genera comprobante.  
**Flujos alternos:**  
- A1. Producto sin stock: el sistema impide agregarlo.  
- A2. Cantidad solicitada mayor al stock: el sistema solicita correccion.  
- A3. Venta cancelada: el sistema descarta la operación no confirmada.  
**Reglas relacionadas:** RN-01, RN-02, RN-03, RN-05, RN-13, RN-14, RN-21  
**Requerimientos relacionados:** RF-09, RF-10, RF-11, RF-12, RF-13  

### CU-10
**ID:** CU-10  
**Nombre:** Consultar historial de ventas  
**Objetivo:** Revisar las ventas registradas en un periodo determinado.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite consultar transacciones historicas con filtros por fecha.  
**Precondiciones:** Deben existir ventas registradas.  
**Postcondiciones:** El administrador obtiene una vista del historial solicitado.  
**Flujo principal:**  
1. El administrador accede al módulo de ventas.  
2. El sistema solicita criterio de búsqueda.  
3. El administrador define fecha o rango.  
4. El sistema lista las ventas coincidentes.  
**Flujos alternos:**  
- A1. Sin resultados: el sistema informa que no hay ventas en el rango indicado.  
**Reglas relacionadas:** RN-02, RN-25  
**Requerimientos relacionados:** RF-14, RF-24  

### CU-11
**ID:** CU-11  
**Nombre:** Consultar reportes  
**Objetivo:** Obtener información resumida para control y toma de decisiones.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Proporciona reportes de ventas, inventario, productos agotados y rotación.  
**Precondiciones:** Debe existir información registrada en el sistema.  
**Postcondiciones:** El administrador accede a información consolidada del negocio.  
**Flujo principal:**  
1. El administrador accede al módulo de reportes.  
2. El sistema muestra tipos de reportes disponibles.  
3. El administrador selecciona el reporte requerido.  
4. El sistema procesa y presenta la información.  
**Flujos alternos:**  
- A1. Sin datos suficientes: el sistema informa la limitacion.  
**Reglas relacionadas:** RN-18, RN-25  
**Requerimientos relacionados:** RF-20, RF-23, RF-25  

### CU-12
**ID:** CU-12  
**Nombre:** Generar cierre diario  
**Objetivo:** Consolidar las ventas e ingresos del día para control administrativo.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Resume la operación diaria y apoya la validación de caja al cierre de jornada.  
**Precondiciones:** Deben existir ventas registradas durante la jornada.  
**Postcondiciones:** El sistema genera el cierre diario con totales y observaciones.  
**Flujo principal:**  
1. El administrador solicita generar cierre diario.  
2. El sistema identifica las ventas del día.  
3. El sistema calcula total de ingresos y cantidad de ventas.  
4. El administrador revisa la información.  
5. El sistema genera el reporte de cierre.  
**Flujos alternos:**  
- A1. No existen ventas: el sistema genera cierre en cero o informa ausencia de movimientos.  
**Reglas relacionadas:** RN-02, RN-25  
**Requerimientos relacionados:** RF-25  

### CU-13
**ID:** CU-13  
**Nombre:** Gestionar clientes  
**Objetivo:** Registrar y consultar información básica de clientes cuando el negocio lo requiera.  
**Actor principal:** Administrador  
**Actores secundarios:** Cliente, Sistema  
**Descripción:** Permite mantener información de clientes para ventas identificadas o control comercial.  
**Precondiciones:** El actor debe estar autenticado.  
**Postcondiciones:** La información del cliente queda registrada o actualizada.  
**Flujo principal:**  
1. El administrador accede al módulo de clientes.  
2. El sistema muestra opciones de registro y consulta.  
3. El administrador ingresa o actualiza datos del cliente.  
4. El sistema valida la información.  
5. El sistema guarda el registro.  
**Flujos alternos:**  
- A1. Datos incompletos: el sistema solicita correccion.  
**Reglas relacionadas:** RN-07  
**Requerimientos relacionados:** RF-14, RF-15  

### CU-14
**ID:** CU-14  
**Nombre:** Gestionar inventario  
**Objetivo:** Supervisar el estado general de existencias y movimientos de productos.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Caso de uso de alto nivel que centraliza consulta de stock, ingresos, ajustes y alertas.  
**Precondiciones:** Deben existir productos registrados.  
**Postcondiciones:** El administrador obtiene control actualizado del inventario.  
**Flujo principal:**  
1. El administrador accede al módulo de inventario.  
2. El sistema presenta existencias y alertas relevantes.  
3. El administrador consulta productos, movimientos y estados.  
4. El sistema muestra la información solicitada.  
**Flujos alternos:**  
- A1. Inventario sin movimientos: el sistema muestra estado inicial.  
**Reglas relacionadas:** RN-17, RN-18, RN-22  
**Requerimientos relacionados:** RF-06, RF-20, RF-21  

### CU-15
**ID:** CU-15  
**Nombre:** Consultar productos vencidos  
**Objetivo:** Detectar productos no aptos para venta o próximos a vencerse.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite consultar productos vencidos o cercanos al vencimiento para control preventivo.  
**Precondiciones:** Deben existir productos con control de fecha de vencimiento.  
**Postcondiciones:** El administrador obtiene la lista de productos que requieren accion.  
**Flujo principal:**  
1. El administrador accede a la consulta de vencimientos.  
2. El sistema analiza fechas registradas.  
3. El sistema lista productos vencidos y próximos a vencer.  
4. El administrador revisa la información para tomar decisiones.  
**Flujos alternos:**  
- A1. No existen productos vencidos: el sistema informa estado normal.  
**Reglas relacionadas:** RN-10, RN-11  
**Requerimientos relacionados:** RF-18, RF-19  

## Relaciones de modelado sugeridas

- `CU-09 Registrar venta` **incluye** validación de stock, cálculo de total y actualización de inventario.
- `CU-07 Registrar compra` **incluye** actualización de inventario.
- `CU-12 Generar cierre diario` **incluye** consulta de ventas del día.
- `CU-11 Consultar reportes` **extiende** la consulta histórica segun el tipo de reporte.
- `CU-15 Consultar productos vencidos` puede considerarse una especializacion funcional de `CU-14 Gestionar inventario`.

## Conclusiones

Los Casos de Uso definidos cubren el núcleo funcional del sistema: autenticación, catálogo de productos, abastecimiento, ventas, inventario, reportes y control diario. Esta especificacion mantiene coherencia con los requerimientos ya definidos y constituye la base de los diagramas UML y del modelo conceptual de datos.
