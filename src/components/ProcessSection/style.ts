import styled from 'styled-components';

export const Container = styled.div`
    padding: 6rem 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 6rem;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-bottom: 4rem;
    }
`;

export const StepContainer = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
`;

export const StepBox = styled.div`
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
    padding: 2rem;
    background: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 100%;
    max-width: 450px;
    margin-bottom: 2rem;

    &:nth-child(1) {
        margin-left: 0;
    }

    &:nth-child(2) {
        margin-left: auto;
        margin-right: auto;
    }

    &:nth-child(3) {
        margin-left: auto;
        margin-right: 0;
    }
`;

export const StepTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const StepText = styled.p`
    color: #6B7280;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
`;

export const StepNumber = styled.div`
    background: #B2F5EA;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
`;