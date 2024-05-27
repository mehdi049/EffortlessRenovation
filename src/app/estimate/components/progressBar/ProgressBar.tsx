"use client";
import { useContext } from "react";
import { EstimateContext } from "../../context/EstimateContext";
import { Progress } from "@/components/ui/progress/Progress";

export const ProgressBar = () => {
  const { form } = useContext(EstimateContext);
  const currentPercentage = (parseInt(form.step.toString()) / 5) * 100;
  return (
    <>
      <Progress percentage={currentPercentage === 0 ? 10 : currentPercentage} />
    </>
  );
};
