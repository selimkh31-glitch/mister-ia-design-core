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
7. `agent/UI_SKILLS_ROUTER.md`
8. `workflows/FULL_DESIGN_LOOP.md` for major redesigns

For UI work, route the task through UI Skills before implementation:

```bash
npx ui-skills start
npx ui-skills categories
npx ui-skills list --category '<category>'
npx ui-skills get '<skill>'
```

Use 1 skill by default, 2 when two clear angles are needed, and no more than 3 in a single pass. A major redesign must use multiple passes rather than one giant prompt.

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
- For substantial redesigns, validate the highest-signal screen before propagating the visual language to the full site.
- Structural reordering alone does not count as a redesign if the perceptual identity remains materially unchanged.

## Full-redesign sequence

Use the router in `agent/UI_SKILLS_ROUTER.md` and work through:

1. evidence / design DNA
2. art direction
3. layout / responsive composition
4. implementation craft
5. motion / interaction
6. accessibility / performance
7. anti-generic critique
8. launch polish

A QA pass is allowed to send work back to an earlier phase.

## Completion gate

A UI task is not complete until it passes:

- the applicable checks in `/quality-gates.json`;
- responsive review at narrow mobile, tablet and desktop widths;
- keyboard/focus review for interactive surfaces;
- contrast and legibility review;
- typography hierarchy review;
- spacing/radius/shadow consistency review;
- motion/reduced-motion review when animation exists;
- anti-generic review using `/design/DESIGN-QA.md`;
- perceptual-difference review against the previous surface for redesign work.

When a choice conflicts with the project design bible, the project design bible wins over reusable component defaults.