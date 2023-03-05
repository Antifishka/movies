import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { StyledLink } from "./BackButton.styled";

export const BackButton = ({ children }) => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    console.log(backLinkHref);

    return <StyledLink to={backLinkHref}>
        <BsArrowLeft size={16} />
        {children}</StyledLink>
};
