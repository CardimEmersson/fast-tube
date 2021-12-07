import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PreviewContainerProps {
  hasValue: boolean;
}

export const PreviewContainer = styled.div<PreviewContainerProps>`
  width: 50%;
  margin: 1rem auto;
  border: 2px dashed var(--primary);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.hasValue ? "all" : "none")};
`;

export const TextPreview = styled.h1`
  position: absolute;
  top: 60%;
`;
