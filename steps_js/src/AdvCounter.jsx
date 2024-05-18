import React, { useState } from "react";

const AdvCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepIncrese = () => {
    setStep((crrStep) => crrStep + 1);
  };
  const handleStepDecrese = () => {
    setStep((crrStep) => crrStep - 1);
  };

  const handleCountDecrese = () => {
    setCount((crrStep) => crrStep - step);
  };
  const handleCountIncrese = () => {
    setCount((crrStep) => crrStep + step);
  };

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="w-1/2 mx-auto">
      <div className="flex justify-center items-center mb-5">
        <button onClick={handleStepDecrese} className="bg-purple-700 p-3">
          -
        </button>
        <p className="px-5">step: {step}</p>
        <button onClick={handleStepIncrese} className="bg-purple-700 p-3">
          +
        </button>
      </div>
      <div className="flex justify-center items-center mb-5">
        <button className="bg-purple-700 p-3" onClick={handleCountDecrese}>
          -
        </button>
        <p className="px-5">Count: {count}</p>
        <button className="bg-purple-700 p-3" onClick={handleCountIncrese}>
          +
        </button>
      </div>
      <p className="mb-8 flex justify-center items-center">
        <span>
          {count === 0
            ? `Today is ${date.toLocaleDateString("en-US", options)}`
            : count > 0
            ? `${count} days from today is ${date.toLocaleDateString(
                "en-US",
                options
              )}`
            : `${count} days ago was ${date.toLocaleDateString(
                "en-US",
                options
              )}`}
        </span>
      </p>
    </div>
  );
};

export default AdvCounter;
