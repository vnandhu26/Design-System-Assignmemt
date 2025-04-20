import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TopNavBar from './TopNavBar';

const meta: Meta<typeof TopNavBar> = {
  title: 'Components/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

export const Default: Story = {
  render: () => <TopNavBar />,
};