import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";

export const Step8 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <Label helper="The zip code lets us calculate accurate estimates.">
        What is the property’s zip code?
      </Label>
      <Input placeholder="Zip code or Address" />
    </div>
  );
};
