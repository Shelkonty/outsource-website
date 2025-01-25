import React from 'react';
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import {
    ContactWrapper,
    Title,
    ContactGrid,
    ContactItem,
    TextWrapper,
    ContactLabel,
    ContactValue
} from './styles';
import i18n from "i18next";

interface Contact {
    label: string;
    value?: string;
    color: string;
    href: string;
    isEmail: boolean;
}

const contacts: Contact[] = [
    {
        label: 'Telegram',
        color: '#0088cc',
        href: 'https://t.me/+79819500636',
        isEmail: false
    },
    {
        label: 'WhatsApp',
        color: '#25D366',
        href: 'https://wa.me/79819500636',
        isEmail: false
    },
    {
        label: 'Email',
        value: 'primexstudio@mail.ru',
        color: '#EA4335',
        href: 'mailto:primexstudio@mail.ru',
        isEmail: true
    }
];

const SocialContactSection= ({ t }: { t: TFunction }) => {

    return (
        <ContactWrapper>
            <Fade direction="down">
                <Title>{t("Find us in Social network")}</Title>
            </Fade>

            <ContactGrid>
                {contacts.map((contact, index) => (
                    <Fade
                        key={contact.label}
                        direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                        delay={index * 200}
                    >
                        <ContactItem
                            href={contact.href}
                            color={contact.color}
                            isEmail={contact.isEmail}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TextWrapper isEmail={contact.isEmail}>
                                <ContactLabel
                                    color={contact.color}
                                    isEmail={contact.isEmail}
                                    className="email-label"
                                >
                                    {contact.label}
                                </ContactLabel>
                                {contact.isEmail && (
                                    <ContactValue
                                        isEmail={contact.isEmail}
                                        className="email-value"
                                    >
                                        {contact.value}
                                    </ContactValue>
                                )}
                            </TextWrapper>
                        </ContactItem>
                    </Fade>
                ))}
            </ContactGrid>
        </ContactWrapper>
    );
};

export default withTranslation()(SocialContactSection);