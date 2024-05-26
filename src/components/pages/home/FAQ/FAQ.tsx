"use client";
import { Button } from "@/components/ui/button/Button";
import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";
import { useState } from "react";
export const FAQ = () => {
  const items = [
    {
      title: "How do you ensure transparency and avoid sleazy sales tactics?",
      text: "Deserunt laborum excepteur qui qui nisi et amet enim culpa deserunt Lorem.",
    },
    {
      title: "How do I request a price match?",
      text: "Deserunt laborum excepteur qui qui nisi et amet enim culpa deserunt Lorem.",
    },
    {
      title: "What safeguards are in place to prevent overpayment?",
      text: "Deserunt laborum excepteur qui qui nisi et amet enim culpa deserunt Lorem.",
    },
    {
      title:
        "How do you handle situations where a competitor offers a lower rate?",
      text: "Deserunt laborum excepteur qui qui nisi et amet enim culpa deserunt Lorem.",
    },
    {
      title: "How does billing work with you?",
      text: "Deserunt laborum excepteur qui qui nisi et amet enim culpa deserunt Lorem.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <H2 className="text-center">Frequently asked questions</H2>

      <div className="flex flex-col gap-4 items-center my-8 md:my-16">
        {items.map((item, i) => {
          return <Item key={i} title={item.title} text={item.text} />;
        })}
      </div>

      <div className="flex gap-4 lg:gap-8 flex-wrap justify-center items-center">
        <p>Do you still have questions about us?</p>
        <Button
          variant="secondary"
          size="sm"
          iconRight={
            <Image
              src={"/vectors/arrow-right.svg"}
              alt=""
              width={16}
              height={16}
            />
          }
        >
          Get in touch
        </Button>
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  text: string;
};
const Item = ({ title, text }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="rounded-lg bg-gray-100 p-4 w-full cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start gap-4">
        <p>{title}</p>
        <Image src={"/vectors/plus.svg"} alt="open" width={25} height={25} />
      </div>
      {isOpen && <p className="mt-2 text-sm">{text}</p>}
    </div>
  );
};
