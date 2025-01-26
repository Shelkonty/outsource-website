import React from 'react';
import { Container, Title, StepContainer, StepBox, StepNumber, StepTitle, StepText } from './style';

const ProcessSection = () => {
    return (
        <Container>
            <Title>С НАМИ ПРОСТО...</Title>

            <StepContainer>
                <StepBox>
                    <StepTitle>ДИЗАЙН</StepTitle>
                    <StepText>
                        Изучаем конкурентов, создаем концепцию, формируем дизайн и структуру.
                        Разрабатываем удобный интерфейс.
                    </StepText>
                    <StepNumber>1</StepNumber>
                </StepBox>

                <StepBox>
                    <StepTitle>РАЗРАБОТКА</StepTitle>
                    <StepText>
                        Реализуем дизайн в рабочий сайт, добавляем функционал и интерактивность.
                        Оптимизируем для поисковых систем (SEO).
                    </StepText>
                    <StepNumber>2</StepNumber>
                </StepBox>

                <StepBox>
                    <StepTitle>ЗАПУСК</StepTitle>
                    <StepText>
                        Проводим тестирование, запускаем сайт и передаем права доступа.
                        При необходимости настраиваем рекламу.
                    </StepText>
                    <StepNumber>3</StepNumber>
                </StepBox>
            </StepContainer>
        </Container>
    );
};

export default ProcessSection;