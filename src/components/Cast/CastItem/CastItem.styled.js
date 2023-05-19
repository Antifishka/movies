import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const CardWrapper = styled.li`
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  text-align: center;
  font-size: ${theme.fontSizes.xs};
`;

export const CardName = styled.h4`
  color: ${theme.colors.mainText};
`;

export const CardText = styled.p`
  margin-top: auto;

  color: ${theme.colors.mainText};
`;
