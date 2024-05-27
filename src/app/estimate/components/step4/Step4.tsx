import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";

export const Step4 = () => {
  const { setForm, form } = useContext(EstimateContext);
  return (
    <>
      <Label helper="And don't worry— all contact information is protected, and only used to tell you more about your estimate.">
        Take the next step in planning your project with Block!
      </Label>
      <div className="flex flex-col gap-6">
        <Input
          placeholder="First & Last Name"
          value={form.name}
          onChange={(event) =>
            setForm((prevState: formData) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
        <Input
          placeholder="Email Address"
          value={form.email}
          onChange={(event) =>
            setForm((prevState: formData) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />
        <Input
          placeholder="Referral Code"
          value={form.referralCode}
          onChange={(event) =>
            setForm((prevState: formData) => ({
              ...prevState,
              referralCode: event.target.value,
            }))
          }
        />
      </div>
    </>
  );
};
