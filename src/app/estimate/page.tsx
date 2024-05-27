"use client";
import { Step1 } from "@/components/pages/estimate/step1/Step1";
import { Step2 } from "@/components/pages/estimate/step2/Step2";
import { Step3 } from "@/components/pages/estimate/step3/Step3";
import { Step4 } from "@/components/pages/estimate/step4/Step4";
import { Step5 } from "@/components/pages/estimate/step5/Step5";
import { Step6 } from "@/components/pages/estimate/step6/Step6";
import { Step7 } from "@/components/pages/estimate/step7/Step7";
import { Step8 } from "@/components/pages/estimate/step8/Step8";
import { Container } from "@/components/ui/container/Container";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { Button } from "@/components/ui/form/button/Button";
import { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <main>
      <Container className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-4">
        <ContainerCenter className="flex flex-col gap-8 md:gap-20 w-full">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}
          {currentStep === 6 && <Step6 />}
          {currentStep === 7 && <Step7 />}
          {currentStep === 8 && <Step8 />}

          <div
            className={`flex ${
              currentStep === 1 ? "justify-end" : "justify-between"
            }`}
          >
            {currentStep > 1 && (
              <Button
                className="min-w-40"
                onClick={() => {
                  if (currentStep > 1) setCurrentStep(currentStep - 1);
                }}
              >
                Back
              </Button>
            )}
            <Button
              className="min-w-40"
              onClick={() => {
                if (currentStep < 8) setCurrentStep(currentStep + 1);
              }}
            >
              Next
            </Button>
          </div>
        </ContainerCenter>
      </Container>
    </main>
  );
}
