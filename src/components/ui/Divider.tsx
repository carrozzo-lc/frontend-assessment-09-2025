type DividerProps = {
  text: string;
};

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center">
      <div
        aria-hidden="true"
        className="w-full border-t border-gray-300 "
      />
      <div className="relative flex justify-center">
        <span className="px-2 text-sm text-gray-500 ">
          {text}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="w-full border-t border-gray-300 "
      />
    </div>
  );
};

export default Divider;
