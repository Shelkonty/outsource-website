import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const FormSection = styled.div`
    max-width: 450px;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    h2 {
        font-size: 1.5rem;
        color: #17153A;

        @media (max-width: 480px) {
            font-size: 1.25rem;
        }
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const InputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background: #F9FAFB;
    font-size: 16px;
`;

export const ServiceSection = styled.div`
    margin-bottom: 2rem;
`;

export const ServiceButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;

export const ServiceButton = styled.button<{ active: boolean }>`
    padding: 0.75rem 1.25rem;
    border: 1px solid ${props => props.active ? '#46278f' : '#E5E7EB'};
    border-radius: 24px;
    background: ${props => props.active ? '#F5F3FF' : '#fff'};
    color: ${props => props.active ? '#46278f' : '#374151'};
    font-size: 14px;
    white-space: nowrap;

    @media (max-width: 480px) {
        padding: 0.5rem 1rem;
        font-size: 13px;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 0.75rem;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background: #F9FAFB;
    margin-bottom: 0.55rem;
    font-size: 16px;

    @media (max-width: 480px) {
        min-height: 80px;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    background: #46278f;
    border-radius: 8px;
    color: white;
    font-size: 16px;
`;