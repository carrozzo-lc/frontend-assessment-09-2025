type DividerProps = {
  text: string;
};

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center">
      <div
        aria-hidden="true"
        className="w-full border-t border-gray-300 dark:border-white/15"
      />
      <div className="relative flex justify-center">
        <span className="px-2 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400">
          {text}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="w-full border-t border-gray-300 dark:border-white/15"
      />
    </div>
  );
};

export default Divider;
