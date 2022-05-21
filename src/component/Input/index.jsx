import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;
//이름이 없는 경우 아래에만 출력하는 것은 어떻게 하는 것인가..
function InputSample() {
  //이 페이지에서 useState를 단 한번만 사용한다면 선착순 한분에게 커피한잔 사드립니다!
  // 요 위치에 useState 구문이 들어가면 됩니다!
  const [data, setData] = useState(["", ""]);

  const onChange = (e) => {
    console.log(e.target);
    // e.target.value 가 무엇일까요??
    // 여기에 코드를 작성하여 해결합니다!
    // onChange 함수를 읽히고 이 함수가 사용될때 useState 가 사용되면 되겠죠?
    if (e.target.name === "name") {
      setData([e.target.value, data[1]]);
    } else {
      setData([data[0], e.target.value]);
    }
  };
  const onReset = () => {
    // 여기는 reset 버튼을 눌렀을때 발생하는 함수입니다!!
    setData(["", ""]);
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange} //변화가 생기면 괄호안의 함수 실행
        />
        <input name="nickname" placeholder="닉네임" onChange={onChange} />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 : {data[0] === "" ? "이름이 없습니다" : data[0]}
      </ViewWrapper>
      <ViewWrapper>
        닉네임: {data[1] === "" ? "이름이 없습니다" : data[1]}
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
