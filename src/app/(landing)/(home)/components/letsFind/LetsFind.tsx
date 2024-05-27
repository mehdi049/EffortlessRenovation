import { Button } from "@/components/ui/form/button/Button";
import { Container } from "@/components/ui/container/Container";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/routes";

export const LetsFind = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-12">
      <Container>
        <ContainerCenter>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="max-w-96">
              <p className="text-xs uppercase opacity-60 font-semibold">
                / let’s find
              </p>
              <p className="font-semibold text-2xl md:text-3xl mt-4">
                Transform Your Space Easily—Contact Us to Begin Renovation!
              </p>
            </div>
            <div className="text-center">
              <Image
                src={"/vectors/house.svg"}
                alt=""
                width={328}
                height={160}
                className="inline-block"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <Link
                href={ROUTES.ESTIMATE}
                className="w-full lg:max-w-max block"
              >
                <Button className="w-full">Get An Estimate</Button>
              </Link>
              <Button variant="secondary" className="w-full lg:max-w-max">
                Contact Us
              </Button>
            </div>
          </div>
        </ContainerCenter>
      </Container>
    </div>
  );
};
