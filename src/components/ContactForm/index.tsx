import React, {useState} from "react";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { withTranslation, TFunction } from "react-i18next";
import {
    Container,
    FormSection,
    Input,
    ServiceButtons,
    ServiceButton,
    SubmitButton,
    TextArea,
    InputGroup,
    InputRow,
    ServiceSection, SuccessMessage
} from "./styles";

const Contact = ({ t }: { t: TFunction }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const { values, handleChange } = useForm(validate);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!values.name || !values.phone || !values.email || !values.siteType || !values.details) {
            return;
        }

        try {
            const response = await fetch('https://backend-litui21lu-shelkonty-e4379af9.vercel.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container>
            {showSuccess && (
                <SuccessMessage>
                    {t("messageSuccess")}
                </SuccessMessage>
            )}
            <div style={{alignContent: "center"}}>
                <h1 style={{ fontSize: '3.5rem', color: '#17153A', marginBottom: '1.5rem' }}>
                    {t("title")}
                </h1>
                <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    {t("subtitle")}
                </p>
            </div>

            <FormSection>
                <form onSubmit={submitForm}>
                    <h2>{t("yourData")}</h2>
                    <InputGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder={t("name")}
                            value={values.name || ''}
                            onChange={handleChange}
                        />
                        <InputRow>
                            <Input
                                type="tel"
                                name="phone"
                                placeholder={t("phone")}
                                value={values.phone || ''}
                                onChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={values.email || ''}
                                onChange={handleChange}
                            />
                        </InputRow>
                    </InputGroup>

                    <ServiceSection>
                        <h2>{t("siteNeeded")}</h2>
                        <ServiceButtons>
                            {['landing', 'businessCard', 'corporate'].map(type => (
                                <ServiceButton
                                    key={type}
                                    active={values.siteType === t(type)}
                                    onClick={() => handleChange({
                                        target: { name: 'siteType', value: t(type) }
                                    } as React.ChangeEvent<HTMLInputElement>)}
                                >
                                    {t(type)}
                                </ServiceButton>
                            ))}
                        </ServiceButtons>
                        <ServiceButtons>
                            {['redesign', 'consultation'].map(type => (
                                <ServiceButton
                                    key={type}
                                    active={values.siteType === t(type)}
                                    onClick={() => handleChange({
                                        target: { name: 'siteType', value: t(type) }
                                    } as React.ChangeEvent<HTMLInputElement>)}
                                >
                                    {t(type)}
                                </ServiceButton>
                            ))}
                        </ServiceButtons>
                    </ServiceSection>

                    <div>
                        <h2>{t("details")}</h2>
                        <TextArea
                            name="details"
                            placeholder={t("whatToKnow")}
                            value={values.details || ''}
                            onChange={handleChange}
                        />
                        <SubmitButton type="submit">
                            {t("submit")}
                        </SubmitButton>
                    </div>
                </form>
            </FormSection>
        </Container>
    );
};

export default withTranslation()(Contact);