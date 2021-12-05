import styled from "styled-components";

interface VideoCardContainerProps {
  url: string;
  title: string;
}

export const VideoCardContainer = styled.a<VideoCardContainerProps>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 450px) {
    width: 231px;
    height: 130px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    span {
      opacity: 1;
    }
  }
`;

export const VideoTitle = styled.span`
  position: absolute;
  opacity: 0;
  color: var(--white);
  transition: all 0.3s;
`;
