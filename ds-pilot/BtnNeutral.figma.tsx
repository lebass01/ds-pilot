import React from 'react';
import figma, { html } from '@figma/code-connect';
import { BtnNeutral } from './BtnNeutral';


/**
 * Code Connect mapping for btn-neutral
 * Figma file: 01-Foundations (wFIIgmTnL2W6tJK9ExyISz)
 * Node: 14452:7638
 *
 * Docs: https://www.figma.com/developers/code-connect
 */
figma.connect(
  BtnNeutral,
  'https://www.figma.com/design/wFIIgmTnL2W6tJK9ExyISz/01-Foundations?node-id=14452-7638',
  {
    props: {
      // Variant props — map Figma variant values to component prop values
      size: figma.enum('Size', {
        sm: 'sm',
        default: 'default',
      }),
      style: figma.enum('Style', {
        fill: 'fill',
        'fill (subtle)': 'fill-subtle',
        outline: 'outline',
        ghost: 'ghost',
      }),
      disabled: figma.enum('State', {
        disabled: true,
      }),
      inverse: figma.enum('Inverse', {
        true: true,
        false: false,
      }),
      iconOnly: figma.enum('Icon Only', {
        true: true,
        false: false,
      }),

      // Component props — boolean + instance swap
      showIconBefore: figma.boolean('Show Icon Before'),
      showIconAfter:  figma.boolean('Show Icon After'),
      iconBefore:     figma.instance('Icon Before'),
      iconAfter:      figma.instance('Icon After'),
      icon:           figma.instance('Icon'),

      // Pull label text from the nested text layer
      label: figma.textContent('Label'),
    },

    example: ({
      label,
      size,
      style,
      inverse,
      iconOnly,
      iconBefore,
      iconAfter,
      icon,
      showIconBefore,
      showIconAfter,
      disabled,
    }) => (
      <BtnNeutral
        label={label}
        size={size}
        style={style}
        inverse={inverse}
        iconOnly={iconOnly}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        icon={icon}
        showIconBefore={showIconBefore}
        showIconAfter={showIconAfter}
        disabled={disabled}
      />
    ),
  }
);
