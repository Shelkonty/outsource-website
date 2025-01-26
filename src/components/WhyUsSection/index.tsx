import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import { Container, Title, Section, SectionTitle, SectionText } from './styles';

interface SectionData {
    title: string;
    text: string;
}

const sections: SectionData[] = [
    {
        title: 'QUALITY DEVELOPMENT',
        text: 'QUALITY DEVELOPMENT TEXT'
    },
    {
        title: 'EFFECTIVE ANIMATIONS',
        text: 'EFFECTIVE ANIMATIONS TEXT'
    },
    {
        title: 'OUR APPROACH',
        text: 'OUR APPROACH TEXT'
    },
    {
        title: 'POST LAUNCH SUPPORT',
        text: 'POST LAUNCH SUPPORT TEXT'
    }
];

const WhyUsSection = ({ t }: { t: TFunction }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container>
                <Title>{t("WHY US")}</Title>

            {sections.map((section, index) => (
                    <Section className="section" $isActive={index === activeIndex}>
                        <SectionTitle>{t(section.title)}</SectionTitle>
                        <SectionText>{t(section.text)}</SectionText>
                    </Section>
            ))}
        </Container>
    );
};

export default withTranslation()(WhyUsSection);