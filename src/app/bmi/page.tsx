"use client";
import Form from "@/components/bmi/Form";
import Header from "@/components/bmi/Header";
import ResultCard from "@/components/bmi/ResultCard";
import { useState } from "react";

export default function BMI() {
  const [BMI, setBMI] = useState<number | null>(null);
  const [state, setState] = useState<"success" | "error" | "idle">("idle");

  function BMICalculation(height: string, weight: string) {
    if (!height || !weight) {
      setState("error");
      return;
    }

    const metricHeight = +height / 100;
    const theBMI = +(+weight / (metricHeight * metricHeight)).toFixed(1);
    setBMI(theBMI);
    setState("success");
  }

  return (
    <div className="font-sans font-medium text-base antialiased w-screen min-h-screen text-white bg-slate-950 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full max-w-lg mx-auto">
        <Header />
        <Form formSubmit={(height, weight) => BMICalculation(height, weight)} />
        <ResultCard BMI={BMI} state={state} />
      </div>
    </div>
  );
}
