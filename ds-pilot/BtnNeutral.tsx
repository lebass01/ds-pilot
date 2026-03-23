import React from 'react';
import './BtnNeutral.css';

// ─── Types ────────────────────────────────────────────────────────────────────

export type BtnNeutralSize    = 'sm' | 'default';
export type BtnNeutralStyle   = 'fill' | 'fill-subtle' | 'outline' | 'ghost';
export type BtnNeutralState   = 'default' | 'hover' | 'focus' | 'active' | 'disabled';

export interface BtnNeutralProps {
  /** Button label — ignored when iconOnly is true */
  label?: string;
  /** sm = 32px height, default = 40px height */
  size?: BtnNeutralSize;
  /** Visual treatment */
  style?: BtnNeutralStyle;
  /** Use on dark or coloured backgrounds */
  inverse?: boolean;
  /** Renders icon only, no label */
  iconOnly?: boolean;
  /** Icon rendered before the label */
  iconBefore?: React.ReactNode;
  /** Icon rendered after the label */
  iconAfter?: React.ReactNode;
  /** Icon used when iconOnly is true */
  icon?: React.ReactNode;
  /** Show the before icon slot */
  showIconBefore?: boolean;
  /** Show the after icon slot */
  showIconAfter?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Additional class names */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const BtnNeutral: React.FC<BtnNeutralProps> = ({
  label = 'Button',
  size = 'sm',
  style = 'fill',
  inverse = false,
  iconOnly = false,
  iconBefore,
  iconAfter,
  icon,
  showIconBefore = true,
  showIconAfter = true,
  disabled = false,
  onClick,
  className = '',
}) => {
  const classes = [
    'btn-neutral',
    `btn-neutral--size-${size}`,
    `btn-neutral--style-${style}`,
    inverse      ? 'btn-neutral--inverse'   : '',
    iconOnly     ? 'btn-neutral--icon-only' : '',
    disabled     ? 'btn-neutral--disabled'  : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-label={iconOnly ? label : undefined}
    >
      {!iconOnly && showIconBefore && iconBefore && (
        <span className="btn-neutral__icon btn-neutral__icon--before">
          {iconBefore}
        </span>
      )}

      {iconOnly
        ? icon && <span className="btn-neutral__icon btn-neutral__icon--only">{icon}</span>
        : <span className="btn-neutral__label">{label}</span>
      }

      {!iconOnly && showIconAfter && iconAfter && (
        <span className="btn-neutral__icon btn-neutral__icon--after">
          {iconAfter}
        </span>
      )}
    </button>
  );
};

export default BtnNeutral;
