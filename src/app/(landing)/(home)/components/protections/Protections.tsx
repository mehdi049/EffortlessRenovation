import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const Protections = () => {
  const items = [
    {
      icon: "hand-dollar-lg.svg",
      title: "Price Assurance",
      description: "No unwarranted price hikes ",
    },
    {
      icon: "calendar-dollar.svg",
      title: "Milestone-Based Payments ",
      description: "Pay confidently at key project stages.",
    },
    {
      icon: "support.svg",
      title: "Escalation Support ",
      description: "We're here to promptly and fairly resolve any issues.",
    },
    {
      icon: "trust.svg",
      title: "Workmanship Warranty ",
      description: "Trust in the quality of your renovation.",
    },
  ];
  return (
    <div>
      <p className="text-2xl font-medium">
        Effortless Protections: Extra Peace of Mind
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center mt-8">
        {items.map((item, i) => {
          return (
            <Item
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

type ItemProps = {
  icon: string;
  title: string;
  description: string;
};
const Item = ({ icon, title, description }: ItemProps) => {
  return (
    <div className="rounded-xl bg-gray-100 p-4 h-full">
      <div className="flex flex-col gap-4 md:max-w-44">
        <Image
          src={`/vectors/${icon}`}
          width={34}
          height={34}
          alt="icon"
          className="h-8"
        />

        <p className="font-medium text-xl">{title}</p>

        <p>{description}</p>
      </div>
    </div>
  );
};
