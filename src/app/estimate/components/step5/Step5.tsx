import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";

export const Step5 = () => {
  const { setForm, form } = useContext(EstimateContext);
  return (
    <>
      <Label helper="Your phone number will only be used to help plan your project.">
        What’s your phone number?
      </Label>
      <Input
        placeholder="Phone Number"
        value={form.phone}
        onChange={(event) =>
          setForm((prevState: formData) => ({
            ...prevState,
            phone: event.target.value,
          }))
        }
      />
    </>
  );
};
