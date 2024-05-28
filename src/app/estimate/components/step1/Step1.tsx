import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";
import { ZodError, string, z } from "zod";

const formInputs = z.object({
  zipAddress: string({
    required_error: "Field required",
  }).min(1, {
    message: "Field required",
  }),
});

export const Step1 = () => {
  const [error, setError] = useState<string>();
  const { setForm, form } = useContext(EstimateContext);
  const handleNext = () => {
    setError("");
    try {
      formInputs.parse({
        zipAddress: form.zip,
      });
      setForm((prevState: formData) => ({
        ...prevState,
        step: 2,
      }));
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors;
        setError(
          errors.find((err) => err.path.includes("zipAddress"))?.message
        );
      }
    }
  };
  return (
    <>
      <ContainerSteps>
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
            error={error}
          />
        </div>
      </ContainerSteps>

      <div className="flex justify-end mt-8 md:mt-16">
        <Button className="min-w-40" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};
