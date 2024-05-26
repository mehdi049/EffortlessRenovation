import Image from "next/image";
import { Button } from "../button/Button";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center gap-4 py-4">
      <ul className="flex gap-6 items-center">
        <li>
          <Image
            src={"/vectors/logo-black.svg"}
            width={250}
            height={36}
            alt="logo"
            className="cursor-pointer"
          />
        </li>
        <li>
          <a href="#">Why us</a>
        </li>
        <li>
          <a href="#">Our Process</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      <Button size="sm">Contact us</Button>
    </nav>
  );
};
