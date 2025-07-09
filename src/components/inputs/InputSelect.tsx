import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";

interface SelectProps {
  label: string;
  value: string;
}

interface InputSelectProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  options: SelectProps[];
}

export default function InputSelect({ options, ...props }: InputSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label>Select Filter</Label>
      <Select {...props}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {options?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
