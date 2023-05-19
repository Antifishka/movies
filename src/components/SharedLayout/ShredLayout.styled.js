import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  position: relative;
  max-width: ${theme.sizes.maxWidth};
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
  border-bottom: ${theme.borders.normal};

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${theme.radii.normal};

  font-weight: ${theme.fontWeights.medium};
   
  color: ${theme.colors.mainText};

  transition: ${theme.transition.main};
  
  &.active {
    color: ${theme.colors.secondaryText};
    background-color: ${theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: ${theme.colors.accent};
  }

  ${up('mobile')} {
    font-size: ${theme.fontSizes.m};
  }
`;