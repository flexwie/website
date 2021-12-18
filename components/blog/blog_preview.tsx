import * as React from "react";

interface BlogPreviewProps {
  icon: any;
  title: string;
  tags: string[];
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({
  icon,
  title,
  tags,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="pr-2">{icon}</div>
        <div>{title}</div>
      </div>
      <div className="flex">
        {tags.map((t, i) => (
          <div key={i} className="pl-2 pr-2 mr-2 last:mr-0 border rounded-full border-indigo-600">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};
