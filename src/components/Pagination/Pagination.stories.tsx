import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback when page changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWithState = (args: any) => {
  const [page, setPage] = useState(args.currentPage);
  return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};

export const Default: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const SinglePage: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};