"use client";
import { createContext, useState } from "react";

export const initFormData = {
  step: 0,
  zip: "",
  status: "",
  renovate: [],
  name: "",
  email: "",
  referralCode: "",
  phone: "",
};

export type formData = {
  step: 0;
  zip: string;
  status: string;
  renovate: string[];
  name: string;
  email: string;
  referralCode: string;
  phone: string;
};
export const EstimateContext = createContext({
  form: initFormData,
  setForm: (payload: any) => {},
});

type EstimateContextProviderProps = {
  children: React.ReactNode;
};
export const EstimateContextProvider = ({
  children,
}: EstimateContextProviderProps) => {
  const [form, setForm] = useState(initFormData);
  return (
    <EstimateContext.Provider value={{ form, setForm }}>
      {children}
    </EstimateContext.Provider>
  );
};
