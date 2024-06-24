const ButtonWrapper = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white dark:text-neutral-200 transition duration-500"
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
