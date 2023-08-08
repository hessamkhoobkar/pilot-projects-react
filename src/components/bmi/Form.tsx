"use client";
import Input from "./Input";
import { useState } from "react";

export default function Form({
  formSubmit,
}: {
  formSubmit: (height: string, weight: string) => void;
}) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formSubmit(height, weight);
  }
  return (
    <form
      className="flex flex-col justify-start items-start w-full gap-4 mt-8"
      onSubmit={handleFormSubmit}
    >
      <Input
        name="height"
        placeholder="180"
        min="100"
        max="300"
        value={height}
        unit="cm"
        onChange={(newVal) => setHeight(newVal)}
        state={null}
      />
      <Input
        name="weight"
        placeholder="80"
        min="40"
        max="300"
        value={weight}
        unit="kg"
        onChange={(newVal) => setWeight(newVal)}
        state={null}
      />
      <button
        className="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold p-4 w-full rounded-2xl mt-4 transition-all duration-200 ease-in-out"
        type="submit"
      >
        Caclulate
      </button>
    </form>
  );
}
