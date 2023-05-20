"use client";

import React, { useState } from "react";
import "./Modal.css";

export default function Modal({
  title,
  text,
  onClose,
}: {
  title: string;
  text: string;
  onClose: any;
}) {
  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={onClose}>START A NEW GAME</button>
      </div>
    </>
  );
}
