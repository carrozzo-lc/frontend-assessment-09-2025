type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="mb-10 rounded-2xl border border-gray-300 bg-gray-200 p-4">
      {title && <h2 className="mb-4">{title}</h2>}
      <div className="rounded-2xl bg-gray-50 px-4 py-6">{children}</div>
    </div>
  );
};

export default Card;
