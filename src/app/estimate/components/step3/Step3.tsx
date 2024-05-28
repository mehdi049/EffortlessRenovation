import { Label } from "@/components/ui/form/label/Label";
import { Multi } from "@/components/ui/form/multi/Multi";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";

const items = [
  "Bathroom",
  "Kitchen",
  "Addition",
  "Attic",
  "Basement",
  "Bedroom",
  "Deck",
  "Foyer",
  "Garage",
  "House Exterior",
  "Laundry",
  "Living Space",
  "Roofing",
  "Yard",
  "Something Else",
];

export const Step3 = () => {
  const [error, setError] = useState<string>();
  const { setForm, form } = useContext(EstimateContext);

  const handleItem = (item: string) => {
    setError("");
    let items: string[] = [...form.renovate];
    if (items.includes(item)) items = items.filter((x) => x !== item);
    else items.push(item);

    setForm((prevState: formData) => ({
      ...prevState,
      renovate: items,
    }));
  };

  const handleNext = () => {
    setError("");
    if (form.renovate.length > 0)
      setForm((prevState: formData) => ({
        ...prevState,
        step: 4,
      }));
    else setError("Please select at least one option");
  };

  return (
    <>
      <ContainerSteps>
        <Label helper="You can adjust these details later, but the more accurate you are now, the better your estimate will be. Your room details let us understand if your layout is unique or if there are signs that additional work may be needed.">
          What do you want to renovate?
        </Label>
        <div>
          <Multi onSelect={handleItem} values={items} />

          {error && (
            <p className="mt-4 text-xs ml-4 text-red-500 font-medium">
              {error}
            </p>
          )}

          {form.renovate.length > 0 && (
            <div className="mt-4 bg-gray-200 rounded-md p-2">
              {form.renovate.map((item, i) => {
                return (
                  <p key={i} className="p-2 border-b border-gray-200">
                    {item}
                  </p>
                );
              })}
            </div>
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
              step: 2,
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
