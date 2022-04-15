import React from "react";
import will from "./will.gif";

export default function PrivateHome() {
  return (
    <div className="containier p-5">
      <h1 className="display-3 text-light mb-4">Home Sweet Private Home</h1>
      <img src={will} alt="will" />
    </div>
  );
}
