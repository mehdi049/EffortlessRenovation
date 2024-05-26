import { H3 } from "@/components/ui/typography/H3";
import Image from "next/image";

export const WhyUs = () => {
  const items = [
    {
      icon: "ticket.svg",
      title: "No Sleazy Sales Tactics",
      description:
        "Avoid the long, unpleasant negotiation process with our straightforward and honest pricing. We ensure transparency and trust ",
    },
    {
      icon: "shield-check.svg",
      title: "No Risks",
      description:
        "We ensure you don't fall prey to unpermitted contractors or overpay for your project, providing you with complete security",
    },
    {
      icon: "tags.svg",
      title: "Best Price Guarantee",
      description:
        "We promise the most competitive rates in the industry. If you find a lower rate elsewhere, we will gladly beat or match it for you ",
    },
    {
      icon: "shake-hands.svg",
      title: "Trusted Contractors",
      description:
        "All our contractors are licensed, bonded, insured, and undergo thorough background and business checks. ",
    },
    {
      icon: "medal.svg",
      title: "Quality Assurance",
      description:
        "We only work with American products, factory-trained installers, and offer comprehensive warranties. ",
    },
    {
      icon: "person-circle-check.svg",
      title: "Dedicated Project Manager",
      description:
        "Enjoy a seamless renovation with a dedicated project manager handling all details and communication. ",
    },
  ];

  const highlights = [
    {
      title: "$1M+",
      description: "Total Savings",
    },
    {
      title: "$5,000",
      description: "Customer Avg. Savings",
    },
    {
      title: "10K+ hrs ",
      description: "Time Saved",
    },
    {
      title: "500+",
      description: "Headaches Prevented",
    },
  ];
  return (
    <div>
      <H3 className="text-center">Why Choose Us?</H3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 my-12 md:my-16 lg:px-24">
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 my-16 rounded-xl border border-gray-100 py-8 px-4 shadow-sm">
        {highlights.map((highlight, i) => {
          return (
            <Highlight
              key={i}
              title={highlight.title}
              description={highlight.description}
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
    <div className="flex flex-col gap-4 md:gap-8 items-center justify-center md:max-w-sm">
      <div className="rounded-xl border border-gray-100 p-6">
        <Image src={`/vectors/${icon}`} alt="" width={32} height={32} />
      </div>
      <p className="font-semibold text-xl md:text-2xl">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
};

type HighlightProps = {
  title: string;
  description: string;
};
const Highlight = ({ title, description }: HighlightProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image src={`/vectors/check-round.svg`} alt="" width={32} height={32} />
      <p className="font-semibold text-3xl md:text-4xl text-center">{title}</p>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};
