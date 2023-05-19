import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const MovieBox = styled.div`
  padding: 0 0 16px 0;
  border-bottom: ${theme.borders.normal};

  ${up('tablet')} {
    display: flex;
  }
`;

export const MovieImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${theme.shadows.card};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;

  color: ${theme.colors.mainText};
`;

export const MovieTitle = styled.h2`
  text-align: center;
`;
export const MovieGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const MovieAdditionalBox = styled.div`
  padding: 16px 0;
  border-bottom: ${theme.borders.normal};
  text-align: center;
`;

export const MovieAdditionalTitle = styled.h2`
  margin-bottom: 12px;

  color: ${theme.colors.mainText};
`;

export const MovieAdditionalList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${theme.radii.normal};
  color: ${theme.colors.mainText};
  font-weight: ${theme.fontWeights.medium};

  color: ${theme.colors.mainText};

  transition: ${theme.transition.main};
  
  &.active {
    color: white;
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
