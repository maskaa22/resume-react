import c from "./GlowCard.module.css";

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
