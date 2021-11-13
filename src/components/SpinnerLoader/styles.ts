import styled from "styled-components";

export const LoaderContainer = styled.div`
  opacity: 1;
  width: 100%;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease-in 0.3s;
`;
