const Loader = ({ label = "Loading" }) => {
  return (
    <div
      className="flex items-center justify-center gap-3 text-sm font-black text-[#76665c]"
      role="status"
      aria-live="polite"
    >
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#eadfd4] border-t-[#e2361d]" />
      {label}
    </div>
  );
};

export default Loader;
