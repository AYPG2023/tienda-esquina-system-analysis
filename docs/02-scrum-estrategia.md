# 02. Scrum y estrategia de trabajo

## Que es Scrum

Scrum esta basado en un marco de trabajo agil para gestionar productos complejos mediante ciclos cortos e iterativos. Su objetivo es maximizar el valor entregado, favorecer la inspeccion frecuente del progreso y permitir la adaptacion continua frente a nueva información o cambios de prioridad.

Scrum estructura el trabajo alrededor de:

- roles definidos con responsabilidades claras;
- un backlog priorizado;
- sprints de duracion fija;
- eventos recurrentes para planificar, revisar y mejorar;
- artefactos que aportan transparencia.

## Por que Scrum es adecuado para este proyecto

Scrum resulta adecuado para la Tienda de la Esquina porque el proyecto requiere construir el análisis del sistema por partes, validando progresivamente entendimiento del negocio, requerimientos, Casos de Uso y modelos. No se trata de una sola entrega monolítica, sino de un conjunto de artefactos relacionados que se benefician de iteraciones cortas y revisiones frecuentes.

En un contexto académico, Scrum también es pertinente porque:

- facilita dividir el trabajo en entregables manejables;
- permite priorizar primero el conocimiento del negocio;
- reduce el riesgo de producir documentación desconectada del problema real;
- favorece la trazabilidad entre backlog, Historias de Usuario y documentos.

## Ventajas de usar Scrum

- Permite avanzar de forma incremental y controlada.
- Facilita la priorizacion de lo más importante para el negocio.
- Incrementa la visibilidad del trabajo pendiente y completado.
- Favorece la deteccion temprana de vacios de análisis.
- Mejora la coordinacion entre responsables del proyecto.
- Hace posible ajustar el alcance sin perder coherencia metodológica.

## Flujo Scrum propuesto

El flujo de trabajo propuesto para este proyecto es el siguiente:

1. Levantamiento del contexto del negocio desde el PDF y su formalizacion.
2. Construcción del product backlog inicial.
3. Planificación del sprint segun prioridad MoSCoW.
4. Desarrollo de artefactos documentales del sprint.
5. Revision del incremento documental obtenido.
6. Retroalimentacion y ajuste del backlog.
7. Inicio del siguiente sprint con mayor nivel de detalle.

## Sprint propuesto

Se propone trabajar con sprints documentales orientados a incrementos verificables. Cada sprint debe producir artefactos completos o parcialmente completos que puedan ser revisados de forma objetiva.

### Duracion del sprint

Se propone una duracion de **2 semanas por sprint**, por las siguientes razones:

- ofrece tiempo suficiente para analizar, redactar y revisar;
- mantiene una cadencia corta compatible con seguimiento académico;
- evita acumulacion excesiva de trabajo antes de recibir retroalimentacion.

### Distribucion sugerida de sprints

- Sprint 1: análisis del negocio, Scrum, stakeholders, reglas y requerimientos.
- Sprint 2: Historias de Usuario, backlog, Casos de Uso y diagramas UML.
- Sprint 3: modelo ER, Arquitectura Candidata y matrices de trazabilidad.
- Sprint 4: mockups, riesgos, QA y cierre documental final.

## Eventos Scrum

### Sprint Planning

Evento destinado a seleccionar los elementos del backlog que se trabajaran en el sprint y definir el objetivo del sprint.

Aplicación en el proyecto:

- seleccionar documentos o artefactos del sprint;
- acordar objetivo del incremento documental;
- validar dependencias entre análisis, modelado y prototipos.

### Daily Scrum

Reunion breve de seguimiento para inspeccionar avance, bloqueos y ajustes inmediatos. En contexto académico puede adaptarse como control periodico del progreso documental.

Aplicación en el proyecto:

- revisar estado de avance por artefacto;
- identificar riesgos o bloqueos de información;
- ajustar prioridades de trabajo del corto plazo.

### Sprint Review

Espacio para presentar el incremento generado, validar su coherencia con el problema del negocio y recoger observaciones.

Aplicación en el proyecto:

- revisar entregables documentales terminados;
- validar consistencia con requerimientos y Casos de Uso;
- recoger retroalimentacion académica o funcional.

### Sprint Retrospective

Evento orientado a evaluar como se trabajo, que dificultades surgieron y que mejoras de proceso deben incorporarse al siguiente sprint.

Aplicación en el proyecto:

- evaluar calidad de la colaboracion;
- detectar problemas de trazabilidad o alcance;
- ajustar criterios de documentación y validación.

### Product Backlog Refinement

Actividad continua de revision y afinamiento del backlog. Permite aclarar historias, dividir trabajo, revisar prioridades y preparar items para siguientes sprints.

Aplicación en el proyecto:

- refinar Historias de Usuario y requerimientos;
- incorporar dependencias descubiertas en modelado o arquitectura;
- mantener actualizada la prioridad documental segun valor académico y funcional.

## Artefactos Scrum

### Product Backlog

Lista priorizada de necesidades del producto expresadas en Historias de Usuario, requerimientos y trabajo analitico asociado.

### Sprint Backlog

Conjunto de items seleccionados para el sprint, junto con el plan de trabajo necesario para completarlos.

### Increment

Resultado tangible del sprint. En este proyecto, el incremento esta compuesto por documentación validada y consistente, lista para servir de base a la siguiente fase.

## Definition of Ready

Para este proyecto, un item del backlog se considera listo para ser tomado en sprint cuando cumple las siguientes condiciones:

- tiene objetivo y alcance claramente definidos;
- esta vinculado a uno o más requerimientos o necesidades del negocio;
- posee suficiente contexto documental para trabajarse;
- no depende de información crítica aún no resuelta;
- cuenta con criterio de validación o aceptacion inicial.

## Definition of Done

Un entregable documental se considera terminado cuando:

- esta redactado con lenguaje académico y profesional;
- mantiene coherencia con los documentos previamente aprobados;
- incluye relaciones claras con requerimientos, Casos de Uso o entidades cuando aplique;
- fue revisado para detectar inconsistencias de contenido;
- queda listo para servir como insumo de la siguiente fase.

## Roles Scrum

### Stakeholders del negocio y del proyecto

- **Don Pedro:** propietario del negocio y fuente principal del dominio operativo.
- **Clientes:** usuarios indirectos del sistema a traves del servicio recibido.
- **Empleados:** ejecutores de tareas operativas como venta, consulta o reposición.
- **Administrador:** responsable del control y seguimiento de información del negocio.
- **Proveedor:** actor externo que interviene en el abastecimiento.
- **Equipo Scrum:** grupo responsable de transformar la necesidad del negocio en entregables estructurados.

### Accountabilities Scrum

#### Product Owner

Responsable de maximizar el valor del producto, priorizar el backlog y asegurar que lo que se construye responda a la necesidad real del negocio. En este proyecto, el Product Owner representa la voz del negocio de Don Pedro y organiza las prioridades documentales.

#### Scrum Master

Responsable de promover la correcta aplicación de Scrum, remover impedimentos y asegurar que el equipo mantenga foco, transparencia y mejora continua. En este proyecto, vela porque las entregas mantengan coherencia metodológica y cadencia de trabajo.

#### Developers

Responsables de construir el incremento del sprint. En este caso, producen análisis, historias, requerimientos, tablas, modelos y demás artefactos documentales necesarios para la evolución del proyecto.

## Propuesta de asignacion conceptual de actores

Para fines de interpretación metodológica, la relación entre negocio y Scrum puede entenderse asi:

| Actor | Relación con Scrum |
|---|---|
| Don Pedro | Stakeholder principal y referente del valor del producto |
| Clientes | Stakeholders de valor y experiencia de servicio |
| Empleados | Stakeholders operativos y usuarios del sistema |
| Administrador | Stakeholder de control y supervision |
| Proveedor | Stakeholder externo asociado al abastecimiento |
| Product Owner | Responsable de priorizar el valor del producto |
| Scrum Master | Responsable del proceso Scrum |
| Developers | Responsables del incremento documental y funcional futuro |

## Conclusiones de la estrategia

Scrum ofrece una estructura adecuada para desarrollar este proyecto por fases, con entregables verificables y enfoque continuo en valor. Su adopción en la Tienda de la Esquina permite transformar un problema de negocio difuso en un backlog priorizado y en incrementos documentales consistentes, reduciendo el riesgo de producir artefactos aislados o desconectados del objetivo del sistema.
