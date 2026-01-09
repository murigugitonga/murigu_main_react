export default function AboutSection({
  title,
  children,
}) {
  return (
    <section className="w-full flex flex-col space-y-2">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">
          {title}
        </h2>
      )}

      <div className="mt-2 flex flex-col space-y-2 text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
        {children}
      </div>
    </section>
  );
}
