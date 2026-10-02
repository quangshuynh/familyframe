/** Small inline icons. All are decorative; controls carry their own labels. */
type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
});

export const ExpandIcon = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
);

export const CloseIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronIcon = ({
  size = 20,
  direction = 'right',
}: IconProps & { direction?: 'left' | 'right' | 'down' }) => {
  const d = { right: 'M9 6l6 6-6 6', left: 'M15 6l-6 6 6 6', down: 'M6 9l6 6 6-6' }[direction];
  return (
    <svg {...base(size)}>
      <path d={d} />
    </svg>
  );
};

export const GlobeIcon = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

export const MenuIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const ArrowIcon = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const PlusIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
