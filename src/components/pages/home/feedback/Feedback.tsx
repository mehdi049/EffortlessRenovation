import Image from "next/image";

export const Feedback = () => {
  const items = [
    {
      profile: "profile1.svg",
      text: "Affordable, efficient",
    },
    {
      profile: "profile2.svg",
      text: "Streamlined the whole renovation process for us.",
    },
    {
      profile: "profile3.svg",
      text: "EaMakeovers!",
    },
  ];
  const items2 = [
    {
      profile: "profile3.svg",
      text: "“Our go-to for hassle-free home upgrades.“",
    },
    {
      profile: "profile4.svg",
      text: "Top-Notch and Easy",
    },
    {
      profile: "profile1.svg",
      text: "“Effortless Renovations—Simply Amazing”",
    },
  ];
  return (
    <div className="mb-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex gap-4 items-center justify-center md:justify-start animate-infinite-scroll">
        {items.map((item, i) => {
          return <Item key={i} profile={item.profile} text={item.text} />;
        })}
        {items.map((item, i) => {
          return <Item key={i} profile={item.profile} text={item.text} />;
        })}
      </div>
      <div
        className="flex gap-4 items-center justify-center md:justify-start animate-infinite-scroll mt-4"
        aria-hidden="true"
      >
        {items2.map((item, i) => {
          return <Item key={i} profile={item.profile} text={item.text} />;
        })}
        {items2.map((item, i) => {
          return <Item key={i} profile={item.profile} text={item.text} />;
        })}
      </div>
    </div>
  );
};

type ItemProps = {
  profile: string;
  text: string;
};
const Item = ({ profile, text }: ItemProps) => {
  return (
    <div className="rounded-full p-2 pr-8 bg-gray-100 flex gap-4 items-center justify-start min-w-max">
      <Image
        src={`/vectors/${profile}`}
        alt="profile"
        height={53}
        width={53}
        className="rounded-full"
      />
      <p className="text-xl">“{text}“</p>
    </div>
  );
};
