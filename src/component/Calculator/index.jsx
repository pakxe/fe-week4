import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  border: 1px solid black;
`;

const CalculatorContainer = styled.div`
  justify-content: space-between;
  width: 360px;
  height: 460px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid green;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const Result = styled.div`
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid blue;
  height: 360px;
  align-content: flex-start;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 5px;
  width: 90px;
  height: 90px;
  text-align: center;
  &:hover {
    background-color: pink;
  }
`;
const Calculator = () => {
  const [isClick, setIsClick] = useState(false);
  const [stdout, setStdout] = useState("");

  const onChange = (e) => {
    console.log("click!");
    setStdout(stdout + e.target.value);
  };
  useEffect(() => {
    setStdout("");
  }, [isClick]);

  const result = () => {
    let r = 0;
    let i = 0;
    let sign = "";
    let a = "";
    let int1 = 0;
    let int2 = 0;

    while (i != stdout.length) {
      if (isNaN(stdout[i]) === false) {
        a = a + stdout[i];
      } else {
        sign = stdout[i];
        int1 = parseInt(a);
        a = "";
      }
      i++;
    }

    int2 = parseInt(a);

    if (sign === "+") {
      r = int1 + int2;
    } else if (sign === "-") {
      r = int1 - int2;
    } else if (sign === "/") {
      r = int1 / int2;
    } else if (sign === "*") {
      r = int1 * int2;
    } else {
      console.log("다시하셈");
    }
    setStdout(r);
  };
  return (
    <>
      <CalculatorWrapper>
        <CalculatorContainer>
          <ResultContainer>
            <Result>{stdout}</Result>
          </ResultContainer>
          <ButtonContainer>
            <Button value={7} onClick={onChange}>
              7
            </Button>
            <Button value={8} onClick={onChange}>
              8
            </Button>
            <Button value={9} onClick={onChange}>
              9
            </Button>
            <Button value="/" onClick={onChange}>
              /
            </Button>
            <Button value={4} onClick={onChange}>
              4
            </Button>
            <Button value={5} onClick={onChange}>
              5
            </Button>
            <Button value={6} onClick={onChange}>
              6
            </Button>
            <Button value="*" onClick={onChange}>
              *
            </Button>
            <Button value={1} onClick={onChange}>
              1
            </Button>
            <Button value={2} onClick={onChange}>
              2
            </Button>
            <Button value={3} onClick={onChange}>
              3
            </Button>
            <Button value="-" onClick={onChange}>
              -
            </Button>
            <Button value="@" onClick={() => setIsClick(!isClick)}>
              @
            </Button>
            <Button value={0} onClick={onChange}>
              0
            </Button>
            <Button value="+" onClick={onChange}>
              +
            </Button>
            <Button value="=" onClick={result}>
              =
            </Button>
          </ButtonContainer>
        </CalculatorContainer>
      </CalculatorWrapper>
    </>
  );
};

export default Calculator;
