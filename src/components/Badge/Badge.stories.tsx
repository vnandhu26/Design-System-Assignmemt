import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the badge',
    },
    color: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'default'],
      description: 'Color variant of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Default',
    color: 'default',
  },
};

export const Success: Story = {
  args: {
    text: 'Success',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    text: 'Error',
    color: 'error',
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    color: 'warning',
  },
};

export const Info: Story = {
  args: {
    text: 'Info',
    color: 'info',
  },
};