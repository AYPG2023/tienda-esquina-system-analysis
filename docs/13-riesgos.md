# 13. Riesgos del proyecto

## Objetivo del documento

Identificar, evaluar y tratar los riesgos que pueden afectar la calidad del análisis, el modelado, la planificación y la futura implementación conceptual del sistema.

## Criterios de evaluacion

Para esta fase se adopta una clasificacion cualitativa simple:

- **Impacto:** Bajo, Medio o Alto
- **Probabilidad:** Baja, Media o Alta
- **Nivel:** Bajo, Medio, Alto o Critico

## Matriz resumida de riesgos

| ID | Riesgo | Causa | Impacto | Probabilidad | Nivel | Estrategia | Accion preventiva |
|---|---|---|---|---|---|---|---|
| R-01 | Errores en inventario | Registro manual inconsistente o ausencia de validaciones | Alto | Alta | Critico | Mitigar | Definir reglas claras y trazabilidad de movimientos |
| R-02 | Resistencia del usuario | Cambio de habitos operativos en Don Pedro o empleados | Medio | Media | Medio | Mitigar | Disenar interfaces simples y documentar beneficios |
| R-03 | Pérdida de información | Registros incompletos o no centralizados | Alto | Media | Alto | Mitigar | Estructurar entidades, reportes y controles documentales |
| R-04 | Mala captura de datos | Formularios ambiguos o procesos no estandarizados | Alto | Alta | Critico | Mitigar | Definir campos obligatorios y validaciones de negocio |
| R-05 | Requisitos incompletos | Análisis insuficiente del negocio o alcance ambiguo | Alto | Media | Alto | Mitigar | Refinar backlog y validar cobertura con trazabilidad |
| R-06 | Baja usabilidad | Diseño poco claro para usuarios no tecnicos | Medio | Media | Medio | Mitigar | Construir mockups simples y revisar flujo por pantalla |
| R-07 | Falta de capacitación | Usuarios sin preparación para operar el sistema | Medio | Media | Medio | Mitigar | Documentar procesos y flujo de módulos comprensible |
| R-08 | Fallos en cierre diario | Consolidación incorrecta de ventas o pagos | Alto | Media | Alto | Mitigar | Separar módulo de cierre y reglas de consolidación |
| R-09 | Errores en precios | Actualizaciones sin control o inconsistencias en catálogo | Alto | Media | Alto | Mitigar | Restringir cambios y asociar reglas de autorizacion |
| R-10 | Reportes incorrectos | Datos de origen inconsistentes o filtros mal definidos | Alto | Media | Alto | Mitigar | Trazar reportes a ventas, inventario y reglas RN-25 |
| R-11 | Cambios frecuentes de alcance | Nuevas necesidades o reinterpretacion del proyecto | Medio | Alta | Alto | Aceptar / Mitigar | Mantener backlog refinado y control de prioridades |
| R-12 | Falta de validación del cliente | Escasa revision por parte del referente del negocio | Alto | Media | Alto | Mitigar | Programar revisiones de incremento y validación funcional |

## Plan de mitigacion

### Riesgo: R-01 Errores en inventario
**Impacto esperado:** Inconsistencias entre stock real y stock registrado.  
**Accion preventiva:** Mantener reglas RN-01, RN-05, RN-17 y RN-22 como base del modelado.  
**Accion correctiva:** Revisar movimientos, ajustar stock y documentar causa.  
**Responsable:** Analista funcional / Administrador del sistema

### Riesgo: R-04 Mala captura de datos
**Impacto esperado:** Registros invalidos en ventas, productos o compras.  
**Accion preventiva:** Estandarizar formularios y campos obligatorios en requerimientos y mockups.  
**Accion correctiva:** Rehacer captura y aplicar validación adicional en el flujo.  
**Responsable:** Equipo de análisis y diseño

### Riesgo: R-05 Requisitos incompletos
**Impacto esperado:** Cobertura funcional insuficiente o artefactos incongruentes.  
**Accion preventiva:** Realizar refinamiento continuo del backlog y matriz de trazabilidad.  
**Accion correctiva:** Reabrir el artefacto afectado y ajustar documentos dependientes.  
**Responsable:** Product Owner / Scrum Master

### Riesgo: R-08 Fallos en cierre diario
**Impacto esperado:** Reporte de jornada incorrecto y baja confiabilidad administrativa.  
**Accion preventiva:** Definir cierre diario como módulo y entidad diferenciados.  
**Accion correctiva:** Reconciliar ventas, pagos y observaciones del día.  
**Responsable:** Administrador / Analista de negocio

### Riesgo: R-09 Errores en precios
**Impacto esperado:** Cobros incorrectos o información comercial inconsistente.  
**Accion preventiva:** Restringir actualización de precios a usuarios autorizados y reglas RN-04 y RN-12.  
**Accion correctiva:** Corregir catálogo y revisar ventas afectadas.  
**Responsable:** Administrador

### Riesgo: R-10 Reportes incorrectos
**Impacto esperado:** Decisiones administrativas equivocadas y pérdida de confianza en el sistema.  
**Accion preventiva:** Mantener trazabilidad entre reportes, ventas, inventario y cierre diario.  
**Accion correctiva:** Auditar datos de origen y recalcular la salida informativa.  
**Responsable:** Administrador / Responsable de reportes

### Riesgo: R-11 Cambios frecuentes de alcance
**Impacto esperado:** Retrasos, retrabajo y pérdida de foco metodológico.  
**Accion preventiva:** Priorizar mediante Scrum y controlar cambios por sprint.  
**Accion correctiva:** Repriorizar backlog y renegociar entregables del sprint siguiente.  
**Responsable:** Product Owner / Scrum Master

### Riesgo: R-12 Falta de validación del cliente
**Impacto esperado:** Documentación correcta en forma, pero debil en pertinencia de negocio.  
**Accion preventiva:** Programar revisiones frecuentes de entregables y mockups.  
**Accion correctiva:** Ajustar documentos con base en observaciones tardias y registrar lecciones.  
**Responsable:** Product Owner / Stakeholder principal

## Relación con el proyecto

La gestión de riesgos complementa el análisis y el diseño porque permite anticipar problemas antes de la implementación. En este proyecto, los riesgos más sensibles se concentran en:

- integridad de inventario;
- consistencia de ventas y precios;
- calidad de reportes y cierre diario;
- claridad de requerimientos y usabilidad.

## Conclusiones

La matriz y el plan de mitigacion muestran que los riesgos principales del proyecto son controlables si se mantiene disciplina documental, validación iterativa y trazabilidad entre reglas, requerimientos, módulos y datos. La gestión preventiva es especialmente importante en un sistema pequeño, donde errores aparentemente simples pueden afectar directamente la operación diaria del negocio.
