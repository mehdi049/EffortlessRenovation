import { Label } from "@/components/ui/form/label/Label";
import { Multi } from "@/components/ui/form/multi/Multi";
import { useContext } from "react";
import { EstimateContext, formData } from "../../context/EstimateContext";

export const Step3 = () => {
  const { setForm, form } = useContext(EstimateContext);

  const handleItem = (item: string) => {
    let items: string[] = [...form.renovate];
    if (items.includes(item)) items = items.filter((x) => x !== item);
    else items.push(item);

    setForm((prevState: formData) => ({
      ...prevState,
      renovate: items,
    }));
  };

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
  return (
    <>
      <Label helper="You can adjust these details later, but the more accurate you are now, the better your estimate will be. Your room details let us understand if your layout is unique or if there are signs that additional work may be needed.">
        What do you want to renovate?
      </Label>
      <div>
        <Multi onSelect={handleItem} values={items} />

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
    </>
  );
};
