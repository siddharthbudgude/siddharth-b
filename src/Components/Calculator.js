import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleInput = (value) => {
    
    if (isResultDisplayed) {
      setInput(value);
      setIsResultDisplayed(false);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setIsResultDisplayed(false);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
      setIsResultDisplayed(true); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly placeholder="0" />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          {[7, 8, 9, "/"].map((item) => (
            <button key={item} onClick={() => handleInput(item.toString())}>
              {item}
            </button>
          ))}
        </div>
        <div className="row">
          {[4, 5, 6, "*"].map((item) => (
            <button key={item} onClick={() => handleInput(item.toString())}>
              {item}
            </button>
          ))}
        </div>
        <div className="row">
          {[1, 2, 3, "-"].map((item) => (
            <button key={item} onClick={() => handleInput(item.toString())}>
              {item}
            </button>
          ))}
        </div>
        <div className="row">
          {[0, ".", "C", "+"].map((item) => (
            <button
              key={item}
              onClick={
                item === "C" ? clearInput : () => handleInput(item.toString())
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div className="row">
          <button className="equal" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
