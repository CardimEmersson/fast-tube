import styled, { css } from "styled-components";

export const Logo = styled.img`
  max-width: 168px;
  cursor: pointer;
  @media (max-width: 450px) {
    max-width: 105px;
  }
`;

export const Container = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    a {
      display: none;
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

export const UserPhoto = styled.img`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const UserName = styled.span`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1rem;
`;

export const Logout = styled.button`
  margin: 0.5rem auto 0;
  background: transparent;
  color: var(--white);
  border: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface UserDropdownProps {
  active: boolean;
}

export const UserDropdown = styled.div<UserDropdownProps>`
  position: absolute;
  background-color: var(--black);
  margin-top: 0.5rem;
  top: 100%;
  right: 5%;
  width: 15rem;
  border: 2px solid var(--primary);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: #fff;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(100vw);

  ${(props) =>
    props.active &&
    css`
      z-index: 1;
      opacity: 1;
      transform: translateX(0);
    `}

  a {
    display: none;
  }

  @media (max-width: 800px) {
    a {
      display: flex;
      margin-left: 0;
      justify-content: center;
      margin-bottom: 16px;
      padding: 0.75rem;
    }
  }
`;

export const Button = styled.button`
  margin: 0.5rem auto 0;
  background: transparent;
  color: var(--white);
  border: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonMyVideo = styled.button`
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem;
  color: var(--primary);
  transition: all 0.3s;

  &:hover {
    color: var(--black);
    background-color: var(--primary);
  }
`;

export const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
