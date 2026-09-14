# Full Design Loop

Use this workflow for any new website, major landing page or substantial redesign.

## Phase A — Discover

1. Read the project brief and business goal.
2. Read `/design/*` if present.
3. Inspect the current implementation and real content.
4. Route the task through `agent/UI_SKILLS_ROUTER.md`.
5. Capture 3 to 5 relevant references and write what is useful about each one. Never copy a whole identity.
6. Define a single sentence for the intended visual impression.

Deliverable: updated Design Bible before implementation.

## Phase B — Diverge

Produce three meaningfully different directions on paper before choosing one:

- Direction A: safest expression that still feels designed.
- Direction B: stronger editorial/personality shift.
- Direction C: boldest brand-appropriate direction.

They must differ in composition, typography, density and interaction language — not merely color.

Select one direction using:
- brand fit
- differentiation
- usability
- content fit
- technical feasibility
- mobile viability

## Phase C — Build one screen first

Implement only the highest-signal surface first, usually the homepage hero plus the first content transition.

Do not build the full site before validating the visual language.

Checkpoint questions:
- Does this feel materially different from the previous design?
- Does it still make sense with the logo hidden?
- Is the first screen memorable for the right reason?
- Is the brand visible through typography, composition and image treatment — not just color?

If not, stop and return to art direction.

## Phase D — Systemize

After the pilot screen is approved:

1. extract semantic tokens
2. define component contracts
3. document typography and spacing
4. document image treatment
5. document motion
6. document responsive recomposition rules

Only then propagate across the site.

## Phase E — Motion pass

Create a motion map before adding animations:

| Moment | Purpose | Trigger | Property | Duration/easing | Reduced motion |
| --- | --- | --- | --- | --- | --- |
| Hero entry | establish hierarchy | initial load | opacity/transform | project tokens | immediate |
| CTA press | confirm input | pointer/key | scale/transform | fast token | none |
| Section reveal | guide reading | viewport | transform/opacity | normal token | immediate |

No animation exists without a written purpose.

## Phase F — Quality loop

Run independent passes for:

1. visual critique
2. responsive/layout
3. accessibility
4. motion/performance
5. anti-generic review
6. final polish

A pass must be allowed to send the work backward. QA is not a box-ticking stage.

## Definition of done

A project is not design-complete unless:

- its direction is recognisable without brand logo;
- it does not visually clone another Mister IA project;
- mobile has intentional composition;
- semantic tokens drive visual values;
- interactive controls have clear states;
- motion has purpose and reduced-motion behavior;
- major accessibility checks pass;
- screenshots have been reviewed at mobile and desktop sizes;
- the anti-generic gate passes;
- the implementation matches the Design Bible rather than the component library defaults.