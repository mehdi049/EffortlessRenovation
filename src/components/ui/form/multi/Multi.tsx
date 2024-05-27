type MultiProps = {
  values: string[];
  onSelect: (item: string) => void;
};
export const Multi = ({ values, onSelect }: MultiProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value, i) => {
        return <Item onSelect={onSelect} value={value} key={i} />;
      })}
    </div>
  );
};

type ItemProps = {
  value: string;
  selected?: boolean;
  onSelect: (item: string) => void;
};
const Item = ({ value, selected, onSelect }: ItemProps) => {
  return (
    <span
      className={`p-2 border rounded-md hover:bg-gray-200 duration-200  cursor-pointer ${
        selected ? "bg-gray-200" : "bg-white"
      } `}
      onClick={() => onSelect(value)}
    >
      {value}
    </span>
  );
};
