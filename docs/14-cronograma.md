# 14. Cronograma

## Objetivo del documento

Organizar la ejecucion académica del proyecto por fases, actividades, duraciones estimadas y entregables, manteniendo coherencia con el enfoque incremental de Scrum.

## Criterios de planificación

- La planificación es académica y documental.
- Cada fase produce uno o más entregables verificables.
- La secuencia prioriza dependencias logicas del análisis.
- La duracion propuesta es referencial y compatible con 4 sprints de 2 semanas.

## Cronograma general

| Fase | Actividad | Duracion estimada | Entregable |
|---|---|---|---|
| 1 | Análisis del negocio | 1 semana | `docs/01-analisis-negocio.md` |
| 2 | Levantamiento de requerimientos y reglas | 1 semana | `docs/04-reglas-negocio.md`, `docs/05-requerimientos.md` |
| 3 | Scrum, historias y backlog | 1 semana | `docs/02-scrum-estrategia.md`, `docs/06-historias-usuario.md`, `docs/07-product-backlog.md` |
| 4 | Casos de uso y modelado funcional | 1 semana | `docs/08-casos-uso.md` |
| 5 | Diagramas UML y actividades | 1 semana | `docs/09-diagramas.md`, archivos `diagramas/drawio/` |
| 6 | Modelo conceptual y ER | 1 semana | `docs/10-modelo-er.md`, `modelos/diccionario-datos.md` |
| 7 | Arquitectura candidata y trazabilidad | 1 semana | `docs/11-arquitectura.md`, `modelos/matriz-crud.md`, `modelos/matriz-trazabilidad.md` |
| 8 | Mockups de baja fidelidad | 1 semana | `docs/12-mockups.md`, `mockups/html/`, `mockups/css/` |
| 9 | Riesgos, QA y criterios de aceptacion | 1 semana | `docs/13-riesgos.md`, `modelos/matriz-riesgos.md`, `modelos/criterios-aceptacion.md` |
| 10 | Documento final y conclusiones | 1 semana | `docs/14-cronograma.md`, `docs/15-conclusiones.md`, `modelos/plan-sprints.md` |

## Relación con los sprints

La secuencia anterior se agrupa de forma natural en cuatro sprints:

- Sprint 1: análisis del negocio, requerimientos y backlog.
- Sprint 2: Casos de Uso, diagramas y modelado funcional.
- Sprint 3: modelo ER, arquitectura y trazabilidad.
- Sprint 4: mockups, riesgos, validación y cierre documental.

## Hitos del proyecto

1. Comprension formal del negocio.
2. Definición consistente de requerimientos y backlog.
3. Modelado funcional y de datos completado.
4. Arquitectura candidata y trazabilidad cerradas.
5. Mockups navegables listos para presentación.
6. Gestión de riesgos y conclusiones documentadas.

## Dependencias relevantes

- Los requerimientos dependen del análisis del negocio.
- Los Casos de Uso dependen del backlog y de los Requerimientos Funcionales.
- El modelo ER depende de los Casos de Uso y de las reglas de negocio.
- La Arquitectura Candidata depende del modelo funcional y de datos.
- Los mockups dependen de Casos de Uso, arquitectura y módulos.
- La gestión de riesgos depende de todos los artefactos previos.

## Conclusiones

El cronograma propuesto organiza el proyecto de forma progresiva y coherente con Scrum. Cada fase agrega valor documental y habilita la siguiente, evitando saltos prematuros a implementación sin haber consolidado primero el análisis y el diseño del sistema.
