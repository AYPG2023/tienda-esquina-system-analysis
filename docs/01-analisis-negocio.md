# 01. Análisis del negocio

## Introducción del negocio

Tienda de la Esquina corresponde al contexto de una tienda de barrio administrada por Don Pedro, cuya operación se concentra en la venta cotidiana de productos de consumo frecuente. El negocio depende de un flujo constante de ventas, reposición de inventario, atención al cliente y control básico de ingresos y egresos. Aunque su dinámica comercial es relativamente simple desde el punto de vista operativo, presenta una alta sensibilidad a errores humanos cuando la gestión se realiza de forma manual.

Desde una perspectiva de análisis de sistemas, el proyecto busca estructurar la información del negocio, formalizar sus procesos y sentar las bases de un sistema que contribuya al control operativo, la trazabilidad de las transacciones y la toma de decisiones del propietario.

## Problemática actual

La problemática principal radica en la administración manual de los procesos esenciales de la tienda. Cuando las ventas, el inventario, los precios y los registros operativos dependen de apuntes informales o de la memoria del responsable, se incrementa el riesgo de inconsistencias, pérdida de información y decisiones sin sustento verificable.

La ausencia de un mecanismo sistemático para registrar movimientos dificulta responder preguntas críticas para el negocio, por ejemplo: que productos se venden más, cuales deben reponerse con prioridad, que artículos presentan baja rotación, cuanto efectivo se genera por jornada y que diferencias existen entre el inventario teórico y el inventario real.

## Situación actual de Don Pedro

Don Pedro concentra el conocimiento operativo del negocio y actua, de forma simultanea, como responsable comercial, administrador y tomador principal de decisiones. Esta centralizacion le permite mantener control directo del negocio, pero también genera dependencia excesiva de su intervención diaria.

En el estado actual, Don Pedro enfrenta limitaciones para:

- consultar información histórica de ventas con rapidez;
- conocer existencias reales sin hacer verificación manual;
- detectar faltantes, vencimientos o errores de precio oportunamente;
- delegar tareas con trazabilidad suficiente;
- planificar compras con base en datos confiables.

La situación describe un negocio funcional desde lo comercial, pero vulnerable desde el punto de vista de control y gestión de información.

## Procesos manuales detectados

Con base en el contexto del proyecto, se identifican como procesos manuales o parcialmente manuales los siguientes:

1. Registro de ventas al momento de la atención.
2. Cálculo del total a pagar por el cliente.
3. Verificación de disponibilidad de productos.
4. Actualización de existencias después de cada venta.
5. Definición y ajuste de precios.
6. Registro de compras o reposiciones a proveedores.
7. Identificación de productos próximos a vencer o vencidos.
8. Conteo físico de inventario.
9. Control de ingresos diarios.
10. Seguimiento de productos de mayor y menor rotación.

## Riesgos del proceso actual

La operación manual expone al negocio a riesgos concretos:

- errores en el cobro por cálculo incorrecto del total;
- ventas de productos sin existencia real confirmada;
- diferencias entre inventario físico e inventario registrado;
- omisión de ventas por falta de registro oportuno;
- pérdida de información histórica por uso de medios informales;
- dificultad para detectar mermas, robos o vencimientos;
- dependencia excesiva del conocimiento de Don Pedro;
- retrasos en la atención al cliente en horas de alta demanda;
- decisiones de compra sin indicadores de rotación o consumo;
- menor capacidad de crecimiento o control al incorporar personal.

## Oportunidades de mejora

La principal oportunidad consiste en transformar un proceso eminentemente operativo en un proceso gestionado con información estructurada. Un sistema de apoyo permitiria estandarizar la captura de datos, reducir errores repetitivos y ofrecer visibilidad sobre el estado real del negocio.

Las mejoras esperables se concentran en:

- mayor control sobre ventas e inventario;
- consulta inmediata de productos, precios y existencias;
- trazabilidad de movimientos comerciales;
- mejor planificación de compras y reposiciones;
- control de productos vencidos o de baja rotación;
- soporte para una administración menos dependiente de la memoria del propietario.

## Objetivos del sistema

### Objetivo general

Analizar y definir un sistema de información para la Tienda de la Esquina que permita mejorar el control de ventas, inventario y operación comercial mediante la formalizacion de procesos y el registro estructurado de información.

### Objetivos especificos

- Centralizar el registro de ventas realizadas en la tienda.
- Mantener actualizado el inventario en función de las transacciones.
- Facilitar la consulta de productos, precios y existencias.
- Proveer información útil para la reposición de mercaderia.
- Reducir errores operativos asociados a procesos manuales.
- Mejorar la trazabilidad de las actividades principales del negocio.

## Alcance inicial

En esta fase de análisis, el alcance funcional inicial del sistema queda delimitado a los procesos nucleares de la tienda:

- administración de productos;
- control de inventario;
- registro de ventas;
- consulta de precios y existencias;
- control básico de reposición;
- identificación de productos vencidos o no disponibles;
- generacion de información operativa para la gestión del negocio.

Quedan fuera de esta fase temas como arquitectura técnica detallada, implementación de base de datos, desarrollo de interfaces reales y construcción de componentes de software.

## Beneficios esperados

Los beneficios de negocio esperados son los siguientes:

- reduccion de errores manuales en ventas e inventario;
- mejora en la velocidad de atención al cliente;
- mayor control administrativo para Don Pedro;
- mejor visibilidad del comportamiento comercial de la tienda;
- apoyo a decisiones de compra y reposición;
- disminucion del riesgo operativo por información dispersa;
- base ordenada para el crecimiento futuro del negocio.

## Procesos principales del negocio

Los procesos principales identificados para la Tienda de la Esquina son:

1. Abastecimiento de productos.
2. Registro y control del catálogo de productos.
3. Venta y cobro al cliente.
4. Actualización de inventario.
5. Control de precios.
6. Seguimiento de vencimientos y mermas.
7. Consulta de información operativa para administración.

## Core del negocio

El core del negocio se centra en la comercialización rápida y continua de productos de consumo cotidiano, donde la disponibilidad de inventario, la precisión en el cobro y la reposición oportuna determinan directamente la rentabilidad y la satisfaccion del cliente. Por tanto, el núcleo funcional del sistema debe responder a esa realidad: vender, controlar existencias y sostener la operación diaria con información confiable.

## Necesidades tecnologicas identificadas

Del análisis inicial se desprenden las siguientes necesidades tecnologicas:

- un mecanismo estructurado para registrar ventas;
- control automatizable de existencias por producto;
- consulta rápida de precios y stock disponible;
- registro de compras o entradas de inventario;
- alertas o identificación de productos agotados o vencidos;
- histórico de movimientos para análisis posterior;
- acceso por roles de acuerdo con responsabilidades del negocio;
- reportes operativos básicos para apoyo a decisiones.

## Conclusión del análisis

La Tienda de la Esquina presenta un escenario típico de negocio pequeño con operación intensiva en transacciones diarias y fuerte dependencia de control manual. El problema no es la ausencia de actividad comercial, sino la carencia de mecanismos formales para registrar, controlar y consultar información crítica. En consecuencia, existe una justificación clara para plantear un sistema enfocado en ventas, inventario y administración básica, con prioridad en la confiabilidad operativa antes que en la complejidad tecnológica.
