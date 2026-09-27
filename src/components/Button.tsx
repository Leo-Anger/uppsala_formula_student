import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600";

export default function Button({
  children,
  className = "",
  href,
  type = "button",
}: ButtonProps) {
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
