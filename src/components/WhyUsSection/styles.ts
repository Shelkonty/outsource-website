import styled from 'styled-components';

interface SectionProps {
    $isActive: boolean;
}

export const Container = styled.div`
    background: #fff;
    padding: 6rem 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 8rem;
`;
export const Title = styled.h1`
    font-size: 5.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    color: #333333;

    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
`;

export const Section = styled.div<SectionProps>`
    max-width: 800px;
    margin: 0 auto;
    transform: scale(${props => props.$isActive ? 1.1 : 0.9});
    opacity: ${props => props.$isActive ? 1 : 0.5};
    transition: all 0.5s ease;
`;

export const SectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1.5rem;
    text-align: center;
    transition: color 0.5s ease;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const SectionText = styled.p`
    font-size: 1.25rem;
    line-height: 1.6;
    color: #666666;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    transition: color 0.5s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;