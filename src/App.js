import React from "react";
import { useState } from "react";
import "./App.css";


const App = () => {
  const [input, setinput] = useState("");
  const handler = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="Calcu">
      <p>Calculator</p>
      <input
        className="init"
        type="text"
        value={input}
        name="input"
        onChange={handler}
      />
      <button className="erace" onClick={() => setinput("")}>
        c
      </button>
      <br />
      <button className="one" onClick={() => setinput(input + "1")}>
        1
      </button>
      <button className="two" onClick={() => setinput(input + "2")}>
        2
      </button>
      <button className="three" onClick={() => setinput(input + "3")}>
        3
      </button>
      <button className="divi" onClick={() => setinput(input + "/")}>
        /
      </button>
      <br />
      <button className="four" onClick={() => setinput(input + "4")}>
        4
      </button>
      <button className="five" onClick={() => setinput(input + "5")}>
        5
      </button>
      <button className="six" onClick={() => setinput(input + "6")}>
        6
      </button>
      <button className="substract" onClick={() => setinput(input + "-")}>
        -
      </button>
      <br />
      <button className="seven" onClick={() => setinput(input + "7")}>
        7
      </button>
      <button className="eight" onClick={() => setinput(input + "8")}>
        8
      </button>
      <button className="nine" onClick={() => setinput(input + "9")}>
        9
      </button>
      <button className="plus" onClick={() => setinput(input + "+")}>
        +
      </button>
      <br />
      <button className="dot" onClick={() => setinput(input + ".")}>
        .
      </button>
      <button className="zero" onClick={() => setinput(input + "0")}>
        0
      </button>
      <button
        className="equal"
        onClick={() => {
          setinput(eval(input));
        }}
      >
        =
      </button>
      <button className="multipli" onClick={() => setinput(input + "*")}>
        *
      </button>
    </div>
  );
};
export default App;










