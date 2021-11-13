import styled from "styled-components";

export const Logo = styled.img`
  max-width: 168px;
  cursor: pointer;
  @media (max-width: 800px) {
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

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

export const UserPhoto = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const UserName = styled.span`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 1rem;
`;

export const Logout = styled.button`
  margin: 1rem auto 0;
  background: transparent;
  color: var(--white);
  border: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
