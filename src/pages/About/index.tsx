import React, {lazy, useState} from 'react';
import { Row, Col } from 'antd';
import Container from '../../common/Container';
import { Fade } from "react-awesome-reveal";
import { ContentWrapper, CategoryButton, TechCard } from "./styles";
import SocialContactSection from "../../components/SocialContact";
import ServiceBlock from "../../components/ServiceBlock";
import ProcessSection from "../../components/ProcessSection";
const Contact = lazy(() => import("../../components/ContactForm"));

interface Technology {
    name: string;
    icon: string;
}

type Category = 'backend' | 'frontend' | 'mobile' | 'management';

type TechnologiesMap = Record<Category, Technology[]>;

const categories: Array<{key: Category; label: string}> = [
    { key: 'backend', label: 'Back-End' },
    { key: 'frontend', label: 'Front-End' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'management', label: 'Менеджмент и дизайн' }
];

const technologies: TechnologiesMap = {
    backend: [
        { name: 'Go', icon: '/img/icons/go.svg' },
        { name: 'Python', icon: '/img/icons/python.svg' },
        { name: 'PHP', icon: '/img/icons/php.svg' },
        { name: 'PostgreSQL', icon: '/img/icons/postgresql.svg' },
        { name: 'MySQL', icon: '/img/icons/mysql.svg' },
        { name: 'Redis', icon: '/img/icons/redis.svg' }
    ],
    frontend: [
        { name: 'React', icon: '/img/icons/react.svg' },
        { name: 'TypeScript', icon: '/img/icons/typescript.svg' },
        { name: 'JavaScript', icon: '/img/icons/javascript.svg' }
    ],
    mobile: [
        { name: 'Swift', icon: '/img/icons/swift.svg' },
        { name: 'React Native', icon: '/img/icons/react-native.svg' },
        { name: 'Flutter', icon: '/img/icons/flutter.svg' },
        { name: 'Kotlin', icon: '/img/icons/kotlin.svg' },
    ],
    management: [
        { name: 'Jira', icon: '/img/icons/jira.svg' },
        { name: 'Figma', icon: '/img/icons/figma.svg' },
        { name: 'Adobe XD', icon: '/img/icons/adobe-xd.svg' }

    ]
};

const About = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('backend');

    return (
        <Container>
            <ContentWrapper>
                <Fade direction="up">
                    <h6>Our Expertise</h6>
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
            <ProcessSection/>
            <Contact/>
            <SocialContactSection/>
        </Container>
    );
};

export default About;