import React from "react";
import styled from "styled-components";

const StyledApplicationWrapper = styled.section`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function ApplicationWrapper({ children }) {
  return <StyledApplicationWrapper>{children}</StyledApplicationWrapper>;
}
