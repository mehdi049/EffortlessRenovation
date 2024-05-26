import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const Allies = () => {
  const items = [
    {
      icon: "hand-dollar.svg",
      title: "Effortless financing",
      description:
        "We assist with financing options to ensure your project fits within your budget. We partner with over 9 lenders, offering 180+ financing options. ",
    },
    {
      icon: "warranties.svg",
      title: "Effortless warranties ",
      description:
        "We stand behind every project with our warranty protection ensuring lasting peace of mind long after the job is done.",
    },
    {
      icon: "permits.svg",
      title: "Effortless permits ",
      description:
        "Our dedicated team takes care of all the necessary permits for your project, ensuring full compliance with local regulations.",
    },
  ];
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
        <H2 className="max-w-xl">
          We&apos;re Your Renovation Allies, Not Salespeople
        </H2>
        <p className="text-lg">
          Our team of expert installers is the backbone of our quality promise.
          With their extensive training and dedication to excellence, they
          ensure every installation meets the highest standards. 
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center mt-8 md:mt-16">
        <Image src={"/images/img1.png"} width={572} height={572} alt="img" />

        <div className="flex flex-col gap-8 md:gap-16 mt-8 md:mt-0">
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
    <div>
      <div className="flex gap-4 items-center">
        <div>
          <Image src={`/vectors/${icon}`} width={32} height={32} alt="icon" />
        </div>
        <p className="font-semibold text-xl md:text-2xl">{title}</p>
      </div>
      <p className="md:text-lg mt-4 max-w-md">{description}</p>
    </div>
  );
};
