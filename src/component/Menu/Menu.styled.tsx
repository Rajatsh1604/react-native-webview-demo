import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;

  background: ${theme.primaryLight};
  transform: ${({open}: {open : boolean}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  padding: 2rem;
  top: 0;
  left: 0;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }
  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${theme.primaryHover};
    }
  }
`;
