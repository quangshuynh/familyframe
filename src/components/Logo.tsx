/** FamilyFrame wordmark: a small frame split into original / restored halves. */
export function Logo() {
  return (
    <span className="logo">
      <svg
        className="logo__mark"
        viewBox="0 0 28 28"
        width="26"
        height="26"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="2"
          y="2"
          width="24"
          height="24"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 2v24" stroke="var(--accent-light)" strokeWidth="2" />
        <path
          d="M2.5 19.5l6.5-6 5 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="9.5" r="2" fill="currentColor" />
      </svg>
      <span className="logo__word">FamilyFrame</span>
    </span>
  );
}
