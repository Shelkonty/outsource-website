import styled from "styled-components";

export const PrinciplesWrapper = styled("section")`
    padding: 8rem 0 3rem;
    background: #f6f6f6;
`;

export const PrinciplesContainer = styled("div")`
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PrinciplesTitle = styled("h1")`
    font-size: 30px;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 700;
    color: #18216d;
    margin-bottom: 2rem;
`;

export const SectionTitle = styled("h2")`
    font-size: 35px;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    color: #18216d;
    margin: 2.5rem 0 1.5rem;
`;

export const PrinciplesText = styled("p")`
    font-size: 16px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #18216d;
    line-height: 1.6;
    margin-bottom: 1rem;
`;

export const ListItem = styled("div")`
    font-size: 16px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #18216d;
    line-height: 1.6;
    margin: 0.5rem 0 0.5rem 1.5rem;
    position: relative;

    &:before {
        content: "•";
        position: absolute;
        left: -1rem;
    }
`;