import React, { useState } from "react";
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
    ServiceSection
} from "./styles";
import {SiteType, siteTypeMap} from "./types";

const Contact = ({ t }: { t: TFunction }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { values, handleChange } = useForm(validate);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const translationKey = Object.keys(siteTypeMap).find(
            key => t(key) === values.siteType
        ) as SiteType | undefined;

        const englishSiteType = translationKey ? siteTypeMap[translationKey] : values.siteType;

        const formData = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            siteType: englishSiteType,
            details: values.details
        };

        try {
            const response = await fetch('http://localhost:5000/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsSubmitted(false);
                    ['name', 'phone', 'email', 'siteType', 'details'].forEach(field => {
                        handleChange({
                            target: {
                                name: field,
                                value: ''
                            }
                        } as React.ChangeEvent<HTMLInputElement>);
                    });
                }, 600);
            } else {
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData?.message || response.statusText || 'An error occurred';
                setError(errorMessage);
            }
        } catch (error) {
            setError('Failed to submit form. Please try again.');
        }
    };

    const handleSiteTypeChange = (type: SiteType) => {
        const translatedValue = t(type);

        handleChange({
            target: {
                name: 'siteType',
                value: translatedValue
            }
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <Container>
            {error && (
                <div style={{
                    color: 'red',
                    backgroundColor: '#FFEBEE',
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '4px'
                }}>
                    {error}
                </div>
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
                    <h2 id="titleForContactScroll">{t("yourData")}</h2>
                    <InputGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder={t("name")}
                            value={values.name || ''}
                            onChange={handleChange}
                            required
                        />
                        <InputRow>
                            <Input
                                type="tel"
                                name="phone"
                                placeholder={t("phone")}
                                value={values.phone || ''}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={values.email || ''}
                                onChange={handleChange}
                                required
                            />
                        </InputRow>
                    </InputGroup>

                    <ServiceSection>
                        <h2>{t("siteNeeded")}</h2>
                        <ServiceButtons>
                            {(['landing', 'businessCard', 'corporate'] as const).map(type => (
                                <ServiceButton
                                    key={type}
                                    active={values.siteType === t(type)}
                                    onClick={() => handleSiteTypeChange(type)}
                                    type="button"
                                >
                                    {t(type)}
                                </ServiceButton>
                            ))}
                        </ServiceButtons>
                        <ServiceButtons>
                            {(['redesign', 'consultation'] as const).map(type => (
                                <ServiceButton
                                    key={type}
                                    active={values.siteType === t(type)}
                                    onClick={() => handleSiteTypeChange(type)}
                                    type="button"
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
                            required
                        />
                        <SubmitButton type="submit" isSubmitted={isSubmitted}>
                            {isSubmitted ? t("messageSuccess") : t("submit")}
                        </SubmitButton>
                    </div>
                </form>
            </FormSection>
        </Container>
    );
};

export default withTranslation()(Contact);