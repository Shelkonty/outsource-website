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
    ServiceSection, Subtitle, TitleSection, Title
} from "./styles";
import {SiteType, siteTypeMap} from "./types";

const Contact = ({ t }: { t: TFunction }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { values, handleChange } = useForm(validate);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

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
            const response = await fetch('http://2.56.177.66:5000/api/consultation', {
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
                }, 1200);
            }
        } catch (error) {}
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
            <TitleSection>
                <Title>
                    {t("title")}
                </Title>
                <Subtitle>
                    {t("subtitle")}
                </Subtitle>
            </TitleSection>

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