import React, { useState } from 'react';
import { scrollUp } from "helpers/scrollUp";
import { ScrollButton, IconArrowTop } from "./ScrollUpButton.styled";
import sprite from "images/icons/sprite.svg";

export const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

     const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
     };
    
    window.addEventListener('scroll', handleScroll);

    return (
        <>
            { isVisible &&
                <ScrollButton
                    onClick={scrollUp}
                    aria-label="scroll-up">
                    <IconArrowTop width={16} height={16}>
                        <use href={`${sprite}#arrow-top`}></use>
                    </IconArrowTop>
                </ScrollButton>}
        </>    
    );
};