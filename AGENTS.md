# Mister IA Design Protocol

These rules are mandatory for any AI agent modifying product UI.

## Before touching UI

Read, in this order, when present:

1. `/design/BRAND.md`
2. `/design/design.md`
3. `/design/COMPONENTS.md`
4. `/design/MOTION.md`
5. `/design/REFERENCES.md`
6. Existing components and tokens

If the design files contain unresolved placeholders that materially affect visual direction, infer conservatively from the project brief and document the choice in the design files before implementation.

## Non-negotiable rules

- Do not invent arbitrary visual values when a token exists.
- Do not introduce a new visual pattern without a project-specific reason.
- Do not default to generic AI/SaaS aesthetics.
- Do not copy the final visual identity of another Mister IA project.
- Reuse engineering primitives, not brand expression.
- Favor semantic tokens over raw hex, rgb, hsl, oklch, pixel spacing or ad-hoc shadows.
- Preserve strong information hierarchy on mobile, not merely a scaled desktop layout.
- Motion must explain state, hierarchy or interaction; decorative motion alone is insufficient.
- Accessibility and focus states are part of the design, not post-processing.

## Completion gate

A UI task is not complete until it passes:

- responsive review at narrow mobile, tablet and desktop widths;
- keyboard/focus review for interactive surfaces;
- contrast and legibility review;
- typography hierarchy review;
- spacing/radius/shadow consistency review;
- motion/reduced-motion review when animation exists;
- anti-generic review using `/design/DESIGN-QA.md`.

When a choice conflicts with the project design bible, the project design bible wins over reusable component defaults.
