import * as React from "react";

export const Heading: React.FC = ({ children }) => (
  <h1 className="flex  my-6 sm:my-8 text-2xl text-indigo-600 dark:text-indigo-400 font-semibold">
    {children}
  </h1>
);
