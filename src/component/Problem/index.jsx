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
    return () => {
      setCount((count) => count + 1);
    };
  }, [isClick]);
  /*오류이유: 처음 페이지 실행시 isClick의 값이 false로 초기화되는 과정에서 렌더링이된다. isClick에 변화가 발생했으므로 useeffect 실행.
  의도했던 값보다 +1이 된 상태에서 시작하게 되는 것이다. 
*/
  /*리액트의 onClick은 렌더링시 실행된다. */
  return (
    <ProblemWrapper>
      {count}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};
/*1번 클릭: true, 2번 클릭: false,,, 클릭때마다 true가 되는 것이 아닌, true false가 번갈아서 isClick에 들어가게 된다.  */

export default Problem;
