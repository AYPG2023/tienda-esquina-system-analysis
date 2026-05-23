<div align="center">

<img src="https://github.com/user-attachments/assets/33ef3606-d6fc-4ada-8231-472a9e5f54ad" alt="Logo de la Universidad Mariano Gálvez" width="160" />

# Tienda de la Esquina

</div>

## Portada del proyecto

| Elemento | Detalle |
|---|---|
| Proyecto | **Tienda de la Esquina** |
| Curso | *Análisis de sistemas 1* |
| Universidad | *Universidad Mariano Gálvez* |
| Integrante | *Anderson Yobany Perdmo García* |
| Carnet | *3490-23-2051* |
| Docente | *Inge. Moisés Velázquez* |
| Fecha | 22 de mayo de 2026 |

## Descripción general

Este repositorio consolida la documentación académica y técnica del proyecto **Tienda de la Esquina**. El contenido aborda el análisis del negocio, la definición de requerimientos, el modelado funcional, la arquitectura conceptual y la propuesta de evolución futura de un sistema orientado al control de ventas, inventario, compras y cierre diario.

El proyecto no implementa una aplicación real. Su propósito es construir una base sólida de análisis y diseño que permita desarrollar el sistema posteriormente con menor incertidumbre, mayor trazabilidad y mejor alineación con las necesidades del negocio.

## Objetivo del proyecto

Estructurar una propuesta integral de análisis y diseño para un sistema de información que permita:

- registrar ventas y compras;
- mantener control de inventario;
- gestionar productos, clientes y proveedores;
- generar reportes operativos;
- consolidar cierres diarios;
- establecer una ruta técnica clara para una implementación futura.

## Alcance

El alcance es documental y conceptual. El repositorio incluye:

- análisis del negocio;
- enfoque Scrum;
- stakeholders;
- reglas de negocio;
- Requerimientos Funcionales y no funcionales;
- Historias de Usuario;
- product backlog;
- Casos de Uso;
- diagramas UML y de apoyo;
- Modelo Entidad-Relación;
- Arquitectura Candidata;
- mockups de baja fidelidad;
- matrices de QA y validación;
- gestión de riesgos;
- propuesta futura de implementación.

No incluye:

- backend funcional;
- frontend productivo;
- base de datos implementada;
- servicios en ejecución;
- lógica de negocio ejecutable.

## Estructura del repositorio

### `docs/`

Contiene el cuerpo principal del análisis y diseño del sistema: negocio, Scrum, requerimientos, modelado, arquitectura, mockups, riesgos, conclusiones y documento de lógica de desarrollo futuro.

### `diagramas/`

Contiene diagramas editables y exportados que respaldan los Casos de Uso, actividades, arquitectura y estructura lógica del sistema.

### `mockups/`

Incluye prototipos HTML de baja fidelidad que ayudan a validar navegación, formularios, distribución de información y correspondencia con la lógica funcional.

### `modelos/`

Agrupa matrices, diccionario de datos, criterios de aceptación, plan de pruebas, trazabilidad y artefactos de validación documental.

### `propuesta/`

Reúne la proyección futura del sistema: viabilidad, propuesta tecnológica, plan de capacitación, impacto organizacional, roadmap e implementación gradual.

### `entrega-final/`

Consolida el material editorial del proyecto en formato de entrega final.

### `docs-site/`

Contiene una versión navegable del proyecto para consulta estructurada de la documentación técnica.

## Índice general

### Análisis y gestión

- [Análisis del negocio](./docs/01-analisis-negocio.md)
- [Scrum y estrategia](./docs/02-scrum-estrategia.md)
- [Stakeholders](./docs/03-stakeholders.md)
- [Reglas de negocio](./docs/04-reglas-negocio.md)
- [Requerimientos](./docs/05-requerimientos.md)
- [Historias de Usuario](./docs/06-historias-usuario.md)
- [Product backlog](./docs/07-product-backlog.md)

### Modelado y diseño

- [Casos de Uso](./docs/08-casos-uso.md)
- [Diagramas](./docs/09-diagramas.md)
- [Modelo Entidad-Relación](./docs/10-modelo-er.md)
- [Arquitectura Candidata](./docs/11-arquitectura.md)
- [Mockups](./docs/12-mockups.md)

### Calidad y control

- [Riesgos](./docs/13-riesgos.md)
- [Cronograma](./docs/14-cronograma.md)
- [Conclusiones](./docs/15-conclusiones.md)
- [Referencias](docs/16-referencias.md)
- [Resumen ejecutivo](docs/17-resumen-ejecutivo.md)
- [Lógica de desarrollo del sistema](docs/18-logica-desarrollo-sistema.md)

### Modelos de soporte

- [Diccionario de datos](./modelos/diccionario-datos.md)
- [Matriz CRUD](./modelos/matriz-crud.md)
- [Matriz de trazabilidad](./modelos/matriz-trazabilidad.md)
- [Matriz de riesgos](./modelos/matriz-riesgos.md)
- [Plan de sprints](./modelos/plan-sprints.md)
- [Criterios de aceptación](./modelos/criterios-aceptacion.md)
- [Plan de pruebas](./modelos/plan-pruebas.md)
- [Casos de prueba](./modelos/casos-prueba.md)
- [Matriz de validación](./modelos/matriz-validacion.md)
- [Checklist de calidad](./modelos/checklist-calidad.md)
- [Revisión técnica](./modelos/revision-tecnica.md)

### Propuesta futura

- [Propuesta de implementación](./propuesta/documentos/propuesta-implementacion.md)
- [Análisis de viabilidad](./propuesta/documentos/analisis-viabilidad.md)
- [Roadmap futuro](./propuesta/documentos/roadmap-futuro.md)
- [Propuesta tecnológica](./propuesta/documentos/propuesta-tecnologica.md)
- [Impacto organizacional](./propuesta/documentos/impacto-organizacional.md)
- [Plan de capacitación](./propuesta/documentos/plan-capacitacion.md)
- [Manual operativo conceptual](./propuesta/documentos/manual-operativo.md)

## Núcleo lógico del sistema

La solución propuesta gira alrededor de los siguientes módulos:

- autenticación y control de acceso;
- productos y catálogo;
- inventario y movimientos;
- compras y abastecimiento;
- ventas y detalle de venta;
- clientes y proveedores;
- reportes operativos;
- cierre diario y control administrativo.

La relación crítica del dominio se concentra en el flujo `venta -> detalle de venta -> descuento de inventario -> actualización de reportes -> cierre diario`, reforzado por reglas de validación y por trazabilidad entre requerimientos, Historias de Usuario, Casos de Uso, entidades y mockups.

