import ExpandIcon from "/Expand_down.svg";

function ExpandButton() {
  return (
    <button className="flex justify-center items-center transition-all ease-in-out h-8 w-8 hover:bg-lightGray rounded-full">
      <img src={ExpandIcon} alt="icon" />
    </button>
  );
}

export default ExpandButton;
