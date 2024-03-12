function ActionButton({ icon, action }) {
  return (
    <button
      onClick={action}
      className="border border-lightGray rounded-lg p-1 focus:bg-lightGray transition-colors duration-300 ease-in-out hover:bg-lightGray hover:text-white active:bg-lightGray active:text-white focus:outline-none"
    >
      <img src={icon} alt="icon" />
    </button>
  );
}

export default ActionButton;
