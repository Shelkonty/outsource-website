import React from "react";
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
  TextArea, InputGroup, InputRow, ServiceSection
} from "./styles";

const Contact = ({ t }: { t: TFunction }) => {
  const { values, handleChange, handleSubmit } = useForm(validate);

  return (
      <Container>
        <div style={{alignContent: "center"}}>
          <h1 style={{ fontSize: '3.5rem', color: '#17153A', marginBottom: '1.5rem' }}>
            {t("title")}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: '1.6' }}>
            {t("subtitle")}
          </p>
        </div>

        <FormSection>
          <form onSubmit={handleSubmit}>
            <h2 id="titleForContactScroll" >{t("yourData")}</h2>
            <InputGroup>
              <Input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  value={values.name}
                  onChange={handleChange}
              />
              <InputRow>
                <Input
                    type="tel"
                    name="phone"
                    placeholder={t("phone")}
                    value={values.phone}
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                />
              </InputRow>
            </InputGroup>

            <ServiceSection>
              <h2>{t("siteNeeded")}</h2>
              <ServiceButtons>
                <ServiceButton
                    active={values.siteType === t("landing")}
                    onClick={() => handleChange({
                      target: { name: 'siteType', value: t("landing") }
                    } as React.ChangeEvent<HTMLInputElement>)}
                >
                  {t("landing")}
                </ServiceButton>
                <ServiceButton
                    active={values.siteType === t("businessCard")}
                    onClick={() => handleChange({
                      target: { name: 'siteType', value: t("businessCard") }
                    } as React.ChangeEvent<HTMLInputElement>)}
                >
                  {t("businessCard")}
                </ServiceButton>
                <ServiceButton
                    active={values.siteType === t("corporate")}
                    onClick={() => handleChange({
                      target: { name: 'siteType', value: t("corporate") }
                    } as React.ChangeEvent<HTMLInputElement>)}
                >
                  {t("corporate")}
                </ServiceButton>
              </ServiceButtons>
              <ServiceButtons>
                <ServiceButton
                    active={values.siteType === t("redesign")}
                    onClick={() => handleChange({
                      target: { name: 'siteType', value: t("redesign") }
                    } as React.ChangeEvent<HTMLInputElement>)}
                >
                  {t("redesign")}
                </ServiceButton>
                <ServiceButton
                    active={values.siteType === t("consultation")}
                    onClick={() => handleChange({
                      target: { name: 'siteType', value: t("consultation") }
                    } as React.ChangeEvent<HTMLInputElement>)}
                >
                  {t("consultation")}
                </ServiceButton>
              </ServiceButtons>
            </ServiceSection>

            <div>
              <h2>{t("details")}</h2>
              <TextArea
                  name="details"
                  placeholder={t("whatToKnow")}
                  value={values.details}
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