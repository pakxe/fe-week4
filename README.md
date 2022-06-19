# 1번 문제

- useState 사용
    
    데이터는 변수에 넣거나, state에 넣거나의 2가지 방법이 존재한다.
    자주 변경되는 데이터는 state로 선언해주는 것이 좋다고 한다..
    
    ```jsx
    const [data, setData] = useState(["", ""]);
    ```
    
- onChange 이벤트
    
    이벤트 리스너이다. change가 발생하면 { } 안에 있는 함수를 실행한다.
    이 문제에서는 같은 이름(onChange)으로 함수를 만들었다.
    
    ```jsx
    <input
              name="name"
              placeholder="이름"
              onChange={onChange}
              value={data[0]}
            />
    ```
    
- input 태그에 달린 속성들의 의미가 뭘까..?
    - name : input안에 들어오는 데이터명. 두 input태그가 같은 onChange라는 함수를 사용하므로 같은 함수에서 name값에 따라 다른 행동을 하기위해서 name으로 구분지어준것
    - placeholder : input칸 안에 미리 적혀있는 옅은 텍스트(뭘 입력할지 알려주는것)
    - onChange : 변화 발생시 실행시킬 함수를 적는다
    - value : input칸 안에 접근할 수 있는 변수, 외부에서 date[n]으로 접근해 값을 수정할 수 있다.
    
- 내가 만든 onChange 함수
    
    [e.target.name](http://e.target.name) 의 의미는 변화가 일어난 input의 이름을 가리킨다. 이 input이름이 “name”이면 e.target.value 즉 input에 입력된 값을 실시간으로 바꾼다. 이 실시간으로 바뀌는 값은 data[0]으로 접근한다, 그리고 nickname을 data[1]로 둔다. 
    
    “name”이 아니라면(”nickname”이라면 ) data[0]은 변화가 없는채로 업데이트하고, data[1]은 input에 실시간으로 입력되는 e.target.value로 바꾼다. 
    
    ```jsx
    const onChange = (e) => {
        if (e.target.name === "name") {
          setData([e.target.value, data[1]]);
        } else {
          setData([data[0], e.target.value]);
        }
      };
    ```
    
- state로 선언한 변수에 접근하는법
    
    2개 요소의 배열로 선언해주었기 때문에 name은 data[0], nickname은 data[1]로 접근한다.
    
    ```jsx
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
              onChange={onChange}
              value={data[0]}
            />
            <input
              value={data[1]}
              name="nickname"
              placeholder="닉네임"
              onChange={onChange}
            />
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
    ```
    <img width="379" alt="image" src="https://user-images.githubusercontent.com/64801796/169684336-ca1eacb9-90af-4a00-9cff-03c31b9d157c.png">

# 2번 문제

- useEffect가 뭘까..
    
    변수에 변화가 발생하는 것을 체크해주는 장치다. 변화 발생시 useEffect내의 코드를 실행한다.
    
- 왜 2부터 시작할까
    
    state선언시 isClick의 값을 false로 설정하게 코드를 작성했다. 이러면 처음 페이지 실행시 isClick의 값이 false로 초기화되어 렌더링된다. isClick에 변화가 발생했으므로 useEffect가 실행돼 의도했던 값보다 1이 더해진 상태에서 시작하게 된다. 
    그리고 strick모드를 해제해야 미리 실행하지 않아 0부터 제대로 시작하게 된다. 
    
- onClick 이벤트 리더기
    
    클릭이 발생하면 내부의 함수를 실행한다. isClick을 반전하여 값을 수정한다.
    
<img width="121" alt="image" src="https://user-images.githubusercontent.com/64801796/169684346-b1210b9e-4142-4912-9b4a-bcc7c0e9344e.png">

# 3번 문제

### 구조

- CalculatorWrapper: 계산기 큰 틀
    - CalculatorContainer : 계산기 안의 요소들을 중앙 정렬해줌
        - ResultContainer : 결과값을 띄워줌
            - Result : 결과
        - ButtonContainer : 버튼들을 담아 4개씩 한줄로 출력해줌
            - Buttons…
            
- 버튼들의 onClick
    - 각 버튼을 클릭하면 onChange함수 실행
    - @버튼은 IsClick을 반전시킨 값으로 저장함
    - =버튼은 result 함수 실행
    
- onChange함수는 뭘할까
    
    출력값을 저장하는 변수인 stdout에 e.target.value 즉 입력된 값을 더한다.
    
- result 함수는 뭘할까
    
    stdout을 한글자씩 읽는다. 만약 이 글자가 숫자라면 a에 누적하여 저장한다. 숫자가 아니라면, 지금까지 저장했던 a를 int형으로 바꾸고 입력된 부호를 sign에 저장한다. 그리고 a를 초기화해 그 뒤의 숫자를 다시 a에 저장한다. 이걸 stdout의 끝에 닿을때까지 반복한다. 두번째로 얻어온 a또한 int로 바꾸어 저장한다.
    
    그리고 부호에 맞게 연산하여 stdout의 값을 변경한다.
https://user-images.githubusercontent.com/64801796/169684433-12541b4d-759f-49c4-af25-237aa8524ef4.mov

