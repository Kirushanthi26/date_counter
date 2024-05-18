import { useState } from "react";

export const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <button
        className="font-semibold text-6xl ml-8"
        onClick={() => setIsOpen((is) => !is)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-gray-100 w-3/4 rounded-lg py-8 px-36">
            <div className="flex justify-between space-x-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`${
                    step >= num ? "bg-purple-700 text-white" : "bg-gray-200"
                  } w-12 h-12 font-medium rounded-full flex items-center justify-center`}
                >
                  {num}
                </div>
              ))}
            </div>
            <div>
              <p className="text-center font-semibold text-2xl py-28">
                Step {step}: {messages[step - 1]}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <button
                onClick={handlePrevious}
                className="capitalize font-medium bg-purple-700 text-white rounded-3xl py-3 px-8"
              >
                previous
              </button>
              <button
                onClick={handleNext}
                className="capitalize font-medium bg-purple-700 text-white rounded-3xl py-3 px-8"
              >
                next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
