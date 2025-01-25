import styled from 'styled-components';

interface ContactItemProps {
    isEmail?: boolean;
    color?: string;
}

interface TextWrapperProps {
    isEmail?: boolean;
}

interface ContactLabelProps {
    isEmail?: boolean;
    color?: string;
}

export const ContactWrapper = styled.div`
    padding: 5rem 0;
`;

export const Title = styled.h2`
    font-size: 56px;
    text-align: center;
    margin-bottom: 4rem;
    color: #2E186A;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 700;
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactItem = styled.a<ContactItemProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    min-height: 80px;
    background: #fff;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid #d8d9da;
    cursor: pointer;
    overflow: hidden;
    width: 100%;

    &:hover {
        background: ${props => props.color};
        transform: translateY(-5px);
        border-color: ${props => props.color};

        h3, p {
            color: white;
        }

        ${props => props.isEmail && `
            .email-label {
                opacity: 0;
                transform: translateY(-20px);
            }
            .email-value {
                opacity: 1;
                transform: translateY(0);
            }
        `}
    }
`;

export const TextWrapper = styled.div<TextWrapperProps>`
    position: relative;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactLabel = styled.h3<ContactLabelProps>`
    font-size: 24px;
    margin: 0;
    color: ${props => props.color};
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;
    position: ${props => props.isEmail ? 'absolute' : 'static'};
    text-align: center;
    width: 100%;
    transform: translateY(0);
    opacity: 1;
`;

export const ContactValue = styled.p<ContactLabelProps>`
    font-size: 18px;
    margin: 0;
    color: #18216d;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
`;