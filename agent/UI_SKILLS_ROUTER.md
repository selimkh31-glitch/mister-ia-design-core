# UI Skills Router

This router turns UI Skills into an active workflow instead of a reference list.

## Golden rule

Never load a giant stack of design skills at once. Work in passes. Each pass may use 1 to 3 skills maximum, selected for the exact problem being solved.

Before any UI task, start with the UI Skills router:

```bash
npx ui-skills start
npx ui-skills categories
npx ui-skills list --category '<category>'
npx ui-skills get '<skill>'
```

## Mandatory passes for a full redesign

### Pass 0 — Evidence and design DNA
Goal: understand the current product before styling anything.

Preferred skills:
- `create-design-md`
- `shape`
- `critique`

Outputs:
- product goal and audience
- visual DNA worth preserving
- anti-patterns to remove
- references and differentiation targets
- updated `/design/design.md`

Do not code yet.

### Pass 1 — Art direction
Goal: create a recognisable visual point of view.

Preferred skills:
- `frontend-design` or `impeccable`
- `bolder`
- `typeset`

Outputs:
- one dominant visual idea
- typography direction
- composition system
- color roles
- signature devices
- explicit things that make this project unlike previous Mister IA projects

Exit condition: a screenshot should be recognisable with the logo removed.

### Pass 2 — Layout and responsive composition
Goal: make the design survive real content and viewports.

Preferred skills:
- `layout`
- `adapt`
- `frontend-ui-engineering`

Outputs:
- desktop composition
- mobile recomposition, not simple stacking
- content hierarchy
- stable grid/spacing rules
- component boundaries

### Pass 3 — Implementation craft
Goal: build the approved direction without visual drift.

Preferred skills:
- `frontend-design` or `impeccable`
- framework-specific skill when available
- `baseline-ui` for cleanup only after the main visual idea exists

Rules:
- use project semantic tokens
- prefer typed components
- never invent raw design values when a token exists
- engineering primitives may be shared; final brand expression may not

### Pass 4 — Motion and interaction
Goal: make the interface feel intentional in use.

Preferred skills:
- `animate`
- `interaction-design` or `micro-interaction`
- `improve-animations` for audit

Outputs:
- entrance hierarchy
- hover/press feedback
- section transitions when useful
- interruption/exit behavior
- reduced-motion behavior

Motion must communicate hierarchy, causality or feedback. No animation tax.

### Pass 5 — Accessibility and performance
Goal: remove quality regressions before polish.

Preferred skills:
- `fixing-accessibility` or `better-accessibility`
- `fixing-motion-performance`
- `optimize`

Checks:
- keyboard navigation
- visible focus
- 44px touch targets where applicable
- contrast
- no layout shift from media
- responsive overflow
- compositor-friendly motion
- reduced motion

### Pass 6 — Anti-generic critique
Goal: prove the result does not look like a default AI template.

Preferred skills:
- `critique`
- `improve-ui`
- `distill` or `bolder`, depending on the diagnosis

Ask:
- Could this be mistaken for another client site?
- Is there one memorable visual idea?
- Are repeated card grids doing work or hiding weak composition?
- Is typography carrying hierarchy or are boxes doing everything?
- Does the mobile version have its own composition?
- Are decorative patterns justified by the brand?

If the answer exposes generic output, return to Pass 1 or Pass 2. Do not patch around a weak art direction.

### Pass 7 — Launch polish
Goal: final craft pass after the concept is stable.

Preferred skills:
- `polish`
- `audit`
- `harden`

Only now fix micro-spacing, icon alignment, edge states, forms, metadata and final consistency.

## Small UI tasks

Do not run all passes. Route to the smallest useful pass and 1 skill, or 2 when the task clearly needs two angles.

## Failure mode to avoid

A redesign that preserves the same header silhouette, typography rhythm, card language and color distribution is not a redesign merely because sections were reordered. Structural change without perceptual change fails the art-direction gate.