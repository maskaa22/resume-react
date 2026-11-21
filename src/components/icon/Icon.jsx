import c from "./Icon.module.css";

// Sprite lives in /public, so it is served as-is (no content hash in the name).
// BASE_URL keeps the path correct if the site is ever deployed to a sub-folder.
const SPRITE = `${import.meta.env.BASE_URL}symbol-defs.svg`;

/**
 * Icon from the SVG sprite. `name` is the symbol id without the "icon-" prefix,
 * e.g. <Icon name="github" /> → #icon-github. Size follows the parent's
 * font-size and colour follows `color` (currentColor).
 */
export default function Icon({ name, className = "", ...rest }) {
  return (
    <svg
      className={`${c.icon} ${className}`}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <use href={`${SPRITE}#icon-${name}`} />
    </svg>
  );
}
