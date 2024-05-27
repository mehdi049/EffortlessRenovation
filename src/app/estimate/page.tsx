"use client";
import { Step1 } from "@/app/estimate/components/step1/Step1";
import { Step2 } from "@/app/estimate/components/step2/Step2";
import { Step3 } from "@/app/estimate/components/step3/Step3";
import { Step4 } from "@/app/estimate/components/step4/Step4";
import { Step5 } from "@/app/estimate/components/step5/Step5";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";
import { useContext, useState } from "react";
import { EstimateContext } from "./context/EstimateContext";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const { form } = useContext(EstimateContext);
  return (
    <>
      <div className="mb-4 hidden">
        ZIP: {form.zip}
        <br />
        status: {form.status}
        <br />
        renovate: {form.renovate + ""}
        <br />
        name: {form.name}
        <br />
        email: {form.email}
        <br />
        referralCode: {form.referralCode}
        <br />
        phone: {form.phone}
        <br />
      </div>
      <ContainerSteps>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}
        {currentStep === 5 && <Step5 />}
      </ContainerSteps>

      <div
        className={`flex ${
          currentStep === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {currentStep > 1 && (
          <Button
            className="min-w-40 border-2 border-gray-200"
            variant="secondary"
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
            if (currentStep < 5) setCurrentStep(currentStep + 1);
          }}
        >
          {currentStep < 5 ? "Next" : "Submit"}
        </Button>
      </div>
    </>
  );
}
