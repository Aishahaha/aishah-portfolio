function ProjectCard({ image, tags, title, description, link }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors">
      {/* Image */}
      <div className="h-70 bg-neutral-100 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-neutral-400">
            project screenshot
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm border border-neutral-200 rounded-full px-3 py-1 text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-medium text-lg text-neutral-900 mb-1">{title}</h3>

        <p className="text-md text-neutral-500 leading-relaxed">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-neutral-900 border-b border-neutral-900 hover:opacity-60 transition-opacity"
          >
            View project →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
