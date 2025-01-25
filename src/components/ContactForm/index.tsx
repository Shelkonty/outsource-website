import React from "react";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import {
  Container,
  FormSection,
  Input,
  ServiceButtons,
  ServiceButton,
  SubmitButton,
  TextArea, InputGroup, InputRow, ServiceSection
} from "./styles";

const Contact = () => {
  const { values, handleChange, handleSubmit } = useForm(validate);

  return (
      <Container>
        <div style={{alignContent: "center"}}>
          <h1 style={{ fontSize: '3.5rem', color: '#17153A', marginBottom: '1.5rem' }}>
            ЗАПОЛНИТЕ ФОРМУ
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Хотите создать новый сайт или обновить существующий? Оставьте свои контактные данные, и мы с удовольствием поможем вам реализовать ваш проект.
          </p>
        </div>

        <FormSection>
          <form onSubmit={handleSubmit}>
            <h2>Ваши данные:</h2>
            <InputGroup>
              <Input
                  type="text"
                  name="name"
                  placeholder="Как вас зовут?*"
                  value={values.name}
                  onChange={handleChange}
              />
              <InputRow>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Телефон*"
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
              <h2>Какой сайт вам необходим?*</h2>
              <ServiceButtons>
                {["Лендинг", "Сайт-визитка", "Сайт для компании"].map(service => (
                    <ServiceButton
                        key={service}
                        active={values.siteType === service}
                        onClick={() => handleChange({
                          target: { name: 'siteType', value: service }
                        } as React.ChangeEvent<HTMLInputElement>)}
                    >
                      {service}
                    </ServiceButton>
                ))}
              </ServiceButtons>
              <ServiceButtons>
                {["Редизайн сайта", "Нужна консультация"].map(service => (
                    <ServiceButton
                        key={service}
                        active={values.siteType === service}
                        onClick={() => handleChange({
                          target: { name: 'siteType', value: service }
                        } as React.ChangeEvent<HTMLInputElement>)}
                    >
                      {service}
                    </ServiceButton>
                ))}
              </ServiceButtons>
            </ServiceSection>

            <div>
              <h2>Детали проекта:</h2>
              <TextArea
                  name="details"
                  placeholder="Что нам необходимо знать?"
                  value={values.details}
                  onChange={handleChange}
              />
              <SubmitButton type="submit">
                Отправить сообщение
              </SubmitButton>
            </div>
          </form>
        </FormSection>
      </Container>
  );
};

export default Contact;