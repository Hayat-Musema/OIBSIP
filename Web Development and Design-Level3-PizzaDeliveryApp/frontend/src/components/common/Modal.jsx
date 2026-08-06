import { X } from "lucide-react";

const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#201510]/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.24)]">
        <div className="flex items-center justify-between gap-4">
          <h2 id="modal-title" className="text-xl font-black text-[#201510]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd4] text-[#201510] transition hover:border-[#e2361d] hover:text-[#e2361d]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
