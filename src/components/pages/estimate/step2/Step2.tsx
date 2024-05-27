import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";

export const Step2 = () => {
  const statuses = ["Startup", "Business", "Enterprise"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <Label>What’s the status of your project?</Label>
      <div className="flex flex-col gap-4">
        <Input placeholder="Zip code or Address" />
      </div>
    </div>
  );
};
