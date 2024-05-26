import { Button } from "@/components/ui/button/Button";
import Image from "next/image";

type MobileMenuProps = {
  onClose: () => void;
};
export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="w-full h-screen bg-gray-100 p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-end">
        <Image
          src={"/vectors/cross-round-white.svg"}
          height={48}
          width={48}
          alt="close"
          onClick={() => onClose()}
        />
      </div>

      <div className="py-3">
        <Image
          src={"/vectors/logo-black.svg"}
          height={33}
          width={228}
          alt="logo"
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col divide-y divide-gray-300 mt-2">
        <a href="" className="text-black text-lg py-3">
          Why us
        </a>
        <a href="" className="text-black text-lg py-3">
          Our Process
        </a>
        <a href="" className="text-black text-lg py-3">
          Testimonials
        </a>
        <div className="py-3">
          <Button className="w-full text-center">Get An Estimate</Button>
        </div>
      </div>
    </div>
  );
};
