import { Label } from "@/components/ui/form/label/Label";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { Radio } from "@/components/ui/form/input/Radio";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";

export const Step2 = () => {
  const [error, setError] = useState<string>();
  const { setForm, form } = useContext(EstimateContext);

  const statuses = [
    {
      value: "ready-to-start",
      label:
        "I’m ready to start my renovation and need help finding a contractor",
    },
    {
      value: "planning",
      label:
        "I’m planning to renovate in the next 6-12 months and need guidance",
    },
    { value: "browsing", label: "I’m just browsing" },
  ];

  const handleNext = () => {
    setError("");
    if (form.status.length > 0)
      setForm((prevState: formData) => ({
        ...prevState,
        step: 3,
      }));
    else setError("Please select one option");
  };

  return (
    <>
      <ContainerSteps>
        <Label>What’s the status of your project?</Label>
        <div className="flex flex-col gap-4">
          {statuses.map((status, i) => {
            return (
              <Radio
                key={i}
                label={status.label}
                name="status"
                checked={status.value === form.status}
                value={status.value}
                onChange={() =>
                  setForm((prevState: formData) => ({
                    ...prevState,
                    status: status.value,
                  }))
                }
              />
            );
          })}

          {error && (
            <p className="text-xs ml-4 text-red-500 font-medium">{error}</p>
          )}
        </div>
      </ContainerSteps>

      <div className="flex justify-between mt-8 md:mt-16">
        <Button
          className="min-w-40 border-2 border-gray-200"
          variant="secondary"
          onClick={() => {
            setForm((prevState: formData) => ({
              ...prevState,
              step: 1,
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
