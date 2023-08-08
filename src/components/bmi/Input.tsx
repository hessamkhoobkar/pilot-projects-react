"use client";
import { useState } from "react";

export default function InputNumber({
  name,
  placeholder,
  min,
  max,
  value,
  unit,
  state,
  onChange,
}: {
  name: string;
  placeholder: string;
  min: string;
  max: string;
  value: string;
  unit: string;
  state: "error" | null;
  onChange: (newVal: string) => void;
}) {
  const [focus, setFocus] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newVal = event.target.value;
    onChange(newVal);
  }

  return (
    <div
      className={`flex flex-col justify-start items-start bg-slate-900 border  hover:border-lime-500 rounded-2xl px-6 py-4 w-full transition-all duration-200 ease-in-out ${
        focus ? "border-lime-500" : "border-transparent"
      }`}
    >
      <label
        htmlFor="height"
        className={`w-full ${focus ? "text-lime-500" : "text-slate-500"}`}
      >
        Please inter your {name}
      </label>
      <div className="relative flex justify-start items-center w-full">
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="bg-slate-900 py-2 ps-0 text-xl w-full focus:outline-none placeholder:text-slate-600"
        />
        <div className="bg-slate-900 absolute h-full w-8 inset-y-0 right-6"></div>
        <span
          className={`font-bold w-8 text-right ${
            focus ? "text-lime-500" : "text-slate-600"
          }`}
        >
          {unit}
        </span>
      </div>
    </div>
  );
}
