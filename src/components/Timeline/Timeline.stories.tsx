import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Timeline from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of timeline items with title, description, and date',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Project Started',
        description: 'Initialized the project repository',
        date: 'Jan 1, 2023',
      },
      {
        title: 'First Milestone',
        description: 'Completed the core functionality',
        date: 'Feb 15, 2023',
      },
      {
        title: 'Beta Release',
        description: 'Released the beta version to testers',
        date: 'Apr 1, 2023',
      },
    ],
  },
};