import * as React from "react";

interface BlogPreviewProps {
  icon: any;
  title: string;
  date: string
  description: string
  tags: string[];
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({
  icon,
  title,
  tags,
  description,
  date
}) => {
  return (
    <div className="flex flex-row justify-between w-full mb-4">
      <div className="flex w-max">
        <div className="pr-2 text-lg">{icon}</div>
        <div className="flex flex-col">
          <div className="font-medium text-lg  cursor-pointer">{title}</div>
          <div className="mt-1 cursor-pointer">
            {description}
          </div>
          <div className="flex mt-2">
            {tags.map((t, i) => (
              <div
                key={i}
                className="pl-2 pr-2 mr-2 last:mr-0 border rounded-full border-indigo-400 text-gray-600 dark:text-gray-200"
              >
                {t}
              </div>
            ))}

          </div>

        </div>

      </div>
      <div className="hidden sm:flex w-max">
        <div className="text-gray-600 dark:text-gray-200">{date}</div>
      </div>
    </div>
  );
};


