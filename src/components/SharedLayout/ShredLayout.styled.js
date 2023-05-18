import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  position: relative;
  max-width: 960px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;

  font-weight: 500;
   
  color: black;

  transition: ${theme.transition.main};
  
  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: orangered;
  }

  ${up('mobile')} {
    font-size: ${theme.fontSizes.m};
  }
`;