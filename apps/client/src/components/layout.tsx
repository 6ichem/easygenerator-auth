import React from "react";

interface FormLayoutProps {
  children: JSX.Element;
  title: string;
  description: string;
}

export default function FormLayout({
  children,
  title,
  description,
}: FormLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
