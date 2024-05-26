import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const OurService = () => {
  const items = [
    {
      icon: "shower.svg",
      title: "Bathrooms",
    },
    {
      icon: "windows.svg",
      title: "Windows ",
    },
    {
      icon: "roofs.svg",
      title: "Roofs ",
    },
    {
      icon: "hand-lg.svg",
      title: "Energy Roofs ",
    },
  ];
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <H2>Our Service Range</H2>
        <div>
          <p className="text-lg">
            No matter the project, you can start building today
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center mt-16">
        {items.map((item, i) => {
          return <Item key={i} icon={item.icon} title={item.title} />;
        })}
      </div>
    </div>
  );
};

type ItemProps = {
  icon: string;
  title: string;
};
const Item = ({ icon, title }: ItemProps) => {
  return (
    <div className="rounded-xl bg-gray-100 p-12 h-full">
      <div className="flex flex-col gap-6 items-center justify-between">
        <Image src={`/vectors/${icon}`} width={56} height={56} alt="icon" />

        <p className="font-medium text-2xl">{title}</p>
      </div>
    </div>
  );
};
