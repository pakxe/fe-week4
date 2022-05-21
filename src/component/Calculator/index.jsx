import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [isClick, setIsClick] = useState(false);
  const [stdout, setStdout] = useState("");
  const [res, setRes] = useState(0);

  const onChange = (e) => {
    console.log("click!");
    setStdout(stdout + e.target.value);
  };

  const result = () => {
    //=입력됐을 때
    let i = 0;
    let sign = "";
    let a = "";
    let int1 = 0;
    let int2 = 0;

    while (i != stdout.length) {
      if (isNaN(stdout[i]) == false) {
        a = a + stdout[i];
      } else {
        sign = stdout[i];
        int1 = parseInt(a);
        a = "";
      }
      i++;
    }

    int2 = parseInt(a);

    if (sign == "+") {
      setRes(int1 + int2);
    } else if (sign == "-") {
      setRes(int1 - int2);
    } else if (sign == "/") {
      setRes(int1 / int2);
    } else if (sign == "*") {
      setRes(int1 * int2);
    } else {
      console.log("다시하셈");
    }
    setStdout(res);
    console.log(res);
  };
  return (
    <>
      <h2>{stdout}</h2>
      <button value={1} onClick={onChange}>
        1
      </button>
      <button value={2} onClick={onChange}>
        2
      </button>
      <button value="+" onClick={onChange}>
        +
      </button>
      <button value="/" onClick={onChange}>
        /
      </button>
      <button value="=" onClick={result}>
        =
      </button>
      <h2>{res}</h2>
    </>
  );
};

export default Calculator;
