import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: #141414;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 50%;
  border: 1px solid var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Logo = styled.img`
  margin-bottom: 4rem;

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const GoogleButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--google);
  outline: none;
  border: 0;
  border-radius: 0.625rem;
  cursor: pointer;
  color: var(--white);
  margin: 0.5rem 0;
  transition: all 0.3s;

  &:hover {
    background-color: #db4537cc;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FacebookButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--facebook);
  outline: none;
  border: 0;
  border-radius: 0.625rem;
  cursor: pointer;
  color: var(--white);
  margin: 0.5rem 0;
  transition: all 0.3s;

  &:hover {
    background-color: #4267b2cc;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GithubButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--white);
  outline: none;
  border: 0;
  border-radius: 0.625rem;
  cursor: pointer;
  color: var(--github);
  margin: 0.5rem 0;
  transition: all 0.3s;

  &:hover {
    background-color: #ffffffcc;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextButton = styled.span`
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
`;
