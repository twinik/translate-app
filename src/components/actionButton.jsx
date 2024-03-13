function ActionButton({ icon, action, extraStyles }) {
  return (
    <button
      onClick={action}
      className={`${extraStyles} border-2 hover:border-smokeWhite border-lightGray rounded-xl p-1 transition-all ease-in-out h-8 w-8`}
    >
      <img src={icon} alt="icon" />
    </button>
  );
}

export default ActionButton;
