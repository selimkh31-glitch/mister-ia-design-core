# Mister IA Design Core

A reusable design-governance kit for websites and apps built by Mister IA 64 and AI coding agents.

The goal is simple: keep engineering reusable while making each product visually distinct. Agents must work from a project-specific design bible instead of inventing UI values and defaulting to generic SaaS/AI patterns.

## Core model

1. **Project DNA** — business, audience, brand attributes, visual archetype.
2. **Design bible** — explicit visual rules and anti-patterns.
3. **Tokens** — colors, spacing, radii, typography and motion as named values.
4. **Components** — reusable engineering primitives; never a copied final identity.
5. **Agent protocol** — mandatory read order and implementation rules.
6. **Design QA** — responsive, accessibility, hierarchy, motion and anti-generic review.

## Quick start

Copy the contents of `starter/project-design/` into the target project as `/design`, then complete the placeholders before coding UI.

For AI agents, copy `AGENTS.md` to the target repository root or merge its rules into the existing agent instructions.

Run:

```bash
npm run design:lint -- /path/to/project
```

to scan for suspicious hard-coded visual values.

## Repository map

```text
.
├── AGENTS.md
├── registry.json
├── agent/
│   ├── ANTI_GENERIC.md
│   ├── DESIGN_PROTOCOL.md
│   └── DESIGN_QA.md
├── foundations/
│   ├── tokens.css
│   ├── tokens.json
│   ├── typography.css
│   └── motion.css
├── starter/project-design/
│   ├── BRAND.md
│   ├── design.md
│   ├── COMPONENTS.md
│   ├── MOTION.md
│   ├── REFERENCES.md
│   ├── DESIGN-QA.md
│   └── tokens.css
├── templates/
│   ├── local-business/PROJECT_DNA.md
│   ├── artisan/PROJECT_DNA.md
│   ├── restaurant/PROJECT_DNA.md
│   ├── saas/PROJECT_DNA.md
│   └── mobile-app/PROJECT_DNA.md
└── scripts/
    ├── init-project.mjs
    └── design-lint.mjs
```

## Design principle

The core provides constraints, not a house style.

A landscaping website, a renovation business, a sports social app and an AI agency should not look related merely because they share this repository. Shared code is acceptable; shared visual identity is not.

## shadcn registry readiness

This repository includes a valid source `registry.json` structure so selected files can later be distributed through the shadcn registry workflow. Keep project-specific brand identity out of the global registry.

## Status

V1 — design governance, project bootstrapping, token starter and automated visual-value linting.
