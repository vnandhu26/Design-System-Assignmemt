import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </>
  );
};

export default Tags;