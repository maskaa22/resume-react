import c from "./Icon.module.css";

const SPRITE = `${import.meta.env.BASE_URL}symbol-defs.svg`;

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
