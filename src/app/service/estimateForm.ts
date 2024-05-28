import { formData } from "../estimate/context/EstimateContext";

const API_PIPEDRIVE = "https://developers.pipedrive.com/docs/api/v1";
export const submitEstimateForm = async (form: formData) => {
  try {
    const response = await fetch(API_PIPEDRIVE, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
