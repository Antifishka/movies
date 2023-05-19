import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles/theme";

export const MoviesCard = styled.li`
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};

  transform: scale(1);
  transition: ${theme.transition.main};

  &:hover,
  &:focus{
    transform: scale(1.03);
  };
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const MoviesImg = styled.img`
  width: 100%;
  border-radius: ${theme.radii.normal};
  height: 300px;
  object-fit: cover;
  margin-bottom: auto;
`;

export const MoviesCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 0 0;
`;

export const MoviesTitle = styled.h4`
  max-width: 158px; 

  color: ${theme.colors.mainText};
`;

export const MoviesVote = styled.p`
  padding: 2px 4px;
  border-radius: ${theme.radii.normal};
  color: ${theme.colors.secondaryText};
  background-color: ${theme.colors.accent};

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semiBold};
`;