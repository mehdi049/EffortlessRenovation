"use client";
import { Step1 } from "@/app/estimate/components/step1/Step1";
import { Step2 } from "@/app/estimate/components/step2/Step2";
import { Step3 } from "@/app/estimate/components/step3/Step3";
import { Step4 } from "@/app/estimate/components/step4/Step4";
import { Step5 } from "@/app/estimate/components/step5/Step5";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";
import { Button } from "@/components/ui/form/button/Button";
import { useContext, useState } from "react";
import { EstimateContext, formData } from "./context/EstimateContext";
import { Step0 } from "./components/step0/Step0";

export default function Page() {
  const { setForm, form } = useContext(EstimateContext);
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
      </ContainerSteps>

      <div className={`${form.step === 0 ? "hidden" : "flex"} justify-between`}>
        {form.step > 0 && (
          <Button
            className="min-w-40 border-2 border-gray-200"
            variant="secondary"
            onClick={() => {
              setForm((prevState: formData) => ({
                ...prevState,
                step: form.step - 1,
              }));
            }}
          >
            Back
          </Button>
        )}
        <Button
          className="min-w-40"
          onClick={() => {
            if (form.step < 5)
              setForm((prevState: formData) => ({
                ...prevState,
                step: form.step + 1,
              }));
          }}
        >
          {form.step < 5 ? "Next" : "Submit"}
        </Button>
      </div>
    </>
  );
}
