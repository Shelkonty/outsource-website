import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding: 5rem 0;
    text-align: center;
    h6 {
        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 400;
    }
    
    .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin: 2rem 0 3rem;
        @media (max-width: 480px) {
            justify-content: flex-start;
            gap: 1rem;
        }
    }
`;

interface CategoryButtonProps {
    active: boolean;
}

export const CategoryButton = styled.button<CategoryButtonProps>`
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    border: 1px solid #2E186A;
    background: ${props => props.active ? '#2E186A' : 'transparent'};
    color: ${props => props.active ? '#fff' : '#2E186A'};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background: #2E186A;
        color: #fff;
    }
`;

export const TechCard = styled.div`
    background: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .icon-wrapper {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    h3 {
        margin: 0;
        color: #000;
        font-size: 1.125rem;
    }
`;