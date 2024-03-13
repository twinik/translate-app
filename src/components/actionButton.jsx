function ActionButton({ icon, action, extraStyles }) {
  return (
    <button
      onClick={action}
      className={`${extraStyles} border hover:border-smokeWhite border-lightGray rounded-lg p-1 transition-all ease-in-out h-8 w-8`}
    >
      <img src={icon} alt="icon" />
    </button>
  );
}

export default ActionButton;
