import React, { useState } from "react";

export const RunButton = () => {
  const [running, setRunning] = useState(true);

  const onClick = () => {
    setRunning(!running);
  };

  return (
    <button className="w-100 h-50 flex bg-slate-800 text-neutral-400 rounded-xl hover:bg-slate-600 hover:text-neutral-200 border border-neutral-700 hover:border-neutral-600">
      Click to start tracking
    </button>
  );
};
