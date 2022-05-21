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

function Test() {
  const [name, setName] = useState("");

  const handleInputchange = (e) => {
    console.log(e.target);
    setName(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleInputchange}></input>
      <h2>{name}</h2>
    </>
  );
}

export default Test;
