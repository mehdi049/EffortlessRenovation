import { Label } from "@/components/ui/form/label/Label";
import { useContext } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { Radio } from "@/components/ui/form/input/Radio";

export const Step2 = () => {
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

  return (
    <>
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
      </div>
    </>
  );
};
