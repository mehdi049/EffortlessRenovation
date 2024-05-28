import { Input } from "@/components/ui/form/input/Input";
import { Label } from "@/components/ui/form/label/Label";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";
import { ZodError, string, z } from "zod";

const formInputs = z.object({
  name: string({
    required_error: "Field required",
  }).min(1, {
    message: "Field required",
  }),
  email: string()
    .min(1, {
      message: "Field required",
    })
    .email({
      message: "Invalid email address",
    }),
  refCode: string(),
});

export const Step4 = () => {
  const [errorName, setErrorName] = useState<string>();
  const [errorEmail, setErrorEmail] = useState<string>();
  const { setForm, form } = useContext(EstimateContext);

  const handleNext = () => {
    setErrorName("");
    setErrorEmail("");
    try {
      formInputs.parse({
        name: form.name,
        email: form.email,
        refCode: form.referralCode,
      });
      setForm((prevState: formData) => ({
        ...prevState,
        step: 5,
      }));
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        const errors = error.errors;
        setErrorName(errors.find((err) => err.path.includes("name"))?.message);
        setErrorEmail(
          errors.find((err) => err.path.includes("email"))?.message
        );
      }
    }
  };
  return (
    <>
      <ContainerSteps>
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
            error={errorName}
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
            error={errorEmail}
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
      </ContainerSteps>

      <div className="flex justify-between mt-8 md:mt-16">
        <Button
          className="min-w-40 border-2 border-gray-200"
          variant="secondary"
          onClick={() => {
            setForm((prevState: formData) => ({
              ...prevState,
              step: 3,
            }));
          }}
        >
          Back
        </Button>
        <Button className="min-w-40" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};
