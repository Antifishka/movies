import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 16px 0 8px 0;

  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;

  color: ${theme.colors.mainText};
  transition: ${theme.transition.main};
          
:hover{
  color: ${theme.colors.accent};
}

${up('tablet')} {
    font-size: ${theme.fontSizes.m};
  }
`;