import * as React from "react";

interface ProjectProps {
  name: string;
  description: string;
}

export const Project: React.FC<ProjectProps> = ({ name, description }) => {
  return (
    <div className="p-6 border border-indigo-400 dark:border-indigo-200 rounded-md shadow-md hover:shadow-lg active:shadow-xl active:border-indigo-100 active:bg-indigo-100 dark:active:bg-indigo-400 dark:active:border-indigo-400">
      <div className="font-semibold mb-3">{name}</div>
      <div>{description}</div>
    </div>
  );
};
