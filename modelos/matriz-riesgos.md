# Matriz de riesgos

## Objetivo

Registrar de manera estructurada los riesgos principales del proyecto, su nivel de criticidad y las acciones preventivas propuestas para reducir su impacto.

## Matriz

| ID | Riesgo | Causa | Impacto | Probabilidad | Nivel | Estrategia | Accion preventiva |
|---|---|---|---|---|---|---|---|
| R-01 | Errores en inventario | Registros manuales o reglas insuficientes | Alto | Alta | Critico | Mitigar | Trazar entradas, salidas y ajustes mediante reglas y movimientos |
| R-02 | Resistencia del usuario | Cambio de rutina y poca familiaridad con sistemas | Medio | Media | Medio | Mitigar | Priorizar interfaz simple y explicar valor operativo |
| R-03 | Pérdida de información | Registros dispersos o inconsistentes | Alto | Media | Alto | Mitigar | Consolidar datos y definir entidades claras |
| R-04 | Mala captura de datos | Formularios ambiguos o datos no validados | Alto | Alta | Critico | Mitigar | Definir campos obligatorios y criterios de validación |
| R-05 | Requisitos incompletos | Análisis insuficiente del negocio | Alto | Media | Alto | Mitigar | Refinar backlog y validar trazabilidad |
| R-06 | Baja usabilidad | Diseño poco intuitivo para usuarios no tecnicos | Medio | Media | Medio | Mitigar | Usar mockups simples y consistentes |
| R-07 | Falta de capacitación | Usuarios sin orientacion sobre el sistema | Medio | Media | Medio | Mitigar | Documentar flujos y operaciones principales |
| R-08 | Fallos en cierre diario | Consolidación deficiente de transacciones | Alto | Media | Alto | Mitigar | Separar módulo y entidad de cierre diario |
| R-09 | Errores en precios | Cambios no controlados en catálogo | Alto | Media | Alto | Mitigar | Limitar actualización de precios a usuarios autorizados |
| R-10 | Reportes incorrectos | Datos base inconsistentes o filtros deficientes | Alto | Media | Alto | Mitigar | Relacionar reportes con trazabilidad de ventas e inventario |
| R-11 | Cambios frecuentes de alcance | Nuevas solicitudes o reinterpretacion del proyecto | Medio | Alta | Alto | Mitigar | Aplicar Scrum, backlog refinado y control por sprint |
| R-12 | Falta de validación del cliente | Escasa revision por parte del negocio | Alto | Media | Alto | Mitigar | Programar revisiones de incremento y sesiones de validación |

## Observaciones

- La matriz complementa `docs/13-riesgos.md` y resume de forma tabular el tratamiento inicial del riesgo.
- Los riesgos con mayor prioridad son aquellos que afectan integridad de datos, ventas, inventario y cierre diario.
