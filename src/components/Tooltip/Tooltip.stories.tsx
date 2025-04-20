import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text content',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to its children',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    text: 'This is a tooltip on top',
    position: 'top',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    text: 'This is a tooltip on the right',
    position: 'right',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    text: 'This is a tooltip at the bottom',
    position: 'bottom',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    text: 'This is a tooltip on the left',
    position: 'left',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
  },
};