import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";

export const Step3 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <Label helper="You can adjust these details later, but the more accurate you are now, the better your estimate will be. Your room details let us understand if your layout is unique or if there are signs that additional work may be needed.">
        What do you want to renovate?
      </Label>
      <div>
        <Input placeholder="Zip code or Address" />
      </div>
    </div>
  );
};
