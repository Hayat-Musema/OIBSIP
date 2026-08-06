const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-tight text-[#201510] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-[#76665c] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
