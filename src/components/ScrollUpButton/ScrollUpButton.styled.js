import styled from "styled-components";
import { theme } from 'globalStyles/theme';
import { slideTop } from 'keyframes';
import { up } from 'styled-breakpoints';

export const ScrollButton = styled.button`
    position: fixed;
    z-index: 100;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ff4500;
    cursor: pointer;
    color: ${theme.colors.accent};
    background-color: transparent;

    animation: ${slideTop} 1s linear 2s infinite alternate both;
    
    transition: ${theme.transition.main};
    
    &:hover{
        border: none;
        color: ${theme.colors.mainText};
        background-color: ${theme.colors.secondaryText};
        box-shadow: 0 5px 10px rgba(255, 69, 0, 0.8);
    };
    &:active {
        box-shadow: 0 5px 10px rgba(255, 69, 0, 0.8);
    }

    ${up('tablet')} {
        width: 50px;
        height: 50px;
    }
`;

export const IconArrowTop = styled.svg`
    fill: currentColor;
    
    ${up('tablet')} {
        width: 20px;
        height: 20px;
    }
`;