# Resource Stack

These resources are inputs to the Mister IA Design Core. They are not a visual identity and must never be combined indiscriminately.

## UI Skills — routing, craft and critique

Primary role: procedural design intelligence for coding agents.

Use for:
- art direction
- layout
- typography
- interaction
- motion
- accessibility
- performance
- critique and polish

Protocol:

```bash
npx ui-skills start
npx ui-skills categories
npx ui-skills list --category '<category>'
npx ui-skills get '<skill>'
```

Use the smallest relevant skill set per pass. Never load the full catalog into one task.

## DesignSystems.one — machine-readable design system foundation

Primary role: system evidence, tokens and agent-readiness thinking.

Use for:
- design.md generation/extraction
- W3C/DTCG-compatible token thinking
- semantic token structure
- comparing real design systems
- accessibility and agent-readiness checks

The project-specific design bible remains authoritative after extraction.

## shadcn/ui — engineering primitives and registry distribution

Primary role: source-owned component primitives and registry delivery.

Use for:
- accessible primitives
- component ownership
- distributing Mister IA-approved primitives

Do not let shadcn defaults become the client visual identity.

## ReUI — advanced production component source

Primary role: discover useful complex patterns without inventing component APIs.

Preferred workflow when agent tooling supports it:
1. search the actual ReUI registry/MCP
2. inspect the real component API
3. validate intended usage
4. install the exact registry item
5. adapt it to project tokens and brand expression

Never invent props or rebuild a ReUI block from memory.

## Motion resources — interaction craft

Motion Primitives, Kinetics and focused UI Skills may be used to study or implement interaction patterns.

Rules:
- use motion only after layout and typography are stable
- prefer transform/opacity where possible
- use project motion tokens
- support reduced motion
- use one coherent motion language per project

## Component Gallery / real design systems — reference evidence

Primary role: see how mature systems solve a specific component problem.

Use as pattern evidence, not as a cloning source.

For each borrowed pattern, document:
- problem it solves
- what principle is being borrowed
- how the final implementation is transformed for this brand

## Vibe prompt libraries — ideation only

Prompt libraries may help broaden exploration, especially for section types and alternative compositions.

They must not override project DNA, design evidence or the anti-generic gate.

## Selection rule

When two resources disagree:

1. project goals and user needs
2. project Design Bible
3. accessibility/usability
4. project tokens/component contracts
5. selected skill guidance
6. external component defaults

The lower item must yield to the higher one.