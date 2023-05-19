import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const FormContainer = styled.div`
    padding: 16px 0;
`;

export const Form = styled.form`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    border-radius: ${theme.radii.input};
    overflow: hidden;
`;

export const FormInput = styled.input`
    display: inline-block;
    width: 100%;
    padding: 8px 12px;
    font-size: ${theme.fontSizes.m};
    border: ${theme.borders.normal};
    border-radius: ${theme.radii.input};
    outline: none;

    ${up('tablet')} {
        font-size: ${theme.fontSizes.l};
    }
    

::placeholder {
    font: inherit;
    font-size: ${theme.fontSizes.s};
    ${up('tablet')} {
        font-size: ${theme.fontSizes.m};
    }
}
`;

export const FormButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 6px;
    padding-left: 7px;
    cursor: pointer;
    border: 1px solid orangered;
    outline: none;
    
    color: white;
    background-color: orangered;

    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
    opacity: 0.7;
}
`;