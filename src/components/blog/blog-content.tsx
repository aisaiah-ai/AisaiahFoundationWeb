interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div className="prose-custom mx-auto max-w-3xl">
      {paragraphs.map((paragraph, i) => {
        const trimmed = paragraph.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-12 mb-6 font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
            >
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p
              key={i}
              className="mt-4 text-lg font-semibold text-slate-800"
            >
              {trimmed.replace(/\*\*/g, "")}
            </p>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="mt-4 space-y-2 pl-6">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="text-base leading-relaxed text-slate-600 list-disc"
                >
                  {renderInlineFormatting(item.replace("- ", ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {renderInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-800">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}
