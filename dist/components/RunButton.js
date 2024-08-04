import React, { useState } from "react";
export var RunButton = function () {
    var _a = useState(true), running = _a[0], setRunning = _a[1];
    var onClick = function () {
        setRunning(!running);
    };
    return (React.createElement("button", { className: "w-100 h-50 flex bg-slate-800 text-neutral-400 rounded-xl hover:bg-slate-600 hover:text-neutral-200 border border-neutral-700 hover:border-neutral-600" }, "Click to start tracking"));
};
