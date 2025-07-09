import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ShowErrorForm from "./ShowErrorForm";

interface InputTextProps extends React.ComponentProps<"input"> {
  label: string;
  placeholder?: string;
  error?: string;
}

export default function InputText({
  label,
  placeholder,
  error,
  ...props
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={props.name}>{label}</Label>
      <Input placeholder={placeholder} {...props} />
      <ShowErrorForm message={error || ""} />
    </div>
  );
}
