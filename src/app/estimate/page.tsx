"use client";
import { Step1 } from "@/app/estimate/components/step1/Step1";
import { Step2 } from "@/app/estimate/components/step2/Step2";
import { Step3 } from "@/app/estimate/components/step3/Step3";
import { Step4 } from "@/app/estimate/components/step4/Step4";
import { Step5 } from "@/app/estimate/components/step5/Step5";
import { useContext } from "react";
import { EstimateContext, formData } from "./context/EstimateContext";
import { Step0 } from "./components/step0/Step0";
import { Animate } from "@/components/ui/animation/Animate";

export default function Page() {
  const { setForm, form } = useContext(EstimateContext);

  return (
    <Animate dep={form.step.toString()}>
      {form.step === 0 && (
        <Step0
          goNextStep={() =>
            setForm((prevState: formData) => ({
              ...prevState,
              step: 1,
            }))
          }
        />
      )}
      {form.step === 1 && <Step1 />}
      {form.step === 2 && <Step2 />}
      {form.step === 3 && <Step3 />}
      {form.step === 4 && <Step4 />}
      {form.step === 5 && <Step5 />}
    </Animate>
  );
}
