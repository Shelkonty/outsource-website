import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 0;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    color: #1E3A8A;
    width: 100%;
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`;

export const StepBox = styled.div`
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 2rem;
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    width: 100%;
    min-height: 200px;
    position: relative;
    margin: 0;
`;

export const StepTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: #1E3A8A;
    width: 100%;
`;

export const StepText = styled.p`
    color: #6B7280;
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    width: 100%;
`;

export const StepNumber = styled.div`
    background: #B2F5EA;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
`;