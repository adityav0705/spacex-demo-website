import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-white fixed h-screen w-screen top-0 left-0 bg-opacity-40 flex justify-center items-center z-10">
      <div className="w-[800px] bg-black h-[80%] rounded-xl p-16">
        <div className="flex justify-end">
          <button onClick={closeModal}>close</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
