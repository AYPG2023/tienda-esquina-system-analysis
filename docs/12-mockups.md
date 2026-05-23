# 12. Mockups

## Objetivo del documento

Documentar los prototipos visuales de baja fidelidad del sistema, mostrando de forma navegable como podria estructurarse la experiencia de usuario sin implementar lógica real, backend o persistencia de datos.

## Naturaleza de los mockups

Los artefactos generados en esta fase son **prototipos de baja fidelidad en HTML y CSS**. Su objetivo no es simular una aplicación plenamente operativa, sino:

- representar la distribución visual de las pantallas principales;
- anticipar navegación, jerarquía y agrupacion de información;
- apoyar validación académica del diseño funcional;
- servir de puente entre Casos de Uso y futura implementación.

En consecuencia:

- no existe autenticación real;
- no hay operaciones de guardado;
- las tablas, formularios y metricas son simuladas;
- los datos mostrados son ficticios, pero coherentes con el dominio del negocio.

## Estructura de los prototipos

Los mockups fueron organizados en la siguiente estructura:

- `mockups/html/`
- `mockups/css/`
- `mockups/img/`

Archivo de estilo compartido:

- `mockups/css/styles.css`

Pantallas prototipo:

- `mockups/html/01-login.html`
- `mockups/html/02-dashboard.html`
- `mockups/html/03-registrar-venta.html`
- `mockups/html/04-inventario.html`
- `mockups/html/05-productos.html`
- `mockups/html/06-clientes.html`
- `mockups/html/07-proveedores.html`
- `mockups/html/08-compras.html`
- `mockups/html/09-reportes.html`
- `mockups/html/10-cierre-diario.html`

## Criterios visuales aplicados

Los prototipos comparten un mismo lenguaje visual con los siguientes criterios:

- navegación lateral persistente;
- encabezado superior con contexto del sistema;
- tarjetas informativas para indicadores o accesos rapidos;
- formularios simulados para operaciones principales;
- tablas con datos de ejemplo;
- botones y estados visuales consistentes;
- maquetacion responsive básica para escritorio y tablet.

## Pantallas y propósito

| Pantalla | Propósito principal | Casos de uso relacionados | Requerimientos relacionados |
|---|---|---|---|
| Login | Simular acceso inicial al sistema | CU-01 | RF-26, RF-27 |
| Dashboard | Mostrar vision general del negocio | CU-11, CU-12, CU-14 | RF-20, RF-23, RF-25 |
| Registrar venta | Representar el flujo operativo de venta | CU-09 | RF-09, RF-10, RF-11, RF-12, RF-13 |
| Inventario | Visualizar stock, alertas y movimientos | CU-08, CU-14, CU-15 | RF-06, RF-18, RF-19, RF-20, RF-21 |
| Productos | Simular registro y control del catálogo | CU-02, CU-03, CU-04, CU-05 | RF-01, RF-04, RF-05, RF-16, RF-17 |
| Clientes | Representar la gestión básica de clientes | CU-13 | RF-14, RF-15 |
| Proveedores | Representar gestión de proveedores | CU-06 | RF-22 |
| Compras | Simular abastecimiento y entrada de productos | CU-07 | RF-07, RF-08, RF-22 |
| Reportes | Mostrar salidas consolidadas de información | CU-11 | RF-20, RF-23, RF-24, RF-25 |
| Cierre diario | Representar consolidación de la jornada | CU-12 | RF-25 |

## Descripción de cada pantalla

### 1. Login

Pantalla de acceso inicial con identificación del sistema, campos de usuario y contraseña, y accion principal de ingreso. Su propósito es introducir la nocion de control de acceso sin implementar validación real.

### 2. Dashboard

Pantalla resumen con indicadores clave, alertas de inventario, productos destacados y accesos rapidos a operaciones frecuentes. Resume el estado general del negocio.

### 3. Registrar venta

Pantalla operativa de ventas con búsqueda simulada de productos, tabla de items agregados, metodo de pago y resumen total. Representa el Caso de Uso central del negocio.

### 4. Inventario

Pantalla de control de existencias con estado del stock, vencimientos, niveles mínimos y registro de movimientos recientes. Sirve para visualizar el control operativo del almacen.

### 5. Productos

Pantalla para registrar, consultar y mantener productos y categorías. Integra formulario y tabla de catálogo en una misma vista operativa.

### 6. Clientes

Pantalla de gestión básica de clientes con formulario de registro, buscador y un historial de compras simulado. Su objetivo es mostrar como podria integrarse la información comercial del cliente.

### 7. Proveedores

Pantalla orientada al abastecimiento, con datos del proveedor, estado y productos asociados. Refuerza la relación entre compras y control externo de suministros.

### 8. Compras

Pantalla para representar el ingreso de mercaderia desde proveedores, incluyendo cantidades, costos y efecto esperado sobre inventario.

### 9. Reportes

Pantalla con vistas resumidas de ventas, productos agotados, vencimientos e ingresos estimados. Enfatiza la dimension administrativa del sistema.

### 10. Cierre diario

Pantalla de consolidación de jornada con total vendido, número de transacciones, resumen por metodo de pago y observaciones administrativas.

## Relación con el análisis del sistema

Los mockups sirven como artefactos de apoyo entre el análisis funcional y el diseño posterior porque:

- traducen Casos de Uso en pantallas observables;
- facilitan validar cobertura de requerimientos;
- muestran agrupacion lógica de módulos y datos;
- permiten discutir usabilidad antes de programar.

## Validación UX básica

La validación de los mockups se realizo desde una perspectiva de baja fidelidad, enfocada en claridad y coherencia funcional.

### Usabilidad

Los prototipos favorecen usabilidad básica porque:

- mantienen una estructura constante en todas las pantallas;
- reutilizan una navegación lateral comun;
- presentan formularios y tablas con jerarquía visible;
- destacan acciones primarias mediante botones diferenciados.

### Consistencia visual

La consistencia visual se observa en:

- uso de una sola hoja de estilos compartida;
- repeticion de encabezado, menú, paneles y tarjetas;
- misma lógica de colores, estados y bloques de información;
- tono académico y ordenado en todas las vistas.

### Relación con Casos de Uso

Cada mockup responde a uno o más Casos de Uso previamente documentados. Esto permite verificar que las pantallas no fueron definidas de manera arbitraria, sino como expresión visual del comportamiento esperado del sistema.

### Relación con requerimientos

Los formularios, tablas y paneles representados en los mockups mantienen correspondencia con los Requerimientos Funcionales ya aprobados. En consecuencia, los prototipos cumplen una función de validación visual y no solo estetica.

## Conclusiones

Los prototipos de baja fidelidad construidos para la Tienda de la Esquina ofrecen una propuesta visual coherente, académica y navegable de las principales pantallas del sistema. Aunque no implementan comportamiento funcional, constituyen un entregable útil para comunicar la solución propuesta y preparar una futura fase de diseño técnico o desarrollo.
