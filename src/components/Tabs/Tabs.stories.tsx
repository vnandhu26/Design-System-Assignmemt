import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: { type: 'object' },
      description: 'Array of tab labels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: ['Overview', 'Details', 'Settings'],
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: ['Profile', 'Account'],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: ['Home', 'Products', 'Services', 'About', 'Contact', 'Blog'],
  },
};
