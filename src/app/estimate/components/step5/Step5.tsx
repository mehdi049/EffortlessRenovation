import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";
import { ZodError, string, z } from "zod";

const formInputs = z.object({
  phone: string({
    required_error: "Field required",
  }).min(1, {
    message: "Field required",
  }),
});

export const Step5 = () => {
  const [error, setError] = useState<string>();
  const { setForm, form } = useContext(EstimateContext);

  const handleSubmit = () => {
    setError("");
    try {
      formInputs.parse({
        phone: form.phone,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors;
        setError(errors.find((err) => err.path.includes("phone"))?.message);
      }
    }
  };

  return (
    <>
      <ContainerSteps>
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
          error={error}
        />
      </ContainerSteps>

      <div className="flex justify-between mt-8 md:mt-16">
        <Button
          className="min-w-40 border-2 border-gray-200"
          variant="secondary"
          onClick={() => {
            setForm((prevState: formData) => ({
              ...prevState,
              step: 4,
            }));
          }}
        >
          Back
        </Button>

        <Button className="min-w-40" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};
