import c from "./GlowCard.module.css";

/**
 * Card with a pointer-following spotlight (fill + glowing border + soft halo).
 *
 * The component itself is purely presentational: it reads the pointer position
 * from the CSS variables --x, --y and --xp, which a parent sets once for all
 * cards (see `useGlowPointer`). That keeps it to a single pointermove listener
 * no matter how many cards are on the page.
 *
 * glowBase   – hue (0–360) at the left edge of the viewport
 * glowSpread – how far the hue travels towards the right edge (can be negative)
 */
export default function GlowCard({
  as: Tag = "div",
  className = "",
  glowBase = 24,
  glowSpread = -55,
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${c.glow} ${className}`}
      style={{ "--glow-base": glowBase, "--glow-spread": glowSpread }}
      {...rest}
    >
      <span className={c.halo} aria-hidden="true" />
      {children}
    </Tag>
  );
}
