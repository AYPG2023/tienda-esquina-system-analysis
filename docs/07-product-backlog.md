# 07. Product backlog

## Criterio de priorización

Se adopta la técnica **MoSCoW** para clasificar el valor y urgencia de cada item:

- **Must:** indispensable para la operación mínima del sistema.
- **Should:** importante, pero no bloquea la funcionalidad esencial inicial.
- **Could:** deseable si existe capacidad en iteraciones posteriores.
- **Won't:** fuera del alcance actual de esta fase.

## Backlog inicial

| ID | Historia | Prioridad | Sprint | Estimación |
|---|---|---|---|---|
| HU-01 | Registrar nuevos productos | Must | Sprint 1 | 3 puntos |
| HU-02 | Buscar productos rápidamente | Must | Sprint 1 | 2 puntos |
| HU-03 | Consultar existencia disponible | Must | Sprint 1 | 2 puntos |
| HU-04 | Registrar venta con varios productos | Must | Sprint 1 | 5 puntos |
| HU-05 | Calcular total de venta automáticamente | Must | Sprint 1 | 3 puntos |
| HU-06 | Registrar entradas de inventario | Must | Sprint 1 | 3 puntos |
| HU-07 | Actualizar precios de productos | Must | Sprint 1 | 2 puntos |
| HU-08 | Consultar historial de ventas | Must | Sprint 2 | 3 puntos |
| HU-09 | Consultar detalle de una venta | Must | Sprint 2 | 2 puntos |
| HU-10 | Bloquear venta sin stock | Must | Sprint 1 | 3 puntos |
| HU-11 | Descontar inventario después de una venta | Must | Sprint 1 | 3 puntos |
| HU-12 | Listar productos agotados | Should | Sprint 2 | 2 puntos |
| HU-13 | Registrar proveedores | Should | Sprint 2 | 3 puntos |
| HU-14 | Registrar fecha de vencimiento | Should | Sprint 2 | 3 puntos |
| HU-15 | Identificar productos vencidos | Must | Sprint 2 | 5 puntos |
| HU-16 | Registrar ajustes de inventario | Should | Sprint 2 | 3 puntos |
| HU-17 | Consultar ventas por fecha | Must | Sprint 2 | 3 puntos |
| HU-18 | Ver resumen de ventas del día | Must | Sprint 2 | 2 puntos |
| HU-19 | Identificar productos de mayor rotación | Could | Sprint 3 | 5 puntos |
| HU-20 | Autenticar usuarios por rol | Should | Sprint 3 | 5 puntos |

## Interpretación del backlog

El backlog inicial concentra primero las capacidades necesarias para sostener la operación básica del negocio: registrar productos, vender, controlar existencias y mantener trazabilidad de movimientos. En segúndo plano se ubican funcionalidades de control ampliado, tales como vencimientos, proveedores, ajustes y consultas históricas. Finalmente, se consideran como mejora incremental las funciones analíticas y de seguridad ampliada.

## Items fuera del alcance actual

Aunque relevantes para fases posteriores, los siguientes temas se consideran `Won't` dentro de esta etapa documental:

- implementación de base de datos;
- desarrollo de backend;
- desarrollo de frontend real;
- arquitectura técnica avanzada.

## Conclusiones

El product backlog inicial traduce el problema del negocio en trabajo priorizado y trazable. La secuencia propuesta favorece entregar primero control operativo minimo viable y deja para iteraciones posteriores las capacidades de refinamiento, analítica y fortalecimiento del control de acceso.
