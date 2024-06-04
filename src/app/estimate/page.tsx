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
    <>
      {form.step === 0 && (
        <Animate dep={form.step.toString()}>
          <Step0
            goNextStep={() =>
              setForm((prevState: formData) => ({
                ...prevState,
                step: 1,
              }))
            }
          />
        </Animate>
      )}
      {form.step === 1 && (
        <Animate dep={form.step.toString()}>
          <Step1 />
        </Animate>
      )}
      {form.step === 2 && (
        <Animate dep={form.step.toString()}>
          <Step2 />
        </Animate>
      )}
      {form.step === 3 && (
        <Animate dep={form.step.toString()}>
          <Step3 />
        </Animate>
      )}
      {form.step === 4 && (
        <Animate dep={form.step.toString()}>
          <Step4 />
        </Animate>
      )}
      {form.step === 5 && (
        <Animate dep={form.step.toString()}>
          <Step5 />
        </Animate>
      )}
    </>
  );
}
