import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";

export const Step4 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <Label helper="And don't worry— all contact information is protected, and only used to tell you more about your estimate.">
        Take the next step in planning your project with Block!
      </Label>
      <div className="flex flex-col gap-6">
        <Input placeholder="First & Last Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Referral Code" />
      </div>
    </div>
  );
};
