import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";

export const Step1 = () => {
  const { setForm, form } = useContext(EstimateContext);
  return (
    <>
      <Label helper="The zip code lets us calculate accurate estimates.">
        What is the property’s zip code?
      </Label>
      <div>
        <Input
          placeholder="Zip code or Address"
          value={form.zip}
          onChange={(event) =>
            setForm((prevState: formData) => ({
              ...prevState,
              zip: event.target.value,
            }))
          }
        />
      </div>
    </>
  );
};
