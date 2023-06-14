"use client";

import React, { useState } from "react";
import { NewUserFormProps } from "@/types/userinfo";
import { createPortal } from "react-dom";
import ErrorModal from "./ErrorModal";

export default function NewUserForm({ onSubmit }: NewUserFormProps) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [inputError, setInputError] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserAge(event.target.value);
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userName === "" || userAge === "") {
      setInputError(true);
      return;
    }

    const newUser = {
      userName: userName,
      userAge: userAge,
    };

    onSubmit(newUser);

    setUserName("");
    setUserAge("");
  }

  return (
    <div className="bg-white w-full rounded-2xl p-4">
      <h2 className="text-3xl font-medium mb-3">Contact book</h2>
      <p className="text-slate-500 max-w-2xl mb-8">
        Imagine if we had a contacts book with all the necessary information
        such as email addresses, personal and company details. In that case, we
        would require a more advanced database and form validation system to
        make it more reliable. Perhaps then, we could create a fascinating SasS
        section. Unfortunately, this particular one falls short.
      </p>
      <form
        className="flex justify-start items-end gap-4"
        onSubmit={handleFormSubmit}
      >
        <label
          className="flex flex-col justify-start items-start gap-1 grow text-slate-500 font-medium"
          htmlFor="user-name"
        >
          <span className="text-sm">Please add user&apos;s name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 hover:bg-white hover:border-violet-400 focus:bg-white focus:outline-violet-600 rounded-xl py-2 px-4 transition-colors duration-200 ease-in-out w-full"
            placeholder="John Doe"
            type="text"
            id="user-name"
            autoComplete="off"
            onChange={handleNameChange}
            value={userName}
          />
        </label>
        <label
          className="flex flex-col justify-start items-start gap-1 grow text-slate-500 font-medium"
          htmlFor="user-age"
        >
          <span className="text-sm">Please add user&apos;s age</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 hover:bg-white hover:border-violet-400 focus:bg-white focus:outline-violet-600 rounded-xl py-2 px-4 transition-colors duration-200 ease-in-out w-full"
            placeholder="21"
            type="number"
            id="user-age"
            autoComplete="off"
            min="0"
            max="100"
            onChange={handleAgeChange}
            value={userAge}
          />
        </label>
        <button
          className="bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 rounded-xl py-2 px-4 transition-colors duration-200 ease-in-out"
          type="submit"
        >
          Sumbit user
        </button>
      </form>

      {inputError && createPortal(<ErrorModal />, document.body)}
    </div>
  );
}
