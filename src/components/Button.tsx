type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 ${className}`}
    >
      {children}
    </button>
  );
}
