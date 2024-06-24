import React from "react";

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className="bg-[#191919]/70 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-end bg-[#252525] w-8/12 p-5  rounded-xl lg:w-1/2">
              <button onClick={() => setModal(false)} className="text-2xl mb-3">
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
