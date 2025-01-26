import React, {lazy, useState} from 'react';
import { Row, Col } from 'antd';
import Container from '../../common/Container';
import { Fade } from "react-awesome-reveal";
import { ContentWrapper, CategoryButton, TechCard } from "./styles";
import SocialContactSection from "../../components/SocialContact";
import ServiceBlock from "../../components/ServiceBlock";
import { withTranslation, TFunction } from "react-i18next";
import {categories, Category, technologies} from "./types";
import WhyUsSection from "../../components/WhyUsSection";

const Contact = lazy(() => import("../../components/ContactForm"));

const About = ({ t }: { t: TFunction }) => {
    const [activeCategory, setActiveCategory] = useState<Category>('backend');

    return (
        <Container>
            <WhyUsSection/>
            <ContentWrapper>
                <Fade direction="up">
                    <h6>{t("Our Expertise")}</h6>
                    <div className="categories">
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.key}
                                active={activeCategory === category.key}
                                onClick={() => setActiveCategory(category.key)}
                            >
                                {category.label}
                            </CategoryButton>
                        ))}
                    </div>
                    <Row gutter={[24, 24]}>
                        {technologies[activeCategory].map((tech) => (
                            <Col xs={24} sm={12} md={8} lg={6} key={tech.name}>
                                <TechCard>
                                    <div className="icon-wrapper">
                                        <img src={tech.icon} alt={tech.name} />
                                    </div>
                                    <h3>{tech.name}</h3>
                                </TechCard>
                            </Col>
                        ))}
                    </Row>
                </Fade>
            </ContentWrapper>
            <ServiceBlock/>
            <Contact/>
            <SocialContactSection/>
        </Container>
    );
};

export default withTranslation()(About);