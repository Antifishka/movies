import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const ReviewsList = styled.ul`
  padding: 16px 0;
  list-style: disc;
  margin-left: 10px;
`;

export const ReviewsItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #EEEEEE;
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
`;

export const ReviewsTitle = styled.h4`
  margin-bottom: 10px;
`;

export const Message = styled.p`
  padding: 16px 0;
`;