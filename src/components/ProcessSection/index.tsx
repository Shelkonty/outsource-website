import React from 'react';
import { Container, Title, StepContainer, StepBox, StepNumber, StepTitle, StepText } from './style';
import { withTranslation, TFunction } from "react-i18next";

const ProcessSection = ({ t }: { t: TFunction }) => {
    return (
        <Container>
            <Title>{t("IT'S EASY WITH US")}</Title>
            <StepContainer>
                <StepBox>
                    <StepTitle>{t("processDESIGN")}</StepTitle>
                    <StepText>
                        {t("We study competitors")}
                    </StepText>
                    <StepNumber>1</StepNumber>
                </StepBox>

                <StepBox>
                    <StepTitle>{t("DEVELOPMENT")}</StepTitle>
                    <StepText>
                        {t("We implement")}
                    </StepText>
                    <StepNumber>2</StepNumber>
                </StepBox>

                <StepBox>
                    <StepTitle>{t("LAUNCH")}</StepTitle>
                    <StepText>
                        {t("We conduct")}
                    </StepText>
                    <StepNumber>3</StepNumber>
                </StepBox>
            </StepContainer>
        </Container>
    );
};

export default withTranslation()(ProcessSection);