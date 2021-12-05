import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardMyVideo = styled.div`
  width: 100%;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  display: flex;
  border-bottom: 1px solid var(--blackLighter);
  align-items: center;

  @media (max-width: 800px) {
    padding: 0.5rem 0.5rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ImageVideo = styled.img`
  width: 17rem;
  max-height: 17rem;
  object-fit: cover;
  object-position: center;

  @media (max-width: 800px) {
    width: 10rem;
    max-height: 10rem;
  }
`;

export const WrapperContent = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 800px) {
    margin-left: 0.5rem;
  }

  @media (max-width: 450px) {
    margin-left: 0;
    width: 100%;
    align-items: center;
  }
`;

export const Category = styled.span`
  margin-right: auto;
  font-size: 1.2rem;

  padding: 0.5rem 1.5rem;
  border-radius: 8px;

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.25rem 1rem;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const TitleVideo = styled.h3`
  font-size: 2rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export const Url = styled.a`
  margin: 0;
  margin-right: auto;
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const ButtonIcon = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #ec2300;
  }

  @media (max-width: 800px) {
    > svg {
      width: 1.5rem;
    }
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;
