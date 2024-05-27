import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";

export const Step5 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <Label helper="Your phone number will only be used to help plan your project.">
        What’s your phone number?
      </Label>
      <Input placeholder="Phone Number" />
    </div>
  );
};
