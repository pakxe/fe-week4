import styled from "styled-components";
import { useEffect, useState } from "react";

const ProblemWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    console.log("hi");
    setCount((count) => count + 1);
  }, [isClick]);

  return (
    <ProblemWrapper>
      {count ? count : 0}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
