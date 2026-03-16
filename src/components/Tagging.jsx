import tags from "@/data/tags";

function Tagging() {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-6">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="flex items-center gap-1.5 text-sm text-neutral-600 border border-neutral-200 rounded-full px-3 py-1"
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: tag.color }}
          />
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export default Tagging;
