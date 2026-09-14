# Implementation Workflow

## New project

1. Copy the project starter with `npm run design:init -- ../target-project`.
2. Complete `design/BRAND.md`.
3. Select one project DNA template as a starting lens, never as a finished style.
4. Complete `design/design.md` and define signature devices.
5. Replace starter token values in `design/tokens.css`.
6. Build the first high-signal screen or homepage section.
7. Review identity before scaling the component set.
8. Add approved patterns to `design/COMPONENTS.md`.
9. Run `design:lint` against the target project.
10. Complete `design/DESIGN-QA.md` before release.

## Existing project migration

Do not refactor the whole UI blindly.

1. Inventory fonts, colors, spacing, radii, shadows and motion.
2. Identify repeated values and group them by semantic role.
3. Define project DNA from the existing brand/business reality.
4. Keep strong existing visual decisions; remove accidental inconsistency.
5. Introduce tokens incrementally, starting with colors and typography.
6. Consolidate repeated components only after the intended visual distinction is documented.
7. Compare desktop and mobile screenshots before/after.

## Reuse policy

Safe to reuse globally:
- accessibility behavior;
- form semantics;
- utility code;
- container mechanics;
- focus patterns;
- motion primitives;
- data/state logic.

Must be project-specific or deliberately adapted:
- hero composition;
- typography pairing;
- color identity;
- image treatment;
- card language;
- radii philosophy;
- section rhythm;
- signature motion;
- decorative devices.
