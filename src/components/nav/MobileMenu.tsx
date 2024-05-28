import { Button } from "@/components/ui/form/button/Button";
import { ROUTES } from "@/routes";
import Image from "next/image";
import Link from "next/link";

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
        <a
          href={ROUTES.HOME + "#why-us"}
          className="text-black text-lg py-3"
          onClick={onClose}
        >
          Why us
        </a>
        <a
          href={ROUTES.HOME + "#our-process"}
          className="text-black text-lg py-3"
          onClick={onClose}
        >
          Our Process
        </a>
        <a
          href={ROUTES.HOME + "#testimonials"}
          className="text-black text-lg py-3"
          onClick={onClose}
        >
          Testimonials
        </a>
        <div className="py-3">
          <Link href={ROUTES.ESTIMATE}>
            <Button className="w-full text-center">Get An Estimate</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
