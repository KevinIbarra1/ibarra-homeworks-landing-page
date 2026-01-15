import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary";
}

export default function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-blue-600 text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
