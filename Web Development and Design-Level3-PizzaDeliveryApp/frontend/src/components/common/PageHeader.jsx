const PageHeader = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#201510] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-[#6f5e54]">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
