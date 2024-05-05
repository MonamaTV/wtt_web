import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  options: {
    name: string;
    value: string;
  }[];
  handleOnChange: (value: string) => void;
  header: string;
}

const SelectScroll = ({ options, handleOnChange, header }: SelectProps) => {
  return (
    <Select onValueChange={handleOnChange}>
      <SelectTrigger className="w-[130px] border dark:bg-[#09090b] dark:border-gray-900 bg-inherit rounded-none">
        <SelectValue placeholder={header} />
      </SelectTrigger>
      <SelectContent className="dark:bg-[#09090b] rounded-none outline-none">
        {options.map(({ name, value }, index) => {
          return (
            <SelectItem className="rounded-none" key={index} value={value}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectScroll;
