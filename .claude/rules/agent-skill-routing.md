---
description: Roteamento automatico de agents/skills Verdicspec — aplique sem o usuario pedir pelo nome
alwaysApply: true
---

# Roteamento automatico (obrigatorio)

O usuario **nao precisa** dizer "use o agent X". Escolha pelo intent e carregue a skill canonica.

| Intent | Agent | Skill primaria |
|--------|-------|----------------|
| explorar / mapear / descobrir | `explorer` | `skills/core/project-discovery` |
| especificar feature / comportamento | `specifier` | `skills/core/specification` |
| planejar tasks | `planner` | `skills/core/planning` |
| arquitetura / trade-offs | `architect` | `skills/core/architecture` |
| bug / erro / regressao | `debugger` | `skills/core/debugging` |
| spike / incerteza tecnica | `spike-engineer` | `skills/core/spike` |
| implementar apos aprovacao | `implementer` | `skills/workflows/feature-development` |
| testes | `tester` | `skills/practices/testing` |
| pronto? / gate final | `verifier` | `skills/practices/verification` |
| seguranca | `security-reviewer` | `skills/practices/security` |
| logs / metricas | `observability-engineer` | `skills/practices/observability` |
| review de codigo | `reviewer` | `skills/practices/code-review` |
| criar PR | `pr-creator` | `skills/practices/pull-request` |
| release | `releaser` | `skills/practices/release-readiness` |

## Gates

1. Stack desconhecida → `technology-discovery` antes.
2. Feature media/grande → specify → aprovacao → plan → implement.
3. Bug → causa raiz antes de patch.
4. Antes de pronto/commit/PR → `verifier`.
5. Nao modernize stack/padrao sem pedido explicito.
6. Nao declare evidencia que nao foi executada.
