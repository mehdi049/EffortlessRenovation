import Image from "next/image";
import { Button } from "../../../ui/button/Button";
import { H3 } from "@/components/ui/typography/H3";

export const HassleFree = () => {
  const items = [
    {
      title: "Site Visit:",
      text: "A skilled professional is dispatched to acquire precise measurements and to better understand your specific project needs.",
    },
    {
      title: "Multiple Bids:",
      text: "We collect comprehensive estimates from multiple reputable service providers, presenting you with extensive options..",
    },
    {
      title: "Negotiation:",
      text: "We actively engage in negotiations to advocate for the most favorable terms and the best prices for you.",
    },
    {
      title: "Choice and Financing:",
      text: "You select the best option. We arrange financing and handle contract details.",
    },
    {
      title: "Post-Purchase Coordination:",
      text: "After selection, we oversee project details, ensuring everything progresses smoothly with your chosen provider.",
    },
    {
      title: "Buyer Protection:",
      text: "Once you've made your provider selection, our team takes charge of overseeing all aspects of your project, ensuring seamless communication and execution from start to finish.",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-col gap-4 md:gap-12 w-full max-w-lg">
        <H3>Hassle-Free Process, Best Price Guaranteed</H3>
        <p className="text-lg">Here&apos;s how it works:</p>
        <Image src={"/images/img2.png"} alt="" width={450} height={500} />
      </div>

      <div className="md:bg-gray-100 md:p-16 md:rounded-xl mt-4 md:mt-0">
        <div className="flex flex-col gap-8 relative">
          <div className="w-[1px] h-full absolute top-0 left-5 bg-gray-300"></div>
          {items.map((item, i) => {
            return (
              <Item key={i} index={i + 1} title={item.title} text={item.text} />
            );
          })}
        </div>

        <Button className="mt-8 md:mt-16">Get An Estimate</Button>
      </div>
    </div>
  );
};

type ItemProps = {
  index: number;
  title: string;
  text: string;
};
const Item = ({ index, title, text }: ItemProps) => {
  return (
    <div className="flex gap-6 md:gap-8 items-start nav-point relative">
      <div>
        <span className="w-10 h-10 flex items-center justify-center text-white bg-black rounded-full relative z-20">
          {index}
        </span>
      </div>
      <p>
        <span className="font-semibold">{title}</span> {text}
      </p>
    </div>
  );
};
