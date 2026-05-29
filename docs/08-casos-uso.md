# 08. Casos de uso

## Objetivo del documento

Documentar las interacciones funcionales entre los actores del negocio y el sistema de la Tienda de la Esquina, de manera que sirvan como base para diagramas UML, modelo de datos, criterios de validación, escenarios de prueba y desarrollo posterior.

## Actores identificados

- **Administrador:** responsable de control operativo, configuración, supervisión, inventario, compras, reportes y cierre diario.
- **Empleado:** usuario operativo que ejecuta ventas y consultas autorizadas.
- **Cliente:** actor de negocio asociado a la transacción comercial; no administra información dentro del sistema.
- **Sistema:** componente lógico que ejecuta validaciones, cálculos, actualizaciones automáticas y control de reglas de negocio.

## Catálogo de casos de uso

### CU-01
**ID:** CU-01  
**Nombre:** Iniciar sesión  
**Objetivo:** Permitir el acceso al sistema según el rol autorizado.  
**Actor principal:** Administrador o Empleado  
**Actores secundarios:** Sistema  
**Descripción:** El usuario ingresa sus credenciales para acceder a las funciones que le correspondan.  
**Precondiciones:** El usuario debe estar registrado y activo.  
**Postcondiciones:** El sistema habilita el acceso según el rol del usuario.  
**Flujo principal:**  
1. El actor solicita acceso al sistema.  
2. El sistema muestra el formulario de autenticación.  
3. El actor ingresa usuario y contraseña.  
4. El sistema valida las credenciales.  
5. El sistema identifica el rol del usuario.  
6. El sistema concede acceso al módulo correspondiente.  
**Flujos alternos:**  
- A1. Credenciales inválidas: el sistema rechaza el acceso y muestra un mensaje de error.  
- A2. Usuario inactivo: el sistema bloquea el acceso.  
**Reglas relacionadas:** RN-19, RN-23  
**Requerimientos relacionados:** RF-26, RF-27, RNF-04  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-01 Iniciar sesión |
| Actor principal | Administrador o Empleado |
| Disparador | El usuario necesita ingresar al sistema. |
| Precondición | El usuario está registrado y activo. |
| Flujo principal resumido | El usuario ingresa credenciales, el sistema las valida, identifica el rol y permite el acceso. |
| Postcondición | El usuario queda autenticado y con permisos según su rol. |
| Excepciones | Credenciales inválidas o usuario inactivo. |
| Prioridad | Alta |

### CU-02
**ID:** CU-02  
**Nombre:** Registrar producto  
**Objetivo:** Incorporar un nuevo producto al catálogo operativo de la tienda.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite registrar datos básicos de un producto para que pueda gestionarse, comprarse y venderse posteriormente.  
**Precondiciones:** El administrador debe haber iniciado sesión.  
**Postcondiciones:** El producto queda registrado y disponible para operaciones posteriores.  
**Flujo principal:**  
1. El administrador accede al módulo de productos.  
2. El sistema muestra el formulario de registro.  
3. El administrador ingresa nombre, categoría, precio y unidad de control.  
4. El sistema valida que el producto no esté duplicado y que el precio sea válido.  
5. El administrador confirma el registro.  
6. El sistema guarda el producto.  
**Flujos alternos:**  
- A1. Precio inválido: el sistema rechaza el registro.  
- A2. Producto duplicado: el sistema informa el conflicto y no registra el producto.  
**Reglas relacionadas:** RN-04, RN-07, RN-08, RN-20  
**Requerimientos relacionados:** RF-01, RF-17  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-02 Registrar producto |
| Actor principal | Administrador |
| Disparador | Se necesita agregar un producto al catálogo. |
| Precondición | El administrador inició sesión. |
| Flujo principal resumido | El administrador captura los datos del producto, el sistema valida duplicidad y formato, y guarda el registro. |
| Postcondición | El producto queda disponible en el catálogo. |
| Excepciones | Producto duplicado, precio inválido o datos incompletos. |
| Prioridad | Alta |

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
4. El sistema valida la consistencia de los datos.  
5. El administrador confirma los cambios.  
6. El sistema actualiza el producto.  
**Flujos alternos:**  
- A1. Producto inexistente: el sistema informa que no puede editarse.  
- A2. Datos inválidos: el sistema solicita corrección.  
**Reglas relacionadas:** RN-12, RN-19  
**Requerimientos relacionados:** RF-04, RF-16, RF-27  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-03 Editar producto |
| Actor principal | Administrador |
| Disparador | Se detecta información desactualizada o incorrecta de un producto. |
| Precondición | El producto existe y el administrador está autenticado. |
| Flujo principal resumido | El administrador localiza el producto, modifica datos permitidos y el sistema valida y actualiza. |
| Postcondición | El producto conserva información vigente. |
| Excepciones | Producto inexistente o datos inválidos. |
| Prioridad | Media |

### CU-04
**ID:** CU-04  
**Nombre:** Inactivar producto  
**Objetivo:** Retirar un producto de las operaciones sin perder su historial.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Sustituye la eliminación física del producto por una inactivación controlada.  
**Precondiciones:** El producto debe existir.  
**Postcondiciones:** El producto queda inactivo y no disponible para nuevas ventas.  
**Flujo principal:**  
1. El administrador selecciona el producto.  
2. El sistema muestra la opción de inactivar.  
3. El administrador confirma la acción.  
4. El sistema cambia el estado del producto a inactivo.  
**Flujos alternos:**  
- A1. Acción cancelada: el administrador decide no inactivar el producto.  
**Reglas relacionadas:** RN-15, RN-23  
**Requerimientos relacionados:** RF-05  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-04 Inactivar producto |
| Actor principal | Administrador |
| Disparador | Un producto ya no debe estar disponible para venta. |
| Precondición | El producto existe en el catálogo. |
| Flujo principal resumido | El administrador selecciona el producto, confirma la inactivación y el sistema cambia su estado. |
| Postcondición | El producto queda fuera de operaciones futuras, conservando historial. |
| Excepciones | El administrador cancela la acción. |
| Prioridad | Baja |

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
3. El administrador registra o modifica una categoría.  
4. El sistema valida unicidad y consistencia del nombre.  
5. El sistema guarda la información.  
**Flujos alternos:**  
- A1. Categoría duplicada: el sistema rechaza el registro.  
**Reglas relacionadas:** RN-07, RN-08  
**Requerimientos relacionados:** RF-01, RF-04  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-05 Gestionar categorías |
| Actor principal | Administrador |
| Disparador | Se requiere organizar productos bajo una clasificación. |
| Precondición | El administrador inició sesión. |
| Flujo principal resumido | El administrador consulta, crea o actualiza una categoría y el sistema valida unicidad. |
| Postcondición | La categoría queda disponible para asociarla a productos. |
| Excepciones | Categoría duplicada o datos incompletos. |
| Prioridad | Media |

### CU-06
**ID:** CU-06  
**Nombre:** Registrar proveedor  
**Objetivo:** Mantener el control de los actores externos que abastecen la tienda.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Registra información básica del proveedor para asociarla a compras o reposiciones.  
**Precondiciones:** El administrador debe estar autenticado.  
**Postcondiciones:** El proveedor queda registrado en el catálogo de abastecimiento.  
**Flujo principal:**  
1. El administrador accede al módulo de proveedores.  
2. El sistema muestra el formulario de registro.  
3. El administrador ingresa datos del proveedor.  
4. El sistema valida la información.  
5. El sistema registra el proveedor.  
**Flujos alternos:**  
- A1. Datos incompletos: el sistema solicita completar la información.  
**Reglas relacionadas:** RN-24  
**Requerimientos relacionados:** RF-22  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-06 Registrar proveedor |
| Actor principal | Administrador |
| Disparador | Se necesita asociar compras a un proveedor nuevo. |
| Precondición | El administrador está autenticado. |
| Flujo principal resumido | El administrador registra datos del proveedor y el sistema valida y guarda la información. |
| Postcondición | El proveedor queda disponible para compras futuras. |
| Excepciones | Datos incompletos o inconsistentes. |
| Prioridad | Media |

### CU-07
**ID:** CU-07  
**Nombre:** Registrar compra  
**Objetivo:** Registrar el ingreso de productos adquiridos a proveedores.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
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
- A2. Cantidad inválida: el sistema rechaza el detalle.  
**Reglas relacionadas:** RN-09, RN-16, RN-24  
**Requerimientos relacionados:** RF-07, RF-08, RF-22  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-07 Registrar compra |
| Actor principal | Administrador |
| Disparador | Ingresa mercadería adquirida para abastecer la tienda. |
| Precondición | Existen proveedores y productos registrados. |
| Flujo principal resumido | El administrador selecciona proveedor, registra detalle, confirma la compra y el sistema incrementa inventario. |
| Postcondición | La compra queda registrada y las existencias aumentan. |
| Excepciones | Producto inexistente, proveedor no registrado o cantidad inválida. |
| Prioridad | Alta |

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
4. El sistema valida que la operación no genere cantidades inválidas.  
5. El sistema actualiza el stock y guarda el movimiento.  
**Flujos alternos:**  
- A1. Ajuste no justificado: el sistema rechaza la operación.  
- A2. Cantidad resultante negativa: el sistema bloquea el ajuste.  
**Reglas relacionadas:** RN-06, RN-17, RN-22  
**Requerimientos relacionados:** RF-21  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-08 Actualizar stock |
| Actor principal | Administrador |
| Disparador | Se requiere ajustar una existencia por entrada, salida, merma o corrección. |
| Precondición | El producto existe y el administrador está autenticado. |
| Flujo principal resumido | El administrador registra el ajuste, el sistema valida la cantidad y guarda el movimiento. |
| Postcondición | El stock queda actualizado con trazabilidad. |
| Excepciones | Ajuste sin justificación o cantidad negativa. |
| Prioridad | Alta |

### CU-09
**ID:** CU-09  
**Nombre:** Registrar venta  
**Objetivo:** Formalizar una transacción de venta al cliente.  
**Actor principal:** Empleado  
**Actores secundarios:** Cliente, Sistema  
**Descripción:** Permite seleccionar productos, validar stock, calcular total, registrar pago y confirmar la venta.  
**Precondiciones:** El empleado debe estar autenticado y deben existir productos activos.  
**Postcondiciones:** La venta queda registrada, el inventario se actualiza y, si corresponde, se genera el comprobante.  
**Flujo principal:**  
1. El empleado inicia una nueva venta.  
2. El sistema muestra la interfaz de registro de venta.  
3. El empleado busca y selecciona productos.  
4. El sistema valida existencia disponible.  
5. El empleado define cantidades.  
6. El sistema calcula subtotales y total.  
7. El empleado registra el pago.  
8. El empleado confirma la venta.  
9. El sistema registra fecha y hora.  
10. El sistema descuenta inventario.  
**Flujos alternos:**  
- A1. Producto sin stock: el sistema impide agregarlo.  
- A2. Cantidad solicitada mayor al stock: el sistema solicita corrección.  
- A3. Venta cancelada: el sistema descarta la operación no confirmada.  
- A4. Descuento autorizado: el sistema recalcula el total.  
- A5. Comprobante solicitado: el sistema genera el comprobante.  
**Reglas relacionadas:** RN-01, RN-02, RN-03, RN-05, RN-13, RN-14, RN-21  
**Requerimientos relacionados:** RF-09, RF-10, RF-11, RF-12, RF-13  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-09 Registrar venta |
| Actor principal | Empleado |
| Disparador | Un cliente realiza una compra en la tienda. |
| Precondición | El empleado está autenticado y existen productos activos. |
| Flujo principal resumido | El empleado selecciona productos, el sistema valida stock y totaliza, se registra el pago y se descuenta inventario. |
| Postcondición | La venta queda registrada y el inventario actualizado. |
| Excepciones | Stock insuficiente, venta cancelada, descuento condicionado o comprobante solicitado. |
| Prioridad | Alta |

### CU-10
**ID:** CU-10  
**Nombre:** Consultar historial de ventas  
**Objetivo:** Revisar las ventas registradas en un período determinado.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite consultar transacciones históricas con filtros por fecha.  
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

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-10 Consultar historial de ventas |
| Actor principal | Administrador |
| Disparador | El administrador necesita auditar o revisar ventas pasadas. |
| Precondición | Existen ventas registradas o el sistema puede informar ausencia de resultados. |
| Flujo principal resumido | El administrador define criterios de búsqueda y el sistema lista ventas coincidentes. |
| Postcondición | El administrador obtiene el historial consultado. |
| Excepciones | No existen ventas para el rango indicado. |
| Prioridad | Media |

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
2. El sistema muestra los tipos de reportes disponibles.  
3. El administrador selecciona el reporte requerido.  
4. El sistema procesa y presenta la información.  
**Flujos alternos:**  
- A1. Sin datos suficientes: el sistema informa la limitación.  
- A2. Exportación solicitada: el sistema genera un archivo descargable.  
**Reglas relacionadas:** RN-18, RN-25  
**Requerimientos relacionados:** RF-20, RF-23, RF-25  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-11 Consultar reportes |
| Actor principal | Administrador |
| Disparador | Se requiere información consolidada para análisis o control. |
| Precondición | Existen datos operativos registrados. |
| Flujo principal resumido | El administrador selecciona un tipo de reporte y el sistema procesa la información. |
| Postcondición | El reporte queda visible para consulta o análisis. |
| Excepciones | Sin datos suficientes o exportación opcional. |
| Prioridad | Alta |

### CU-12
**ID:** CU-12  
**Nombre:** Generar cierre diario  
**Objetivo:** Consolidar las ventas e ingresos del día para control administrativo.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Resume la operación diaria y apoya la validación de caja al cierre de jornada.  
**Precondiciones:** Deben existir ventas registradas durante la jornada o el sistema debe permitir cierre en cero.  
**Postcondiciones:** El sistema genera el cierre diario con totales y observaciones.  
**Flujo principal:**  
1. El administrador solicita generar cierre diario.  
2. El sistema identifica las ventas del día.  
3. El sistema calcula el total de ingresos y la cantidad de ventas.  
4. El administrador revisa la información.  
5. El sistema genera el reporte de cierre.  
**Flujos alternos:**  
- A1. No existen ventas: el sistema genera cierre en cero o informa ausencia de movimientos.  
**Reglas relacionadas:** RN-02, RN-25  
**Requerimientos relacionados:** RF-25  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-12 Generar cierre diario |
| Actor principal | Administrador |
| Disparador | Finaliza la jornada operativa. |
| Precondición | Existen ventas del día o se requiere cierre sin movimientos. |
| Flujo principal resumido | El sistema consulta ventas del día, calcula totales y genera el reporte de cierre. |
| Postcondición | El cierre diario queda generado y documentado. |
| Excepciones | Jornada sin ventas registradas. |
| Prioridad | Alta |

### CU-13
**ID:** CU-13  
**Nombre:** Gestionar clientes  
**Objetivo:** Registrar y consultar información básica de clientes cuando el negocio lo requiera.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
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
- A1. Datos incompletos: el sistema solicita corrección.  
**Reglas relacionadas:** RN-07  
**Requerimientos relacionados:** RF-14, RF-15  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-13 Gestionar clientes |
| Actor principal | Administrador |
| Disparador | Se requiere registrar o actualizar información de un cliente. |
| Precondición | El administrador está autenticado. |
| Flujo principal resumido | El administrador captura o actualiza datos y el sistema valida y guarda. |
| Postcondición | La información del cliente queda disponible para consultas o ventas identificadas. |
| Excepciones | Datos incompletos o inconsistentes. |
| Prioridad | Media |

### CU-14
**ID:** CU-14  
**Nombre:** Gestionar inventario  
**Objetivo:** Supervisar el estado general de existencias y movimientos de productos.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Caso de uso de alto nivel que centraliza consulta de stock, ingresos, salidas, ajustes y alertas.  
**Precondiciones:** Deben existir productos registrados.  
**Postcondiciones:** El administrador obtiene control actualizado del inventario.  
**Flujo principal:**  
1. El administrador accede al módulo de inventario.  
2. El sistema presenta existencias y alertas relevantes.  
3. El administrador consulta productos, movimientos y estados.  
4. El sistema muestra la información solicitada.  
**Flujos alternos:**  
- A1. Inventario sin movimientos: el sistema muestra estado inicial.  
- A2. Bajo stock: el sistema genera una alerta preventiva.  
**Reglas relacionadas:** RN-17, RN-18, RN-22  
**Requerimientos relacionados:** RF-06, RF-20, RF-21  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-14 Gestionar inventario |
| Actor principal | Administrador |
| Disparador | Se requiere revisar existencias, movimientos o alertas. |
| Precondición | Existen productos registrados. |
| Flujo principal resumido | El administrador consulta el inventario y el sistema muestra stock, movimientos y alertas. |
| Postcondición | El administrador cuenta con información actualizada para tomar decisiones. |
| Excepciones | Inventario sin movimientos o alerta por bajo stock. |
| Prioridad | Alta |

### CU-15
**ID:** CU-15  
**Nombre:** Consultar productos vencidos  
**Objetivo:** Detectar productos no aptos para venta o próximos a vencerse.  
**Actor principal:** Administrador  
**Actores secundarios:** Sistema  
**Descripción:** Permite consultar productos vencidos o cercanos al vencimiento para control preventivo.  
**Precondiciones:** Deben existir productos con control de fecha de vencimiento.  
**Postcondiciones:** El administrador obtiene la lista de productos que requieren acción.  
**Flujo principal:**  
1. El administrador accede a la consulta de vencimientos.  
2. El sistema analiza fechas registradas.  
3. El sistema lista productos vencidos y próximos a vencer.  
4. El administrador revisa la información para tomar decisiones.  
**Flujos alternos:**  
- A1. No existen productos vencidos: el sistema informa estado normal.  
**Reglas relacionadas:** RN-10, RN-11  
**Requerimientos relacionados:** RF-18, RF-19  

**Escenario detallado**

| Elemento | Descripción |
|---|---|
| Caso de uso | CU-15 Consultar productos vencidos |
| Actor principal | Administrador |
| Disparador | Se realiza control preventivo de productos con vencimiento. |
| Precondición | Existen productos con fecha de vencimiento registrada. |
| Flujo principal resumido | El sistema analiza fechas y muestra productos vencidos o próximos a vencer. |
| Postcondición | El administrador identifica productos que requieren acción. |
| Excepciones | No existen productos vencidos o próximos a vencer. |
| Prioridad | Media |

## Relaciones de modelado UML

- `CU-01 Iniciar sesión` `<<include>>` Validar credenciales.
- `CU-02 Registrar producto` `<<include>>` Validar datos del producto.
- `CU-03 Editar producto` `<<include>>` Consultar producto.
- `CU-04 Inactivar producto` `<<extend>>` Gestionar productos.
- `CU-07 Registrar compra` `<<include>>` Seleccionar proveedor.
- `CU-07 Registrar compra` `<<include>>` Registrar detalle de compra.
- `CU-07 Registrar compra` `<<include>>` Actualizar inventario.
- `CU-07 Registrar compra` `<<extend>>` Registrar nuevo proveedor.
- `CU-08 Actualizar stock` `<<include>>` Registrar movimiento de inventario.
- `CU-09 Registrar venta` `<<include>>` Validar stock.
- `CU-09 Registrar venta` `<<include>>` Calcular total.
- `CU-09 Registrar venta` `<<include>>` Registrar pago.
- `CU-09 Registrar venta` `<<include>>` Actualizar inventario.
- `CU-09 Registrar venta` `<<extend>>` Aplicar descuento.
- `CU-09 Registrar venta` `<<extend>>` Generar comprobante.
- `CU-09 Registrar venta` `<<extend>>` Cancelar venta.
- `CU-10 Consultar historial de ventas` `<<extend>>` Filtrar ventas por fecha.
- `CU-11 Consultar reportes` `<<include>>` Generar reporte de ventas.
- `CU-11 Consultar reportes` `<<include>>` Generar reporte de inventario.
- `CU-11 Consultar reportes` `<<extend>>` Exportar reporte.
- `CU-12 Generar cierre diario` `<<include>>` Consultar ventas del día.
- `CU-12 Generar cierre diario` `<<include>>` Calcular total diario.
- `CU-12 Generar cierre diario` `<<include>>` Generar reporte de cierre.
- `CU-14 Gestionar inventario` `<<include>>` Consultar stock.
- `CU-14 Gestionar inventario` `<<include>>` Registrar entrada.
- `CU-14 Gestionar inventario` `<<include>>` Registrar salida.
- `CU-14 Gestionar inventario` `<<extend>>` Generar alerta de bajo stock.
- `CU-15 Consultar productos vencidos` `<<extend>>` Gestionar inventario.

## Matriz de trazabilidad de casos de uso

| Caso de uso | Actor principal | Requerimientos relacionados | Reglas relacionadas | Módulo |
|---|---|---|---|---|
| CU-01 Iniciar sesión | Administrador o Empleado | RF-26, RF-27, RNF-04 | RN-19, RN-23 | Seguridad |
| CU-02 Registrar producto | Administrador | RF-01, RF-17 | RN-04, RN-07, RN-08, RN-20 | Productos |
| CU-03 Editar producto | Administrador | RF-04, RF-16, RF-27 | RN-12, RN-19 | Productos |
| CU-04 Inactivar producto | Administrador | RF-05 | RN-15, RN-23 | Productos |
| CU-05 Gestionar categorías | Administrador | RF-01, RF-04 | RN-07, RN-08 | Categorías |
| CU-06 Registrar proveedor | Administrador | RF-22 | RN-24 | Proveedores |
| CU-07 Registrar compra | Administrador | RF-07, RF-08, RF-22 | RN-09, RN-16, RN-24 | Compras |
| CU-08 Actualizar stock | Administrador | RF-21 | RN-06, RN-17, RN-22 | Inventario |
| CU-09 Registrar venta | Empleado | RF-09, RF-10, RF-11, RF-12, RF-13 | RN-01, RN-02, RN-03, RN-05, RN-13, RN-14, RN-21 | Ventas |
| CU-10 Consultar historial de ventas | Administrador | RF-14, RF-24 | RN-02, RN-25 | Ventas |
| CU-11 Consultar reportes | Administrador | RF-20, RF-23, RF-25 | RN-18, RN-25 | Reportes |
| CU-12 Generar cierre diario | Administrador | RF-25 | RN-02, RN-25 | Cierre diario |
| CU-13 Gestionar clientes | Administrador | RF-14, RF-15 | RN-07 | Clientes |
| CU-14 Gestionar inventario | Administrador | RF-06, RF-20, RF-21 | RN-17, RN-18, RN-22 | Inventario |
| CU-15 Consultar productos vencidos | Administrador | RF-18, RF-19 | RN-10, RN-11 | Inventario |

## Conclusiones

Los 15 casos de uso definidos cubren el núcleo funcional del sistema: autenticación, catálogo de productos, categorías, proveedores, compras, ventas, inventario, reportes, cierre diario y clientes. La especificación mantiene coherencia entre actores, flujos, reglas de negocio, requerimientos y relaciones UML, por lo que constituye una base defendible para el análisis, diseño y validación posterior del sistema.
