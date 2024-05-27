import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import Image from "next/image";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-black">
      <ContainerCenter>
        <div className="p-4 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-4">
            <div className="col-span-1 text-center lg:text-start">
              <Image
                src={"/vectors/logo-white.svg"}
                alt="logo"
                width={253}
                height={36}
                className="mx-auto lg:mx-0"
              />
              <p className="text-white mt-4 lg:mt-8 text-xs opacity-60">
                © {date.getFullYear()} EffortlessRenovation, Inc.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-8">
              <div className="flex gap-6 flex-col">
                <span className="uppercase text-xs text-white opacity-60">
                  About
                </span>
                <a href="#" className="text-xs text-white">
                  About us
                </a>
                <a href="#" className="text-xs text-white">
                  Gallery
                </a>
                <a href="#" className="text-xs text-white">
                  Renovation
                </a>
                <a href="#" className="text-xs text-white">
                  Information
                </a>
                <a href="#" className="text-xs text-white">
                  Employment Opportunities
                </a>
              </div>
              <div className="flex gap-6 flex-col">
                <span className="uppercase text-xs text-white opacity-60">
                  help
                </span>
                <a href="#" className="text-xs text-white">
                  Contact us
                </a>
                <a href="#" className="text-xs text-white">
                  Contractor Contact
                </a>
                <a href="#" className="text-xs text-white">
                  Current Customers
                </a>
                <a href="#" className="text-xs text-white">
                  Warranty Request
                </a>
              </div>
              <div className="flex gap-6 flex-col">
                <span className="uppercase text-xs text-white opacity-60">
                  contact
                </span>
                <a href="#" className="text-xs text-white">
                  11025 Reed Hartman Highway, Cincinnati, Ohio 45242
                </a>
                <a href="#" className="text-xs text-white">
                  (513) 745-9019
                </a>

                <div className="flex gap-2 items-center">
                  <a href="#">
                    <Image
                      src={"/vectors/fb.svg"}
                      alt="Facebook"
                      width={36}
                      height={36}
                    />{" "}
                  </a>
                  <a href="#">
                    <Image
                      src={"/vectors/x.svg"}
                      alt="X"
                      width={36}
                      height={36}
                    />{" "}
                  </a>
                  <a href="#">
                    <Image
                      src={"/vectors/youtube.svg"}
                      alt="Youtube"
                      width={36}
                      height={36}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-10 bg-white" />
        <div className="px-4 md:px-20 py-8 flex flex-wrap md:flex-nowrap gap-4 items-center">
          <Image
            src={"/vectors/GAF-transparent.svg"}
            alt="GAF"
            width={35}
            height={35}
          />
          <Image
            src={"/vectors/preferred-contractor-transparent.svg"}
            alt="preferred contractor"
            width={88}
            height={35}
          />
          <p className="text-white opacity-60 text-xs">
            Lorem ipsum dolor sit amet consectetur. Quis orci sit lectus mauris
            mi id justo. Sed ipsum tempus in eget. Dictum quis felis in id. Ante
            feugiat arcu aliquam tortor. Faucibus bibendum integer dui dolor
            nisl id egestas. In nisl imperdiet auctor felis. Velit libero
            consectetur sed nisl.{" "}
          </p>
          <a
            href="#"
            className="text-white opacity-60 text-xs min-w-max md:border-l md:pl-4"
          >
            Terms of use & Legal Notices
          </a>
        </div>
      </ContainerCenter>
    </footer>
  );
};
