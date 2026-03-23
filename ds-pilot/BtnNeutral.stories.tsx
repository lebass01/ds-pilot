import type { Meta, StoryObj } from '@storybook/react';
import { BtnNeutral } from './BtnNeutral';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof BtnNeutral> = {
  title: 'RMG / Buttons / BtnNeutral',
  component: BtnNeutral,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default'],
      description: 'sm = 32px height, default = 40px height',
    },
    style: {
      control: 'select',
      options: ['fill', 'fill-subtle', 'outline', 'ghost'],
      description: 'Visual treatment',
    },
    inverse: {
      control: 'boolean',
      description: 'Use on dark or coloured backgrounds',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Renders icon only — no label',
    },
    showIconBefore: {
      control: 'boolean',
    },
    showIconAfter: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Button',
    size: 'sm',
    style: 'fill',
    inverse: false,
    iconOnly: false,
    showIconBefore: false,
    showIconAfter: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BtnNeutral>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default fill button — the most common usage */
export const Default: Story = {};

/** All four styles side by side */
export const AllStyles: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <BtnNeutral {...args} style="fill"        label="Fill" />
      <BtnNeutral {...args} style="fill-subtle" label="Fill subtle" />
      <BtnNeutral {...args} style="outline"     label="Outline" />
      <BtnNeutral {...args} style="ghost"       label="Ghost" />
    </div>
  ),
};

/** Both sizes */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <BtnNeutral {...args} size="sm"      label="Small" />
      <BtnNeutral {...args} size="default" label="Default" />
    </div>
  ),
};

/** All interactive states */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <BtnNeutral {...args} label="Default" />
      <BtnNeutral {...args} label="Disabled" disabled />
    </div>
  ),
};

/** Inverse variants — shown on a dark background */
export const Inverse: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        padding: '24px',
        background: '#1a1a1a',
        borderRadius: '8px',
      }}
    >
      <BtnNeutral {...args} inverse style="fill"        label="Fill" />
      <BtnNeutral {...args} inverse style="fill-subtle" label="Fill subtle" />
      <BtnNeutral {...args} inverse style="outline"     label="Outline" />
      <BtnNeutral {...args} inverse style="ghost"       label="Ghost" />
    </div>
  ),
};

/** Disabled state — fill and fill-subtle share the same disabled treatment */
export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <BtnNeutral {...args} disabled style="fill"    label="Fill disabled" />
      <BtnNeutral {...args} disabled style="outline" label="Outline disabled" />
      <BtnNeutral {...args} disabled style="ghost"   label="Ghost disabled" />
    </div>
  ),
};
