import styled from "styled-components";
import { theme } from 'globalStyles/theme';
import { slideTop } from 'keyframes';

export const ScrollButton = styled.button`
    position: fixed;
    z-index: 100;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: ${theme.colors.secondaryText};
    background-color: ${theme.colors.accent};

    animation: ${slideTop} 1s linear 2s infinite alternate both;
    
    transition: ${theme.transition.main};
    
    &:hover{
        color: ${theme.colors.accent};
        background-color: ${theme.colors.secondaryText};
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(255, 69, 0, 0.8);
    };
    &:active {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(255, 69, 0, 0.8);
    }
`;

export const IconArrowTop  = styled.svg`
    fill: currentColor;
`;